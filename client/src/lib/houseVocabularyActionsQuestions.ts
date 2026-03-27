import type { Question } from "@shared/schema";

export const houseActionsReadingPassage = `READ THE TEXT BELOW, THEN ANSWER THE FOLLOWING QUESTIONS

As you arrive, you might open or close the fence to enter the property. You can also lean on the walls, paint them, or build them to protect the house.
If you go downstairs, you go down to the basement, where you might store items, organize things, or even clean the space.
Looking up, you can repair the roof, climb onto it (carefully), or inspect it after heavy rain. From the chimney, smoke can come out, and inside, you can light a fire that sends smoke through it.
In the attic, you might climb up, store old boxes, or search for things you don't use often.
With the windows, you can open them to let fresh air in, close them to keep the house warm, or clean them to make them clear. The shutters can be opened, closed, or adjusted to control light and privacy.
At the entrance, you open the door, close it, lock it, or knock on it. On the porch, you can sit, relax, or wait for someone.
Inside, you go up or down the stairs to move between floors.
On the balcony, you can stand, look outside, enjoy the view, or get fresh air.
Along the house, rainwater flows through the drainpipes, and you might check them, clean them, or fix them if they are blocked.
When it gets dark, you turn on the lights, turn them off, or adjust them depending on your needs.
To reach the house, you walk along the path, follow it, or decorate it with plants.
In the garage, you park your car, store tools, or work on projects. Along the driveway, you drive in, drive out, or wash your car.
At the front, you open the mailbox, check your mail, or take out letters and packages.
In the backyard, you can swim in the pool, clean it, or relax by it.
Finally, on the patio, you can sit, eat, talk with friends, or enjoy the fresh air.`;

export const houseVocabularyActionsQuestions: Question[] = [
  {
    id: 1,
    text: "What can you do with the fence as you arrive?",
    options: [
      "Paint it or climb over it",
      "Open or close it",
      "Remove it or replace it"
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "What action can you perform on the walls?",
    options: [
      "Break them or wash them",
      "Lean on them, paint them, or build them",
      "Move them or shorten them"
    ],
    correctOptionIndex: 1
  },
  {
    id: 3,
    text: "What do you do when you go downstairs?",
    options: [
      "Go up to the attic",
      "Go down to the basement",
      "Go outside to the patio"
    ],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "What can you do in the basement?",
    options: [
      "Cook or eat",
      "Store items, organize things, or clean the space",
      "Park your car or wash it"
    ],
    correctOptionIndex: 1
  },
  {
    id: 5,
    text: "What can you do to the roof after heavy rain?",
    options: [
      "Paint it or decorate it",
      "Inspect it",
      "Remove it or replace it"
    ],
    correctOptionIndex: 1
  },
  {
    id: 6,
    text: "What can you do from the chimney?",
    options: [
      "Smoke can come out",
      "Water can flow out",
      "Birds can nest inside"
    ],
    correctOptionIndex: 0
  },
  {
    id: 7,
    text: "What can you do in the attic?",
    options: [
      "Swim or relax",
      "Climb up, store old boxes, or search for things",
      "Park your car or store tools"
    ],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "What can you do with the windows to let fresh air in?",
    options: [
      "Close them",
      "Open them",
      "Paint them"
    ],
    correctOptionIndex: 1
  },
  {
    id: 9,
    text: "What can you do with the shutters to control light and privacy?",
    options: [
      "Remove them or replace them",
      "Open them, close them, or adjust them",
      "Clean them or wash them"
    ],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "What do you do at the entrance to secure the house?",
    options: [
      "Knock on the door",
      "Open the door",
      "Lock it"
    ],
    correctOptionIndex: 2
  },
  {
    id: 11,
    text: "What can you do on the porch?",
    options: [
      "Park your car",
      "Sit, relax, or wait for someone",
      "Store old boxes"
    ],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "How do you move between floors inside the house?",
    options: [
      "Go up or down the stairs",
      "Use the elevator",
      "Climb through the windows"
    ],
    correctOptionIndex: 0
  },
  {
    id: 13,
    text: "What can you do on the balcony?",
    options: [
      "Swim or clean the pool",
      "Stand, look outside, enjoy the view, or get fresh air",
      "Store tools or work on projects"
    ],
    correctOptionIndex: 1
  },
  {
    id: 14,
    text: "What should you do with the drainpipes if they are blocked?",
    options: [
      "Paint them or decorate them",
      "Check them, clean them, or fix them",
      "Remove them or replace them"
    ],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "What can you do with the lights when it gets dark?",
    options: [
      "Turn them on, turn them off, or adjust them",
      "Remove them or replace them",
      "Paint them or clean them"
    ],
    correctOptionIndex: 0
  },
  {
    id: 16,
    text: "What can you do along the path to reach the house?",
    options: [
      "Drive in or drive out",
      "Walk along it, follow it, or decorate it",
      "Swim or relax"
    ],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "What can you do in the garage?",
    options: [
      "Park your car, store tools, or work on projects",
      "Eat or talk with friends",
      "Open or close the fence"
    ],
    correctOptionIndex: 0
  },
  {
    id: 18,
    text: "What can you do along the driveway?",
    options: [
      "Walk or run",
      "Drive in, drive out, or wash your car",
      "Store old boxes or search for things"
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "What do you do with the mailbox at the front?",
    options: [
      "Paint it or repair it",
      "Open it, check your mail, or take out letters and packages",
      "Lock it or close it"
    ],
    correctOptionIndex: 1
  },
  {
    id: 20,
    text: "What can you do in the backyard?",
    options: [
      "Park your car",
      "Swim in the pool, clean it, or relax by it",
      "Store tools or work on projects"
    ],
    correctOptionIndex: 1
  },
  {
    id: 21,
    text: "What can you do on the patio?",
    options: [
      "Open or close the fence",
      "Sit, eat, talk with friends, or enjoy the fresh air",
      "Go up or down the stairs"
    ],
    correctOptionIndex: 1
  },
  {
    id: 22,
    text: "What can you do to the roof if you are careful?",
    options: [
      "Paint it",
      "Climb onto it",
      "Remove it"
    ],
    correctOptionIndex: 1
  }
];
