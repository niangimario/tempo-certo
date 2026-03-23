import type { Question } from "@shared/schema";

export const multiplicationDivisionMethodsQuestions: Question[] = [
  {
    id: 1,
    text: "What is the main goal of the methods described in the text?",
    options: [
      "To find the fastest possible way to calculate.",
      "To break down calculations into simpler parts.",
      "To memorize multiplication tables quickly."
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "According to the text, what do the methods for multiplication and division help students develop a deeper understanding of?",
    options: [
      "The history of mathematics.",
      "How calculators work.",
      "How numbers and place value operate."
    ],
    correctOptionIndex: 2
  },
  {
    id: 3,
    text: "In the traditional method of multiplication, what do you do after multiplying by the units part?",
    options: [
      "You immediately add the result to the next multiplication.",
      "You then multiply the same number by the tens part.",
      "You then divide the result by the tens part."
    ],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "When multiplying by the tens part in the traditional method, why is the result shifted one place to the left (or a zero added at the end)?",
    options: [
      "Because you are multiplying by a number that ends in zero.",
      "Because it represents multiplying by sixty, which is six tens.",
      "Because it makes the number easier to subtract later."
    ],
    correctOptionIndex: 1
  },
  {
    id: 5,
    text: "In the traditional method, what are the results from multiplying by the units part and the tens part called before they are added together?",
    options: [
      "Partial results.",
      "Final answers.",
      "Remainders."
    ],
    correctOptionIndex: 0
  },
  {
    id: 6,
    text: "What is the final step in the traditional multiplication method after finding the partial results?",
    options: [
      "Subtract them from the original number.",
      "Multiply them together.",
      "Add them together."
    ],
    correctOptionIndex: 2
  },
  {
    id: 7,
    text: "What is another name for the boxes method mentioned in the text?",
    options: [
      "The lattice method.",
      "The area method.",
      "The subtraction method."
    ],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "In the boxes method, how are numbers prepared before being placed in the grid?",
    options: [
      "They are rounded to the nearest ten.",
      "They are split into their place value parts.",
      "They are multiplied by ten."
    ],
    correctOptionIndex: 1
  },
  {
    id: 9,
    text: "The example in the text splits 158 into which parts for the boxes method?",
    options: [
      "One hundred, fifty, and eight.",
      "One, five, and eight.",
      "One hundred and fifty-eight."
    ],
    correctOptionIndex: 0
  },
  {
    id: 10,
    text: "In the boxes method, what do you do after arranging the parts in a grid and performing the smaller multiplications?",
    options: [
      "You subtract the results from each other.",
      "You add all the results together.",
      "You multiply all the results together."
    ],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "What key concept does the boxes method help learners understand?",
    options: [
      "How to divide quickly.",
      "How place value works in multiplication.",
      "How to check their work with a calculator."
    ],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "In the traditional long division method, what is the first step?",
    options: [
      "Multiply the divisor by ten.",
      "See how many times the divisor fits into the first part of the number.",
      "Write the remainder above the division symbol."
    ],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "After you write the result above the number in long division, what do you do next?",
    options: [
      "Multiply it back to subtract from the original part.",
      "Add it to the next digit.",
      "Bring down the next digit immediately."
    ],
    correctOptionIndex: 0
  },
  {
    id: 14,
    text: "In traditional long division, what is it called when something remains that cannot be divided further?",
    options: [
      "The quotient.",
      "The divisor.",
      "The remainder."
    ],
    correctOptionIndex: 2
  },
  {
    id: 15,
    text: "When do you stop the process in the traditional long division method?",
    options: [
      "When the remainder is larger than the divisor.",
      "When there are no more digits left to bring down.",
      "When the quotient is a single digit."
    ],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "What is the main approach of the repeated subtraction method?",
    options: [
      "Dividing directly by guessing the quotient.",
      "Repeatedly subtracting multiples of the divisor from the number.",
      "Adding the divisor to the number until it becomes whole."
    ],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "What kind of multiples does the text suggest using in the repeated subtraction method to simplify the process?",
    options: [
      "Only the number one.",
      "Easy multiples, such as ten times or two times the divisor.",
      "Large multiples to finish quickly."
    ],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "In the repeated subtraction method, what do you keep track of each time you subtract a group?",
    options: [
      "The remainder.",
      "The number of groups you have taken away.",
      "The original number."
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "In the repeated subtraction method, what gives the final answer (quotient)?",
    options: [
      "The total number of groups counted.",
      "The last remainder.",
      "The original divisor."
    ],
    correctOptionIndex: 0
  },
  {
    id: 20,
    text: "What does the text say about the different methods for multiplication and division?",
    options: [
      "There is only one correct way to perform these operations.",
      "Some methods focus on efficiency, while others focus on understanding.",
      "The boxes method is always faster than the traditional method."
    ],
    correctOptionIndex: 1
  },
  {
    id: 21,
    text: "Why does the text suggest students learn both types of methods (e.g., traditional and boxes, or traditional and repeated subtraction)?",
    options: [
      "So they can choose the approach that works best for them.",
      "So they can teach others.",
      "So they can pass a specific test."
    ],
    correctOptionIndex: 0
  },
  {
    id: 22,
    text: "What is the key difference between the two division methods described?",
    options: [
      "One uses addition, and the other uses subtraction.",
      "One breaks the number down step by step, and the other repeatedly subtracts groups.",
      "One is for large numbers, and the other is for small numbers."
    ],
    correctOptionIndex: 1
  }
];
