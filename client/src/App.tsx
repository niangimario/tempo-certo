import { useState, useEffect } from "react";
import { queryClient, apiRequest } from "./lib/queryClient";
import { QueryClientProvider, useQuery, useMutation } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import LandingPage from "@/pages/landing";
import TestPage from "@/pages/test";
import ResultsPage from "@/pages/results";
import type { TestConfig, TestResult, TestSession } from "@shared/schema";

type AppState = "loading" | "landing" | "test" | "results";

function AssessmentApp() {
  const [appState, setAppState] = useState<AppState>("loading");
  const [session, setSession] = useState<TestSession | null>(null);
  const [result, setResult] = useState<TestResult | null>(null);
  const { toast } = useToast();

  const { data: testConfig, isLoading: isLoadingConfig } = useQuery<TestConfig>({
    queryKey: ["/api/test-config"],
  });

  const startTestMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/sessions");
      return res.json();
    },
    onSuccess: (data: TestSession) => {
      setSession(data);
      setAppState("test");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to start the test. Please try again.",
        variant: "destructive",
      });
    },
  });

  const submitTestMutation = useMutation({
    mutationFn: async ({ sessionId, answers, timedOut }: { sessionId: string; answers: Record<string, number>; timedOut: boolean }) => {
      const res = await apiRequest("POST", "/api/sessions/submit", {
        sessionId,
        answers,
        timedOut,
      });
      return res.json();
    },
    onSuccess: (data: TestResult) => {
      setResult(data);
      setAppState("results");
      if (data.status === "timed_out") {
        toast({
          title: "Time's Up!",
          description: "Your test was automatically submitted.",
        });
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit the test. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (!isLoadingConfig && testConfig) {
      setAppState("landing");
    }
  }, [isLoadingConfig, testConfig]);

  const handleStartTest = () => {
    startTestMutation.mutate();
  };

  const handleSubmitTest = (answers: Record<string, number>, timedOut: boolean) => {
    if (!session?.id) {
      toast({
        title: "Error",
        description: "Session not found. Please restart the test.",
        variant: "destructive",
      });
      return;
    }
    submitTestMutation.mutate({ sessionId: session.id, answers, timedOut });
  };

  const handleRetake = () => {
    setSession(null);
    setResult(null);
    setAppState("landing");
  };

  if (appState === "loading" || isLoadingConfig || !testConfig) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-muted rounded-full" />
            <div className="absolute inset-0 w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Loading Assessment</h2>
          <p className="text-muted-foreground">Please wait while we prepare your test...</p>
        </div>
      </div>
    );
  }

  if (appState === "landing") {
    return (
      <LandingPage 
        testConfig={testConfig} 
        onStartTest={handleStartTest}
        isLoading={startTestMutation.isPending}
      />
    );
  }

  if (appState === "test" && session) {
    return (
      <TestPage
        testConfig={testConfig}
        sessionId={session.id}
        startTime={new Date(session.startedAt).getTime()}
        onSubmit={handleSubmitTest}
        isSubmitting={submitTestMutation.isPending}
      />
    );
  }

  if (appState === "results" && result) {
    return (
      <ResultsPage
        result={result}
        testConfig={testConfig}
        onRetake={handleRetake}
      />
    );
  }

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AssessmentApp />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
