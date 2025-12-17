import { randomUUID } from "crypto";
import type { TestConfig, TestSession, TestResult, Question } from "@shared/schema";

const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctOptionIndex: 2,
  },
  {
    id: 2,
    text: "Which programming language is known for its use in web browsers?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctOptionIndex: 1,
  },
  {
    id: 3,
    text: "What year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctOptionIndex: 2,
  },
  {
    id: 4,
    text: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctOptionIndex: 1,
  },
  {
    id: 5,
    text: "What is the chemical symbol for water?",
    options: ["O2", "CO2", "H2O", "NaCl"],
    correctOptionIndex: 2,
  },
  {
    id: 6,
    text: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctOptionIndex: 2,
  },
  {
    id: 7,
    text: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctOptionIndex: 3,
  },
  {
    id: 8,
    text: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctOptionIndex: 2,
  },
  {
    id: 9,
    text: "What is the speed of light approximately?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctOptionIndex: 0,
  },
  {
    id: 10,
    text: "Which element has the atomic number 1?",
    options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
    correctOptionIndex: 3,
  },
];

const defaultTestConfig: TestConfig = {
  id: "default-test",
  title: "General Knowledge Assessment",
  description: "Test your knowledge across various topics including science, geography, history, and more. Answer all questions within the time limit.",
  durationMinutes: 5,
  questions: sampleQuestions,
};

export interface IStorage {
  getTestConfig(): Promise<TestConfig>;
  createSession(testConfigId: string): Promise<TestSession>;
  getSession(id: string): Promise<TestSession | undefined>;
  updateSession(id: string, updates: Partial<TestSession>): Promise<TestSession | undefined>;
  calculateResult(sessionId: string, answers: Record<string, number>, timedOut: boolean): Promise<TestResult | undefined>;
}

export class MemStorage implements IStorage {
  private testConfigs: Map<string, TestConfig>;
  private sessions: Map<string, TestSession>;

  constructor() {
    this.testConfigs = new Map();
    this.sessions = new Map();
    this.testConfigs.set(defaultTestConfig.id, defaultTestConfig);
  }

  async getTestConfig(): Promise<TestConfig> {
    return defaultTestConfig;
  }

  async createSession(testConfigId: string): Promise<TestSession> {
    const id = randomUUID();
    const session: TestSession = {
      id,
      testConfigId,
      startedAt: new Date().toISOString(),
      answers: {},
      status: "in_progress",
    };
    this.sessions.set(id, session);
    return session;
  }

  async getSession(id: string): Promise<TestSession | undefined> {
    return this.sessions.get(id);
  }

  async updateSession(id: string, updates: Partial<TestSession>): Promise<TestSession | undefined> {
    const session = this.sessions.get(id);
    if (!session) return undefined;
    
    const updated = { ...session, ...updates };
    this.sessions.set(id, updated);
    return updated;
  }

  async calculateResult(
    sessionId: string, 
    answers: Record<string, number>, 
    timedOut: boolean
  ): Promise<TestResult | undefined> {
    const session = this.sessions.get(sessionId);
    if (!session) return undefined;

    const testConfig = this.testConfigs.get(session.testConfigId);
    if (!testConfig) return undefined;

    const answerDetails = testConfig.questions.map(question => {
      const selectedOptionIndex = answers[question.id.toString()] ?? null;
      const isCorrect = selectedOptionIndex === question.correctOptionIndex;
      
      return {
        questionId: question.id,
        selectedOptionIndex,
        correctOptionIndex: question.correctOptionIndex,
        isCorrect,
      };
    });

    const correctAnswers = answerDetails.filter(a => a.isCorrect).length;
    const score = Math.round((correctAnswers / testConfig.questions.length) * 100);

    await this.updateSession(sessionId, {
      answers,
      status: timedOut ? "timed_out" : "completed",
    });

    return {
      sessionId,
      totalQuestions: testConfig.questions.length,
      correctAnswers,
      score,
      answers: answerDetails,
      completedAt: new Date().toISOString(),
      status: timedOut ? "timed_out" : "completed",
    };
  }
}

export const storage = new MemStorage();
