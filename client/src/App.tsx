import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import LandingPage from "@/pages/landing";
import TestPage from "@/pages/test";
import ResultsPage from "@/pages/results";
import { testData } from "./lib/testData";
import type { TestResult, TestSession } from "@shared/schema";

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

type AppState = "landing" | "test" | "results";

function AssessmentApp() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [session, setSession] = useState<TestSession | null>(null);
  const [result, setResult] = useState<TestResult | null>(null);
  const { toast } = useToast();

  const handleStartTest = () => {
    const sessionId = generateUUID();
    const newSession: TestSession = {
      id: sessionId,
      testConfigId: testData.id,
      startedAt: new Date().toISOString(),
      answers: {},
      status: "in_progress",
    };
    setSession(newSession);
    setAppState("test");
  };

  const handleSubmitTest = (answers: Record<string, number>, timedOut: boolean) => {
    if (!session) {
      toast({
        title: "Error",
        description: "Session not found. Please restart the test.",
        variant: "destructive",
      });
      return;
    }

    // Calcular resultado
    let correctAnswers = 0;
    const answerDetails = testData.questions.map((question) => {
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

    const score = Math.round((correctAnswers / testData.questions.length) * 100);
    const testResult: TestResult = {
      sessionId: session.id,
      totalQuestions: testData.questions.length,
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

  if (appState === "landing") {
    return (
      <LandingPage 
        testConfig={testData} 
        onStartTest={handleStartTest}
      />
    );
  }

  if (appState === "test" && session) {
    return (
      <TestPage
        testConfig={testData}
        sessionId={session.id}
        startTime={new Date(session.startedAt).getTime()}
        onSubmit={handleSubmitTest}
      />
    );
  }

  if (appState === "results" && result) {
    return (
      <ResultsPage
        result={result}
        testConfig={testData}
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
