import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, FileText, CheckCircle, ArrowRight, Timer, Award, Shield } from "lucide-react";
import type { TestConfig } from "@shared/schema";

interface LandingPageProps {
  testConfig: TestConfig;
  onStartTest: () => void;
  isLoading?: boolean;
}

export function LandingPage({ testConfig, onStartTest, isLoading }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-test-title">
            {testConfig.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-test-description">
            {testConfig.description}
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6 pb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-chart-1/10 mb-4">
                <FileText className="w-6 h-6 text-chart-1" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1" data-testid="text-question-count">
                {testConfig.questions.length}
              </div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6 pb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-chart-2/10 mb-4">
                <Clock className="w-6 h-6 text-chart-2" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1" data-testid="text-duration">
                {testConfig.durationMinutes}
              </div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6 pb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-chart-3/10 mb-4">
                <CheckCircle className="w-6 h-6 text-chart-3" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                Auto
              </div>
              <div className="text-sm text-muted-foreground">Scoring</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Instructions
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-semibold text-primary">1</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Read each question carefully</p>
                  <p className="text-sm text-muted-foreground">Take your time to understand what is being asked before selecting an answer.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Monitor your time</p>
                  <p className="text-sm text-muted-foreground">A countdown timer will be displayed at the top of the screen. The test will auto-submit when time expires.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Submit when ready</p>
                  <p className="text-sm text-muted-foreground">You can submit early if you finish before time runs out. Your score will be calculated automatically.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={onStartTest}
            disabled={isLoading}
            className="px-8 py-6 text-lg gap-2"
            data-testid="button-start-test"
          >
            {isLoading ? "Starting..." : "Start Assessment"}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            By starting, you agree to complete the test within the time limit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
