import type { TestConfig } from "@shared/schema";

export const testData: TestConfig = {
  id: "default-test",
  title: "Materials Science: Metals & Steel Assessment",
  description: "Comprehensive assessment on metal properties, ferrous metals, steel identification, aircraft alloys, and heat treatment. Test your knowledge on materials engineering. Answer all 15 questions within the time limit.",
  durationMinutes: 20,
  questions: [
    {
      id: 1,
      text: "Which of the following is a defining property of a metal?",
      options: ["It is transparent to visible light.", "It is generally brittle at room temperature.", "It has high electrical and thermal conductivity."],
      correctOptionIndex: 2,
    },
    {
      id: 2,
      text: "What property refers to a material's ability to retain a deformed shape after the force is removed?",
      options: ["Elasticity", "Plasticity", "Toughness"],
      correctOptionIndex: 1,
    },
    {
      id: 3,
      text: "Which property describes a material's ability to resist fracture under impact loading?",
      options: ["Hardness", "Rigidity", "Toughness"],
      correctOptionIndex: 2,
    },
    {
      id: 4,
      text: "What is the main difference between wrought iron and cast iron?",
      options: ["Wrought iron has a lower carbon content.", "Cast iron is more ductile.", "Wrought iron cannot be welded."],
      correctOptionIndex: 0,
    },
    {
      id: 5,
      text: "What is the primary effect of adding chromium to steel?",
      options: ["Increases ductility and malleability.", "Increases hardness, strength, and corrosion resistance.", "Lowers the melting point."],
      correctOptionIndex: 1,
    },
    {
      id: 6,
      text: "Which microstructure of steel is a mixture of ferrite and cementite in a laminated form?",
      options: ["Austenite", "Pearlite", "Martensite"],
      correctOptionIndex: 1,
    },
    {
      id: 7,
      text: "In the AISI/SAE system, what does the \"5xxx\" series indicate?",
      options: ["Nickel-chromium steels.", "Chromium steels.", "Molybdenum steels."],
      correctOptionIndex: 1,
    },
    {
      id: 8,
      text: "Which stainless steel series is non-magnetic and cannot be hardened by heat treatment?",
      options: ["400 Series", "300 Series", "500 Series"],
      correctOptionIndex: 1,
    },
    {
      id: 9,
      text: "What does the abbreviation \"CRES\" stand for?",
      options: ["Corrosion-Resistant Engineered Steel", "Corrosion-Resistant Steel", "Chromium-Rich Enhanced Steel"],
      correctOptionIndex: 1,
    },
    {
      id: 10,
      text: "Which alloy is specifically used for elevated-temperature applications such as aft engine mounts?",
      options: ["4340M", "15-5PH", "9Ni-4Co-0.30C"],
      correctOptionIndex: 2,
    },
    {
      id: 11,
      text: "What is a typical use for 300-series stainless steel in aircraft?",
      options: ["Landing gear components.", "Hydraulic tubing.", "Lavatories and galleys."],
      correctOptionIndex: 2,
    },
    {
      id: 12,
      text: "Which steel alloy is commonly used for flap tracks and slat tracks?",
      options: ["4330M", "4340M", "17-4PH"],
      correctOptionIndex: 1,
    },
    {
      id: 13,
      text: "What is the purpose of \"soaking\" during heat treatment?",
      options: ["To clean the steel surface.", "To ensure uniform heating throughout the material.", "To rapidly cool the steel."],
      correctOptionIndex: 1,
    },
    {
      id: 14,
      text: "Which heat treatment process involves heating steel above its critical temperature and then cooling in still air?",
      options: ["Annealing", "Normalizing", "Tempering"],
      correctOptionIndex: 1,
    },
    {
      id: 15,
      text: "In cyanide hardening, what is the role of sodium cyanide?",
      options: ["It acts as a flux to remove impurities.", "It provides both heat and carburizing material.", "It prevents oxidation of the steel surface."],
      correctOptionIndex: 1,
    },
  ],
};
