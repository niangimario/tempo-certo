import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Clock, AlertTriangle, Send, ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { TestConfig } from "@shared/schema";

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
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isCriticalTime 
          ? 'bg-destructive/10 border-destructive/30' 
          : isLowTime 
          ? 'bg-yellow-500/10 border-yellow-500/30' 
          : 'bg-card/95 border-border'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-6 mb-3">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-3 px-5 py-3 rounded-xl font-mono text-2xl font-bold transition-all duration-300 ${
                isCriticalTime 
                  ? 'bg-destructive text-destructive-foreground animate-pulse' 
                  : isLowTime 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-muted text-foreground'
              }`}>
                <Clock className="w-5 h-5" />
                <span data-testid="text-timer">{formatTime(timeRemaining)}</span>
              </div>
              
              {isLowTime && (
                <div className={`flex items-center gap-2 text-sm font-medium ${
                  isCriticalTime ? 'text-destructive' : 'text-yellow-600 dark:text-yellow-400'
                }`}>
                  <AlertTriangle className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {isCriticalTime ? "Final minute!" : "Less than 5 minutes"}
                  </span>
                </div>
              )}
            </div>
            
            <div className="text-right">
              <div className="text-sm font-medium text-foreground" data-testid="text-progress">
                {answeredCount} of {totalQuestions}
              </div>
              <div className="text-xs text-muted-foreground">answered</div>
            </div>
          </div>
          
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={`absolute left-0 top-0 h-full transition-all duration-1000 ease-linear rounded-full ${
                isCriticalTime 
                  ? 'bg-destructive' 
                  : isLowTime 
                  ? 'bg-yellow-500' 
                  : 'bg-primary'
              }`}
              style={{ width: `${timeProgressPercent}%` }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
                Question {currentQuestionIndex + 1}
              </span>
              <span className="text-muted-foreground">of {totalQuestions}</span>
            </div>
            
            <div className="flex items-center gap-1.5 flex-wrap">
              {testConfig.questions.map((q, idx) => {
                const isAnswered = answers[q.id.toString()] !== undefined;
                const isCurrent = idx === currentQuestionIndex;
                
                return (
                  <button
                    key={q.id}
                    onClick={() => goToQuestion(idx)}
                    className={`relative w-9 h-9 rounded-lg text-xs font-semibold transition-all duration-200 hover-elevate active-elevate-2 ${
                      isCurrent
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : isAnswered
                        ? 'bg-chart-3/20 text-chart-3 border-2 border-chart-3/30'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                    data-testid={`button-question-nav-${idx}`}
                  >
                    {isAnswered && !isCurrent ? (
                      <Check className="w-4 h-4 mx-auto" />
                    ) : (
                      idx + 1
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <Card className="mb-8 shadow-lg border-2">
            <CardContent className="p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-10 leading-relaxed" data-testid="text-question">
                {currentQuestion.text}
              </h2>

              <RadioGroup
                value={answers[currentQuestion.id.toString()]?.toString() || ""}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, parseInt(value))}
                className="space-y-4"
              >
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id.toString()] === idx;
                  
                  return (
                    <div
                      key={idx}
                      className={`relative flex items-center rounded-xl border-2 p-5 cursor-pointer transition-all duration-200 hover-elevate ${
                        isSelected
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-border hover:border-muted-foreground/30'
                      }`}
                      onClick={() => handleAnswerChange(currentQuestion.id, idx)}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-200 ${
                        isSelected 
                          ? 'border-primary bg-primary' 
                          : 'border-muted-foreground/40'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
                      </div>
                      <RadioGroupItem
                        value={idx.toString()}
                        id={`option-${idx}`}
                        className="sr-only"
                        data-testid={`radio-option-${idx}`}
                      />
                      <Label
                        htmlFor={`option-${idx}`}
                        className="flex-1 cursor-pointer text-foreground text-base"
                      >
                        {option}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => goToQuestion(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
              className="gap-2 px-6"
              data-testid="button-prev-question"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-3">
              {currentQuestionIndex < totalQuestions - 1 ? (
                <Button
                  size="lg"
                  onClick={() => goToQuestion(currentQuestionIndex + 1)}
                  className="gap-2 px-6"
                  data-testid="button-next-question"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
                  <AlertDialogTrigger asChild>
                    <Button size="lg" className="gap-2 px-8" data-testid="button-submit-test">
                      <Send className="w-4 h-4" />
                      Submit Test
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="sm:max-w-md">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-xl">Submit your assessment?</AlertDialogTitle>
                      <AlertDialogDescription className="text-base">
                        <span className="block mb-3">
                          You have answered <strong className="text-foreground">{answeredCount}</strong> of <strong className="text-foreground">{totalQuestions}</strong> questions.
                        </span>
                        {answeredCount < totalQuestions && (
                          <span className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>{totalQuestions - answeredCount} unanswered question(s) will be marked as incorrect.</span>
                          </span>
                        )}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-3 sm:gap-2">
                      <AlertDialogCancel className="sm:w-auto" data-testid="button-cancel-submit">
                        Continue Test
                      </AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={() => handleSubmit(false)}
                        disabled={isSubmitting}
                        className="sm:w-auto gap-2"
                        data-testid="button-confirm-submit"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Now
                          </>
                        )}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 z-40 bg-card/95 backdrop-blur-md border-t py-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-chart-3/30 border-2 border-chart-3/50 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-chart-3" />
              </div>
              <span className="text-sm text-muted-foreground hidden sm:inline">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-muted border-2 border-muted-foreground/20" />
              <span className="text-sm text-muted-foreground hidden sm:inline">Unanswered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progressPercent)}%
              </span>
              <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-chart-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
          
          <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
            <AlertDialogTrigger asChild>
              <Button className="gap-2 shadow-lg" data-testid="button-submit-footer">
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Submit Test</span>
                <span className="sm:hidden">Submit</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-md">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl">Submit your assessment?</AlertDialogTitle>
                <AlertDialogDescription className="text-base">
                  <span className="block mb-3">
                    You have answered <strong className="text-foreground">{answeredCount}</strong> of <strong className="text-foreground">{totalQuestions}</strong> questions.
                  </span>
                  {answeredCount < totalQuestions && (
                    <span className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{totalQuestions - answeredCount} unanswered question(s) will be marked as incorrect.</span>
                    </span>
                  )}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-3 sm:gap-2">
                <AlertDialogCancel className="sm:w-auto">
                  Continue Test
                </AlertDialogCancel>
                <AlertDialogAction 
                  onClick={() => handleSubmit(false)}
                  disabled={isSubmitting}
                  className="sm:w-auto gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Now
                    </>
                  )}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </footer>
    </div>
  );
}

export default TestPage;
