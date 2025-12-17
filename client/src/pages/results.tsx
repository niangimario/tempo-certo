import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle, Award, Target, Clock, RotateCcw, Trophy, AlertTriangle } from "lucide-react";
import type { TestResult, TestConfig } from "@shared/schema";

interface ResultsPageProps {
  result: TestResult;
  testConfig: TestConfig;
  onRetake?: () => void;
}

function getScoreGrade(score: number): { label: string; color: string; message: string } {
  if (score >= 90) return { label: "Excellent", color: "bg-chart-3 text-white", message: "Outstanding performance!" };
  if (score >= 80) return { label: "Very Good", color: "bg-chart-4 text-white", message: "Great job!" };
  if (score >= 70) return { label: "Good", color: "bg-chart-2 text-white", message: "Well done!" };
  if (score >= 60) return { label: "Satisfactory", color: "bg-yellow-500 text-white", message: "You passed!" };
  if (score >= 50) return { label: "Needs Improvement", color: "bg-orange-500 text-white", message: "Keep practicing!" };
  return { label: "Unsatisfactory", color: "bg-destructive text-destructive-foreground", message: "Review the material and try again." };
}

export function ResultsPage({ result, testConfig, onRetake }: ResultsPageProps) {
  const grade = getScoreGrade(result.score);
  const incorrectCount = result.totalQuestions - result.correctAnswers;

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Assessment Complete
          </h1>
          {result.status === "timed_out" && (
            <div className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 mt-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm">Test was auto-submitted due to time limit</span>
            </div>
          )}
        </div>

        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center">
            <div className="relative inline-flex items-center justify-center mb-4">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(result.score / 100) * 440} 440`}
                  strokeLinecap="round"
                  className="text-primary transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-foreground" data-testid="text-score">
                  {result.score}%
                </span>
              </div>
            </div>
            <Badge className={`${grade.color} px-4 py-1.5 text-sm font-medium`} data-testid="badge-grade">
              {grade.label}
            </Badge>
            <p className="text-muted-foreground mt-3">{grade.message}</p>
          </div>
        </Card>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-chart-1/10 mb-3">
                <Target className="w-5 h-5 text-chart-1" />
              </div>
              <div className="text-2xl font-bold text-foreground" data-testid="text-total-questions">
                {result.totalQuestions}
              </div>
              <div className="text-sm text-muted-foreground">Total Questions</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-chart-3/10 mb-3">
                <CheckCircle className="w-5 h-5 text-chart-3" />
              </div>
              <div className="text-2xl font-bold text-chart-3" data-testid="text-correct-answers">
                {result.correctAnswers}
              </div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10 mb-3">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div className="text-2xl font-bold text-destructive" data-testid="text-incorrect-answers">
                {incorrectCount}
              </div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Review Your Answers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              {result.answers.map((answer, idx) => {
                const question = testConfig.questions.find(q => q.id === answer.questionId);
                if (!question) return null;

                return (
                  <AccordionItem 
                    key={answer.questionId} 
                    value={`question-${answer.questionId}`}
                    className={`border rounded-lg px-4 ${answer.isCorrect ? 'border-chart-3/30 bg-chart-3/5' : 'border-destructive/30 bg-destructive/5'}`}
                  >
                    <AccordionTrigger className="hover:no-underline py-4" data-testid={`accordion-question-${idx}`}>
                      <div className="flex items-center gap-3 text-left">
                        {answer.isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-chart-3 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                        )}
                        <span className="font-medium text-foreground">
                          Question {idx + 1}: {question.text.substring(0, 60)}...
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-3 ml-8">
                        <p className="text-foreground font-medium">{question.text}</p>
                        <div className="space-y-2">
                          {question.options.map((option, optIdx) => (
                            <div
                              key={optIdx}
                              className={`p-3 rounded-md text-sm ${
                                optIdx === answer.correctOptionIndex
                                  ? 'bg-chart-3/20 text-chart-3 font-medium'
                                  : optIdx === answer.selectedOptionIndex && !answer.isCorrect
                                  ? 'bg-destructive/20 text-destructive line-through'
                                  : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              {option}
                              {optIdx === answer.correctOptionIndex && (
                                <span className="ml-2 text-xs">(Correct)</span>
                              )}
                              {optIdx === answer.selectedOptionIndex && optIdx !== answer.correctOptionIndex && (
                                <span className="ml-2 text-xs">(Your answer)</span>
                              )}
                            </div>
                          ))}
                          {answer.selectedOptionIndex === null && (
                            <p className="text-sm text-muted-foreground italic">
                              You did not answer this question.
                            </p>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>

        {onRetake && (
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={onRetake}
              className="gap-2"
              data-testid="button-retake-test"
            >
              <RotateCcw className="w-4 h-4" />
              Take Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
