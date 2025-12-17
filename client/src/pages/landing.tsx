import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, CheckCircle, ArrowRight, Shield, Sparkles, Timer, Target } from "lucide-react";
import type { TestConfig } from "@shared/schema";

interface LandingPageProps {
  testConfig: TestConfig;
  onStartTest: () => void;
  isLoading?: boolean;
}

export function LandingPage({ testConfig, onStartTest, isLoading }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header className="text-center mb-16">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-chart-3 blur-3xl" />
            </div>
            <div className="relative flex items-center justify-center gap-4 py-8">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/30 rotate-3">
                  <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-chart-3 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-chart-2 to-chart-2/80 flex items-center justify-center shadow-xl shadow-chart-2/20 -rotate-6">
                  <Timer className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-chart-3 to-chart-3/80 flex items-center justify-center shadow-xl shadow-chart-3/20 rotate-6">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Professional Assessment Platform
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight" data-testid="text-test-title">
            {testConfig.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-test-description">
            {testConfig.description}
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <Card className="group transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-1/20 to-chart-1/5 mb-5 group-hover:scale-105 transition-transform duration-300">
                <FileText className="w-7 h-7 text-chart-1" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2" data-testid="text-question-count">
                {testConfig.questions.length}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Questions</div>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-2/20 to-chart-2/5 mb-5 group-hover:scale-105 transition-transform duration-300">
                <Timer className="w-7 h-7 text-chart-2" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2" data-testid="text-duration">
                {testConfig.durationMinutes}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Minutes</div>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-3/20 to-chart-3/5 mb-5 group-hover:scale-105 transition-transform duration-300">
                <Target className="w-7 h-7 text-chart-3" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                Auto
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Scoring</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 via-transparent to-chart-3/5">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Instructions
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h3 className="font-semibold text-foreground">Read Carefully</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Take your time to understand each question before selecting your answer. You can navigate between questions freely.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h3 className="font-semibold text-foreground">Watch the Timer</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A countdown timer is always visible. The test auto-submits when time expires, so manage your time wisely.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h3 className="font-semibold text-foreground">Submit Anytime</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Finish early? Submit whenever you're ready. Your score is calculated automatically based on correct answers.
                  </p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={onStartTest}
            disabled={isLoading}
            className="px-12 py-7 text-lg font-semibold gap-3 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            data-testid="button-start-test"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Starting...
              </>
            ) : (
              <>
                Start Assessment
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6 max-w-md mx-auto">
            By starting this assessment, you agree to complete it within the allotted time. Good luck!
          </p>
        </div>
      </div>

      <footer className="border-t bg-card/50 backdrop-blur-sm py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Assessment Pro - Professional Online Testing Platform
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
