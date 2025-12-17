import type { TestConfig } from "@shared/schema";

export const testData: TestConfig = {
  id: "default-test",
  title: "General Knowledge Assessment",
  description: "Test your knowledge across various topics including science, geography, history, and more. Answer all questions within the time limit.",
  durationMinutes: 5,
  questions: [
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
  ],
};
