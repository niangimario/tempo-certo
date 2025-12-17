import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle, Award, Target, RotateCcw, Trophy, AlertTriangle, Sparkles, TrendingUp, Clock } from "lucide-react";
import type { TestResult, TestConfig } from "@shared/schema";

interface ResultsPageProps {
  result: TestResult;
  testConfig: TestConfig;
  onRetake?: () => void;
}

function getScoreGrade(score: number): { label: string; color: string; bgColor: string; message: string; icon: typeof Trophy } {
  if (score >= 90) return { label: "Excellent", color: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-500", message: "Outstanding performance! You've mastered this material.", icon: Trophy };
  if (score >= 80) return { label: "Very Good", color: "text-chart-3", bgColor: "bg-chart-3", message: "Great job! You have a strong understanding.", icon: Sparkles };
  if (score >= 70) return { label: "Good", color: "text-chart-2", bgColor: "bg-chart-2", message: "Well done! Keep up the good work.", icon: TrendingUp };
  if (score >= 60) return { label: "Satisfactory", color: "text-yellow-600 dark:text-yellow-400", bgColor: "bg-yellow-500", message: "You passed! Consider reviewing some topics.", icon: Target };
  if (score >= 50) return { label: "Needs Work", color: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-500", message: "More practice recommended.", icon: Clock };
  return { label: "Unsatisfactory", color: "text-destructive", bgColor: "bg-destructive", message: "Please review the material and try again.", icon: AlertTriangle };
}

export function ResultsPage({ result, testConfig, onRetake }: ResultsPageProps) {
  const grade = getScoreGrade(result.score);
  const incorrectCount = result.totalQuestions - result.correctAnswers;
  const GradeIcon = grade.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${grade.bgColor}/20 mb-8`}>
            <GradeIcon className={`w-12 h-12 ${grade.color}`} />
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Assessment Complete
          </h1>
          
          {result.status === "timed_out" && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm font-medium mt-4">
              <Clock className="w-4 h-4" />
              Auto-submitted due to time limit
            </div>
          )}
        </div>

        <Card className="mb-10 overflow-hidden shadow-xl border-2">
          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 text-center">
            <div className="flex flex-col items-center">
              <div className="relative inline-flex items-center justify-center mb-6">
                <svg className="w-48 h-48" viewBox="0 0 180 180">
                  <circle
                    cx="90"
                    cy="90"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-border"
                  />
                  <circle
                    cx="90"
                    cy="90"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(result.score / 100) * 502.65} 502.65`}
                    strokeLinecap="round"
                    className="text-primary transition-all duration-1000 ease-out"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-6xl font-bold text-foreground" data-testid="text-score">
                    {result.score}
                  </span>
                  <span className="text-xl text-muted-foreground font-medium">percent</span>
                </div>
              </div>
              
              <Badge className={`${grade.bgColor} text-white px-5 py-2 text-base font-semibold`} data-testid="badge-grade">
                {grade.label}
              </Badge>
            </div>
            
            <p className="text-muted-foreground mt-4 text-lg max-w-md mx-auto">
              {grade.message}
            </p>
          </div>
        </Card>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          <Card className="border-2 transition-all duration-300 hover:border-chart-1/30">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-chart-1/10 mb-4">
                <Target className="w-7 h-7 text-chart-1" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1" data-testid="text-total-questions">
                {result.totalQuestions}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Total</div>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all duration-300 hover:border-chart-3/30">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-chart-3/10 mb-4">
                <CheckCircle className="w-7 h-7 text-chart-3" />
              </div>
              <div className="text-3xl font-bold text-chart-3 mb-1" data-testid="text-correct-answers">
                {result.correctAnswers}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Correct</div>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all duration-300 hover:border-destructive/30">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-destructive/10 mb-4">
                <XCircle className="w-7 h-7 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-destructive mb-1" data-testid="text-incorrect-answers">
                {incorrectCount}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Incorrect</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-10 shadow-lg border-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-xl bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              Review Your Answers
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Accordion type="single" collapsible className="space-y-3">
              {result.answers.map((answer, idx) => {
                const question = testConfig.questions.find(q => q.id === answer.questionId);
                if (!question) return null;

                return (
                  <AccordionItem 
                    key={answer.questionId} 
                    value={`question-${answer.questionId}`}
                    className={`border-2 rounded-xl px-5 overflow-hidden transition-all duration-200 ${
                      answer.isCorrect 
                        ? 'border-chart-3/30 bg-chart-3/5 hover:border-chart-3/50' 
                        : 'border-destructive/30 bg-destructive/5 hover:border-destructive/50'
                    }`}
                  >
                    <AccordionTrigger className="hover:no-underline py-5" data-testid={`accordion-question-${idx}`}>
                      <div className="flex items-center gap-4 text-left">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          answer.isCorrect ? 'bg-chart-3/20' : 'bg-destructive/20'
                        }`}>
                          {answer.isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-chart-3" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive" />
                          )}
                        </div>
                        <div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                            Question {idx + 1}
                          </span>
                          <span className="font-medium text-foreground line-clamp-1">
                            {question.text}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <div className="space-y-4 ml-12">
                        <div className="space-y-2">
                          {question.options.map((option, optIdx) => {
                            const isCorrect = optIdx === answer.correctOptionIndex;
                            const isSelected = optIdx === answer.selectedOptionIndex;
                            const isWrongSelection = isSelected && !isCorrect;
                            
                            return (
                              <div
                                key={optIdx}
                                className={`p-4 rounded-lg text-sm flex items-center gap-3 ${
                                  isCorrect
                                    ? 'bg-chart-3/20 border-2 border-chart-3/40'
                                    : isWrongSelection
                                    ? 'bg-destructive/20 border-2 border-destructive/40'
                                    : 'bg-muted/50 border-2 border-transparent'
                                }`}
                              >
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                                  isCorrect 
                                    ? 'bg-chart-3 text-white' 
                                    : isWrongSelection 
                                    ? 'bg-destructive text-white' 
                                    : 'bg-muted-foreground/20'
                                }`}>
                                  {isCorrect ? (
                                    <CheckCircle className="w-4 h-4" />
                                  ) : isWrongSelection ? (
                                    <XCircle className="w-4 h-4" />
                                  ) : (
                                    <span className="text-xs font-medium text-muted-foreground">
                                      {String.fromCharCode(65 + optIdx)}
                                    </span>
                                  )}
                                </div>
                                <span className={`flex-1 ${
                                  isCorrect 
                                    ? 'text-chart-3 font-medium' 
                                    : isWrongSelection 
                                    ? 'text-destructive line-through' 
                                    : 'text-muted-foreground'
                                }`}>
                                  {option}
                                </span>
                                {isCorrect && (
                                  <Badge variant="secondary" className="bg-chart-3/20 text-chart-3 text-xs">
                                    Correct
                                  </Badge>
                                )}
                                {isWrongSelection && (
                                  <Badge variant="secondary" className="bg-destructive/20 text-destructive text-xs">
                                    Your answer
                                  </Badge>
                                )}
                              </div>
                            );
                          })}
                          {answer.selectedOptionIndex === null && (
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm">
                              <AlertTriangle className="w-4 h-4" />
                              You did not answer this question
                            </div>
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
              className="gap-3 px-10 py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              data-testid="button-retake-test"
            >
              <RotateCcw className="w-5 h-5" />
              Take Again
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Practice makes perfect. Try again to improve your score.
            </p>
          </div>
        )}
      </div>
      
      <footer className="border-t bg-card/50 backdrop-blur-sm py-6 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Assessment Pro - Professional Online Testing Platform
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ResultsPage;
