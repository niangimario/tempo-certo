import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Clock, AlertTriangle, Send, ChevronLeft, ChevronRight } from "lucide-react";
import type { TestConfig, Question } from "@shared/schema";

interface TestPageProps {
  testConfig: TestConfig;
  sessionId: string;
  startTime: number;
  onSubmit: (answers: Record<string, number>, timedOut: boolean) => void;
  isSubmitting?: boolean;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function TestPage({ testConfig, sessionId, startTime, onSubmit, isSubmitting }: TestPageProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(testConfig.durationMinutes * 60);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const hasSubmittedRef = useRef(false);

  const totalQuestions = testConfig.questions.length;
  const currentQuestion = testConfig.questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / totalQuestions) * 100;
  const timeProgressPercent = (timeRemaining / (testConfig.durationMinutes * 60)) * 100;
  const isLowTime = timeRemaining <= 300;
  const isCriticalTime = timeRemaining <= 60;

  const handleSubmit = useCallback((timedOut: boolean = false) => {
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;
    onSubmit(answers, timedOut);
  }, [answers, onSubmit]);

  useEffect(() => {
    const endTime = startTime + testConfig.durationMinutes * 60 * 1000;
    
    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
      setTimeRemaining(remaining);
      
      if (remaining <= 0 && !hasSubmittedRef.current) {
        handleSubmit(true);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [startTime, testConfig.durationMinutes, handleSubmit]);

  const handleAnswerChange = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId.toString()]: optionIndex,
    }));
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestionIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className={`sticky top-0 z-50 bg-card border-b transition-colors ${isCriticalTime ? 'border-destructive/50' : isLowTime ? 'border-yellow-500/50' : 'border-border'}`}>
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${isCriticalTime ? 'bg-destructive/10 text-destructive' : isLowTime ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' : 'bg-muted'}`}>
                <Clock className="w-4 h-4" />
                <span className="font-mono text-lg font-bold" data-testid="text-timer">
                  {formatTime(timeRemaining)}
                </span>
              </div>
              {isLowTime && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{isCriticalTime ? "Almost out of time!" : "Less than 5 minutes"}</span>
                </div>
              )}
            </div>
            <div className="text-sm text-muted-foreground" data-testid="text-progress">
              {answeredCount} of {totalQuestions} answered
            </div>
          </div>
          <Progress 
            value={timeProgressPercent} 
            className={`h-1.5 ${isCriticalTime ? '[&>div]:bg-destructive' : isLowTime ? '[&>div]:bg-yellow-500' : ''}`}
          />
        </div>
      </header>

      <main className="flex-1 py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <div className="flex items-center gap-1">
              {testConfig.questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(idx)}
                  className={`w-8 h-8 rounded-md text-xs font-medium transition-colors hover-elevate active-elevate-2 ${
                    idx === currentQuestionIndex
                      ? 'bg-primary text-primary-foreground'
                      : answers[q.id.toString()] !== undefined
                      ? 'bg-chart-3/20 text-chart-3'
                      : 'bg-muted text-muted-foreground'
                  }`}
                  data-testid={`button-question-nav-${idx}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-8" data-testid="text-question">
                {currentQuestion.text}
              </h2>

              <RadioGroup
                value={answers[currentQuestion.id.toString()]?.toString() || ""}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, parseInt(value))}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center rounded-lg border p-4 cursor-pointer transition-colors hover-elevate ${
                      answers[currentQuestion.id.toString()] === idx
                        ? 'border-primary bg-primary/5'
                        : 'border-border'
                    }`}
                    onClick={() => handleAnswerChange(currentQuestion.id, idx)}
                  >
                    <RadioGroupItem
                      value={idx.toString()}
                      id={`option-${idx}`}
                      className="mr-4"
                      data-testid={`radio-option-${idx}`}
                    />
                    <Label
                      htmlFor={`option-${idx}`}
                      className="flex-1 cursor-pointer text-foreground"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={() => goToQuestion(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
              className="gap-2"
              data-testid="button-prev-question"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <Button
                onClick={() => goToQuestion(currentQuestionIndex + 1)}
                className="gap-2"
                data-testid="button-next-question"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
                <AlertDialogTrigger asChild>
                  <Button className="gap-2" data-testid="button-submit-test">
                    <Send className="w-4 h-4" />
                    Submit Test
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Submit your test?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You have answered {answeredCount} of {totalQuestions} questions.
                      {answeredCount < totalQuestions && (
                        <span className="block mt-2 text-yellow-600 dark:text-yellow-400">
                          Warning: {totalQuestions - answeredCount} question(s) are unanswered and will be marked as incorrect.
                        </span>
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel data-testid="button-cancel-submit">Continue Test</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={() => handleSubmit(false)}
                      disabled={isSubmitting}
                      data-testid="button-confirm-submit"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Now"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 bg-card border-t p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-3/30" />
                <span className="text-sm text-muted-foreground">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted" />
                <span className="text-sm text-muted-foreground">Unanswered</span>
              </div>
            </div>
            <Progress value={progressPercent} className="w-32 h-2" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TestPage;
