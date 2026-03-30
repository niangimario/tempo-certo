import { Question } from "@/shared/schema";

export const presentSimpleReadingPassage = `READ THE TEXT BELOW, THEN ANSWER THE FOLLOWING QUESTIONS
The Present Simple is a verb tense used to describe actions, situations, and facts that are generally true, regularly repeated, or permanently valid. It is not mainly used to talk about what is happening at the moment, but rather about what happens always, usually, or repeatedly over time.
In terms of structure, the Present Simple is formed using the base form of the verb for the subjects I, you, we, and they, and by adding "-s" or "-es" to the verb when the subject is he, she, or it. For example, "She works" and "They work." Negative sentences are formed using "do not" or "does not," and questions are formed by placing "do" or "does" before the subject, such as "Does she work here?"
The Present Simple is used in several main situations. One of them is to express permanent states. These include situations that are stable over time, such as where someone lives, what they do, or how they feel. For example, "She lives in Luanda" or "He loves his job." These are not temporary actions but ongoing conditions.
Another important use is to describe routines or habits. This refers to actions that are repeated regularly, such as daily or weekly activities. For example, "She wakes up at 6 a.m." or "He goes to the gym." Even if expressions like "every day" are not included, the sentence still implies a repeated action.
The Present Simple is also used to express frequency. In this case, the focus is not only on the action but on how often it occurs. This is usually indicated by adverbs such as "always," "usually," "often," "sometimes," "rarely," or "never." For example, "She always checks her emails" or "They rarely go out."
Another key use of the Present Simple is to describe schedules or fixed timetables. This includes events that are officially planned, such as meetings, transport schedules, or classes. Even if the event refers to the future, the Present Simple is used because it is fixed and scheduled. For example, "The meeting starts at 8:00" or "The train leaves at 6:00."
Finally, the Present Simple is used to express facts or general truths. These are statements that are always true, especially in scientific or natural contexts. For example, "Water boils at 100 degrees Celsius" or "The Earth orbits the Sun." These facts do not change over time.
It is important to distinguish between these uses. For example, a routine describes a repeated action, while frequency emphasizes how often that action occurs. A schedule refers to a fixed time in a timetable, while a fact describes something universally true. A permanent state refers to a stable condition, often related to identity, feelings, or knowledge.
In conclusion, the Present Simple is a fundamental tense used to describe different types of general truths, including permanent situations, repeated actions, frequency, scheduled events, and universal facts. Understanding these distinctions is essential for accurate communication, especially in contexts such as academic writing and language proficiency tests like IELTS.
🧠 PRESENT SIMPLE — COMPLETE LESSON
________________________________________
📌 1. WHAT IS THE PRESENT SIMPLE?
The Present Simple is used to describe:
•	things that are always true 
•	things that happen regularly 
•	things that are fixed or permanent 
👉 Key idea:
The Present Simple is not about "now", but about "generally", "usually", or "always"
________________________________________
🏗️ 2. STRUCTURE
✔️ Affirmative
•	I/You/We/They → base verb 
•	He/She/It → verb + -s 
✔️ Examples:
•	She works every day 
•	They play football 
________________________________________
❌ Negative
•	do not (don't) / does not (doesn't) 
✔️ Examples:
•	She doesn't work on Sundays 
•	They don't like coffee 
________________________________________
❓ Questions
•	Do / Does + subject + base verb 
✔️ Examples:
•	Do you work here? 
•	Does she live in Luanda? 
________________________________________
🎯 3. MAIN USES OF THE PRESENT SIMPLE
________________________________________
🔵 1. PERMANENT STATE
📌 When to use:
•	identity 
•	profession 
•	emotions 
•	knowledge 
•	long-term situations 
________________________________________
✔️ Examples:
•	She lives in Luanda 
•	He works as an engineer 
•	She loves her job 
•	I know the answer 
________________________________________
⚠️ Important:
These verbs are often stative verbs:
•	love, know, believe, understand, need 
👉 They describe states, not actions.
________________________________________
🧠 Rule:
If it describes who someone is or how they feel → Permanent State
________________________________________
🔁 2. ROUTINE (HABITS)
📌 When to use:
•	repeated actions 
•	daily habits 
________________________________________
✔️ Examples:
•	She wakes up at 6 
•	He goes to the gym 
•	They eat breakfast together 
________________________________________
⚠️ Note:
Even without "every day", it is still a routine.
________________________________________
🧠 Rule:
If you can add "every day" → Routine
________________________________________
📊 3. FREQUENCY
📌 When to use:
To show how often something happens
________________________________________
✔️ Common adverbs:
•	always 
•	usually 
•	often 
•	sometimes 
•	rarely 
•	seldom 
•	never 
________________________________________
✔️ Examples:
•	She always checks her phone 
•	He usually arrives early 
•	They rarely go out 
________________________________________
🧠 Rule:
If there is a frequency word → Frequency
________________________________________
📅 4. SCHEDULE (TIMETABLE / FIXED EVENTS)
📌 When to use:
•	fixed plans 
•	timetables 
•	transport schedules 
•	official events 
________________________________________
✔️ Examples:
•	The meeting starts at 8:00 
•	The train leaves at 6:00 
•	The class begins tomorrow 
________________________________________
⚠️ Very important:
👉 Even for the future, we use Present Simple for schedules.
________________________________________
🧠 Rule:
If it looks like a timetable → Schedule
________________________________________
🌍 5. FACT (GENERAL TRUTH)
📌 When to use:
•	scientific facts 
•	natural laws 
•	universal truths 
________________________________________
✔️ Examples:
•	Water boils at 100°C 
•	The Earth orbits the Sun 
•	Light travels fast 
________________________________________
🧠 Rule:
If it is always true → Fact`;

export const presentSimpleQuestions: Question[] = [
  {
    id: 1,
    text: "Elena lives in Chicago. What does the present simple express?",
    options: ["Routine", "Schedule", "Fact"],
    correctOptionIndex: 0
  },
  {
    id: 2,
    text: "She works as a marine biologist. What does the present simple express?",
    options: ["Routine", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 3,
    text: "She loves her job. What does the present simple express?",
    options: ["Schedule", "Permanent state", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "She wakes up at 5:30. What does the present simple express?",
    options: ["Frequency", "Schedule", "Routine"],
    correctOptionIndex: 2
  },
  {
    id: 5,
    text: "She drinks a glass of water. What does the present simple express?",
    options: ["Fact", "Routine", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 6,
    text: "She goes for a 20-minute run. What does the present simple express?",
    options: ["Schedule", "Routine", "Fact"],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "She feeds her cat, Milo. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "She prepares a quick breakfast. What does the present simple express?",
    options: ["Fact", "Routine", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 9,
    text: "Elena always checks the aquarium's animal care schedule. What does the present simple express?",
    options: ["Routine", "Frequency", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "She usually arrives at work by 7:45. What does the present simple express?",
    options: ["Schedule", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "The first staff meeting starts at 8:00 sharp. What does the present simple express?",
    options: ["Routine", "Schedule", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "The dolphin training session begins at 9:30. What does the present simple express?",
    options: ["Frequency", "Schedule", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "She often reviews her notes during the bus ride. What does the present simple express?",
    options: ["Routine", "Schedule", "Frequency"],
    correctOptionIndex: 2
  },
  {
    id: 14,
    text: "Elena handles seawater samples. What does the present simple express?",
    options: ["Schedule", "Routine", "Fact"],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "She knows that saltwater contains dissolved salts. What does the present simple express?",
    options: ["Frequency", "Permanent state", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "Saltwater contains approximately 3.5% dissolved salts. What does the present simple express?",
    options: ["Permanent state", "Fact", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "Every marine biologist remembers that fact. What does the present simple express?",
    options: ["Schedule", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "Corals require stable temperatures to thrive. What does the present simple express?",
    options: ["Routine", "Fact", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "Light penetrates only the upper 200 meters of the ocean. What does the present simple express?",
    options: ["Frequency", "Fact", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 20,
    text: "These scientific truths guide everything she does in the lab. What does the present simple express?",
    options: ["Permanent state", "Fact", "Schedule"],
    correctOptionIndex: 0
  },
  {
    id: 21,
    text: "Her weekly schedule is predictable. What does the present simple express?",
    options: ["Frequency", "Schedule", "Permanent state"],
    correctOptionIndex: 2
  },
  {
    id: 22,
    text: "The aquarium opens to the public at 9:00 a.m. What does the present simple express?",
    options: ["Routine", "Schedule", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 23,
    text: "The behind-the-scenes tour starts at 11:00. What does the present simple express?",
    options: ["Frequency", "Permanent state", "Schedule"],
    correctOptionIndex: 2
  },
  {
    id: 24,
    text: "The behind-the-scenes tour lasts exactly 45 minutes. What does the present simple express?",
    options: ["Routine", "Fact", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "A special feeding demonstration takes place at 2:00 p.m. on Fridays. What does the present simple express?",
    options: ["Frequency", "Schedule", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 26,
    text: "Elena rarely stays past 5:00. What does the present simple express?",
    options: ["Routine", "Frequency", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 27,
    text: "Her shift ends at that time. What does the present simple express?",
    options: ["Fact", "Schedule", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "She occasionally stops by the gift shop. What does the present simple express?",
    options: ["Routine", "Frequency", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "She seldom watches television. What does the present simple express?",
    options: ["Schedule", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "She reads scientific journals. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "She practices the cello. What does the present simple express?",
    options: ["Schedule", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 32,
    text: "She goes to sleep at 10:30 every night. What does the present simple express?",
    options: ["Permanent state", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "That routine ensures she gets enough rest. What does the present simple express?",
    options: ["Schedule", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 34,
    text: "She arrives at work by 7:45. What does the present simple express?",
    options: ["Schedule", "Routine", "Fact"],
    correctOptionIndex: 1
  },
  {
    id: 35,
    text: "Elena checks the aquarium's animal care schedule. What does the present simple express?",
    options: ["Fact", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "The meeting starts at 8:00. What does the present simple express?",
    options: ["Routine", "Schedule", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 37,
    text: "The session begins at 9:30 on Wednesdays. What does the present simple express?",
    options: ["Permanent state", "Schedule", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 38,
    text: "She reviews her notes during the bus ride. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "She handles samples at work. What does the present simple express?",
    options: ["Schedule", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "Saltwater contains dissolved salts. What does the present simple express?",
    options: ["Routine", "Frequency", "Fact"],
    correctOptionIndex: 2
  },
  {
    id: 41,
    text: "Corals require stable temperatures. What does the present simple express?",
    options: ["Permanent state", "Fact", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "Light penetrates the ocean's upper layers. What does the present simple express?",
    options: ["Routine", "Fact", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "The aquarium opens from Tuesday to Sunday. What does the present simple express?",
    options: ["Routine", "Schedule", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 44,
    text: "The tour starts at 11:00. What does the present simple express?",
    options: ["Frequency", "Schedule", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 45,
    text: "The tour lasts 45 minutes. What does the present simple express?",
    options: ["Routine", "Fact", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 46,
    text: "A special feeding demonstration takes place on Fridays. What does the present simple express?",
    options: ["Frequency", "Schedule", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 47,
    text: "She stays past 5:00 rarely. What does the present simple express?",
    options: ["Schedule", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 48,
    text: "Her shift ends at 5:00. What does the present simple express?",
    options: ["Routine", "Schedule", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "She stops by the gift shop occasionally. What does the present simple express?",
    options: ["Schedule", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "She watches television seldom. What does the present simple express?",
    options: ["Routine", "Frequency", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 51,
    text: "She reads scientific journals in the evening. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 52,
    text: "She practices the cello in the evening. What does the present simple express?",
    options: ["Permanent state", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 53,
    text: "She goes to sleep at 10:30. What does the present simple express?",
    options: ["Frequency", "Routine", "Fact"],
    correctOptionIndex: 1
  },
  {
    id: 54,
    text: "Her routine ensures she gets enough rest. What does the present simple express?",
    options: ["Permanent state", "Schedule", "Frequency"],
    correctOptionIndex: 0
  },
  {
    id: 55,
    text: "She lives in Chicago. What does the present simple express?",
    options: ["Frequency", "Schedule", "Permanent state"],
    correctOptionIndex: 2
  },
  {
    id: 56,
    text: "She works at the Shedd Aquarium. What does the present simple express?",
    options: ["Routine", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 57,
    text: "She loves her work. What does the present simple express?",
    options: ["Schedule", "Permanent state", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 58,
    text: "She wakes up early. What does the present simple express?",
    options: ["Permanent state", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "She drinks water in the morning. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 60,
    text: "She runs along the lakefront. What does the present simple express?",
    options: ["Schedule", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 61,
    text: "She feeds her cat after her run. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "She prepares breakfast. What does the present simple express?",
    options: ["Fact", "Routine", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 63,
    text: "She always checks the schedule. What does the present simple express?",
    options: ["Routine", "Frequency", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 64,
    text: "She usually arrives by 7:45. What does the present simple express?",
    options: ["Schedule", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 65,
    text: "The staff meeting starts at 8:00. What does the present simple express?",
    options: ["Frequency", "Schedule", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 66,
    text: "The dolphin session begins at 9:30. What does the present simple express?",
    options: ["Routine", "Schedule", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "She often reviews her notes. What does the present simple express?",
    options: ["Permanent state", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 68,
    text: "She handles samples. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 69,
    text: "She knows basic scientific facts. What does the present simple express?",
    options: ["Routine", "Permanent state", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 70,
    text: "Saltwater contains salt. What does the present simple express?",
    options: ["Schedule", "Fact", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 71,
    text: "Every marine biologist remembers basic facts. What does the present simple express?",
    options: ["Schedule", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 72,
    text: "Corals require warm water. What does the present simple express?",
    options: ["Routine", "Fact", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 73,
    text: "Light penetrates water. What does the present simple express?",
    options: ["Frequency", "Fact", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 74,
    text: "Truths guide her work. What does the present simple express?",
    options: ["Schedule", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "Her schedule is predictable. What does the present simple express?",
    options: ["Routine", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 76,
    text: "The aquarium opens at 9:00 a.m. What does the present simple express?",
    options: ["Routine", "Schedule", "Fact"],
    correctOptionIndex: 1
  },
  {
    id: 77,
    text: "The tour starts at 11:00. What does the present simple express?",
    options: ["Frequency", "Schedule", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 78,
    text: "The tour lasts 45 minutes. What does the present simple express?",
    options: ["Permanent state", "Fact", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 79,
    text: "The demonstration takes place at 2:00. What does the present simple express?",
    options: ["Frequency", "Schedule", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "She rarely stays past 5:00. What does the present simple express?",
    options: ["Routine", "Frequency", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 81,
    text: "Her shift ends at 5:00. What does the present simple express?",
    options: ["Frequency", "Schedule", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 82,
    text: "She occasionally stops by the gift shop. What does the present simple express?",
    options: ["Schedule", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 83,
    text: "She seldom watches TV. What does the present simple express?",
    options: ["Permanent state", "Frequency", "Routine"],
    correctOptionIndex: 1
  },
  {
    id: 84,
    text: "She reads journals. What does the present simple express?",
    options: ["Schedule", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 85,
    text: "She practices the cello. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 86,
    text: "She goes to sleep at 10:30. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 87,
    text: "The routine ensures rest. What does the present simple express?",
    options: ["Routine", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 88,
    text: "She lives in a big city. What does the present simple express?",
    options: ["Schedule", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "She works with animals. What does the present simple express?",
    options: ["Frequency", "Permanent state", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 90,
    text: "She loves marine life. What does the present simple express?",
    options: ["Routine", "Permanent state", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 91,
    text: "She wakes at 5:30. What does the present simple express?",
    options: ["Schedule", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 92,
    text: "She drinks water. What does the present simple express?",
    options: ["Permanent state", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 93,
    text: "She goes for a run. What does the present simple express?",
    options: ["Frequency", "Routine", "Fact"],
    correctOptionIndex: 1
  },
  {
    id: 94,
    text: "She feeds Milo. What does the present simple express?",
    options: ["Schedule", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "She prepares breakfast. What does the present simple express?",
    options: ["Frequency", "Routine", "Permanent state"],
    correctOptionIndex: 1
  },
  {
    id: 96,
    text: "She checks the schedule. What does the present simple express?",
    options: ["Schedule", "Routine", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 97,
    text: "She arrives by 7:45. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 98,
    text: "The meeting starts at 8:00. What does the present simple express?",
    options: ["Routine", "Schedule", "Frequency"],
    correctOptionIndex: 1
  },
  {
    id: 99,
    text: "She reviews her notes. What does the present simple express?",
    options: ["Frequency", "Routine", "Schedule"],
    correctOptionIndex: 1
  },
  {
    id: 100,
    text: "The session begins at 9:30. What does the present simple express?",
    options: ["Routine", "Schedule", "Fact"],
    correctOptionIndex: 1
  }
];
