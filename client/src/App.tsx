import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import LandingPage from "@/pages/landing";
import TestPage from "@/pages/test";
import ResultsPage from "@/pages/results";
import { getTestByName } from "./lib/allTests";
import type { TestResult, TestSession, TestConfig } from "@shared/schema";

function generateUUID(): string {
  return crypto.getRandomValues(new Uint8Array(16))
    .map((n, i) => {
      if (i === 6) n = (n & 0x0f) | 0x40;
      if (i === 8) n = (n & 0x3f) | 0x80;
      const hex = n.toString(16).padStart(2, "0");
      if (i === 3 || i === 5 || i === 7 || i === 9) return `-${hex}`;
      return hex;
    })
    .join("");
}

type AppState = "landing" | "test" | "results" | "error";

function AssessmentApp() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [session, setSession] = useState<TestSession | null>(null);
  const [result, setResult] = useState<TestResult | null>(null);
  const [testConfig, setTestConfig] = useState<TestConfig | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { toast } = useToast();

  // Get test from URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const testName = params.get("test");
    
    if (testName) {
      const test = getTestByName(testName);
      if (test) {
        setTestConfig(test);
      } else {
        setErrorMessage(`Test "${testName}" not found.`);
        setAppState("error");
      }
    }
  }, []);

  const handleStartTest = () => {
    if (!testConfig) {
      toast({
        title: "Error",
        description: "Test not selected.",
        variant: "destructive",
      });
      return;
    }

    const sessionId = generateUUID();
    const newSession: TestSession = {
      id: sessionId,
      testConfigId: testConfig.id,
      startedAt: new Date().toISOString(),
      answers: {},
      status: "in_progress",
    };
    setSession(newSession);
    setAppState("test");
  };

  const handleSubmitTest = (answers: Record<string, number>, timedOut: boolean) => {
    if (!session || !testConfig) {
      toast({
        title: "Error",
        description: "Session not found. Please restart the test.",
        variant: "destructive",
      });
      return;
    }

    let correctAnswers = 0;
    const answerDetails = testConfig.questions.map((question) => {
      const selectedOptionIndex = answers[question.id.toString()];
      const isCorrect = selectedOptionIndex === question.correctOptionIndex;
      if (isCorrect) correctAnswers++;

      return {
        questionId: question.id,
        selectedOptionIndex: selectedOptionIndex ?? null,
        correctOptionIndex: question.correctOptionIndex,
        isCorrect,
      };
    });

    const score = Math.round((correctAnswers / testConfig.questions.length) * 100);
    const testResult: TestResult = {
      sessionId: session.id,
      totalQuestions: testConfig.questions.length,
      correctAnswers,
      score,
      answers: answerDetails,
      completedAt: new Date().toISOString(),
      status: timedOut ? "timed_out" : "completed",
    };

    setResult(testResult);
    setAppState("results");

    if (timedOut) {
      toast({
        title: "Time's Up!",
        description: "Your test was automatically submitted.",
      });
    }
  };

  const handleRetake = () => {
    setSession(null);
    setResult(null);
    setAppState("landing");
  }

  if (appState === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Error</h1>
          <p className="text-muted-foreground mb-6">{errorMessage}</p>
          <a href="/" className="text-primary hover:underline">Return to home</a>
        </div>
      </div>
    );
  }

  if (appState === "landing" && testConfig) {
    return (
      <LandingPage 
        testConfig={testConfig} 
        onStartTest={handleStartTest}
      />
    );
  }

  if (appState === "test" && session && testConfig) {
    return (
      <TestPage
        testConfig={testConfig}
        sessionId={session.id}
        startTime={new Date(session.startedAt).getTime()}
        onSubmit={handleSubmitTest}
      />
    );
  }

  if (appState === "results" && result && testConfig) {
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
    <TooltipProvider>
      <Toaster />
      <AssessmentApp />
    </TooltipProvider>
  );
}

export default App;
