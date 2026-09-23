import type { Question } from "../types/quiz";

// Base de perguntas de Matemática Básica.
// O sistema pode sortear 10 perguntas aleatoriamente a cada partida.

export const questions: Question[] = [
  {
    id: 1,
    statement: "Quanto é 15 + 27?",
    alternatives: [
      { id: "a", text: "40" },
      { id: "b", text: "42" },
      { id: "c", text: "44" },
    ],
    correctAnswer: "b",
  },
  {
    id: 2,
    statement: "Quanto é 50 - 18?",
    alternatives: [
      { id: "a", text: "32" },
      { id: "b", text: "34" },
      { id: "c", text: "38" },
    ],
    correctAnswer: "a",
  },
  {
    id: 3,
    statement: "Quanto é 7 × 8?",
    alternatives: [
      { id: "a", text: "54" },
      { id: "b", text: "56" },
      { id: "c", text: "64" },
    ],
    correctAnswer: "b",
  },
  {
    id: 4,
    statement: "Quanto é 81 ÷ 9?",
    alternatives: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
    ],
    correctAnswer: "b",
  },
  {
    id: 5,
    statement: "Quanto é 25 + 36?",
    alternatives: [
      { id: "a", text: "59" },
      { id: "b", text: "61" },
      { id: "c", text: "63" },
    ],
    correctAnswer: "b",
  },
  {
    id: 6,
    statement: "Quanto é 100 - 45?",
    alternatives: [
      { id: "a", text: "45" },
      { id: "b", text: "55" },
      { id: "c", text: "65" },
    ],
    correctAnswer: "b",
  },
  {
    id: 7,
    statement: "Quanto é 6 × 9?",
    alternatives: [
      { id: "a", text: "48" },
      { id: "b", text: "54" },
      { id: "c", text: "56" },
    ],
    correctAnswer: "b",
  },
  {
    id: 8,
    statement: "Quanto é 72 ÷ 8?",
    alternatives: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
    ],
    correctAnswer: "b",
  },
  {
    id: 9,
    statement: "Quanto é 13 + 29?",
    alternatives: [
      { id: "a", text: "40" },
      { id: "b", text: "42" },
      { id: "c", text: "44" },
    ],
    correctAnswer: "b",
  },
  {
    id: 10,
    statement: "Quanto é 90 - 37?",
    alternatives: [
      { id: "a", text: "53" },
      { id: "b", text: "54" },
      { id: "c", text: "57" },
    ],
    correctAnswer: "a",
  },
  {
    id: 11,
    statement: "Quanto é 12 × 5?",
    alternatives: [
      { id: "a", text: "50" },
      { id: "b", text: "60" },
      { id: "c", text: "70" },
    ],
    correctAnswer: "b",
  },
  {
    id: 12,
    statement: "Quanto é 144 ÷ 12?",
    alternatives: [
      { id: "a", text: "10" },
      { id: "b", text: "12" },
      { id: "c", text: "14" },
    ],
    correctAnswer: "b",
  },
  {
    id: 13,
    statement: "Quanto é 35 + 48?",
    alternatives: [
      { id: "a", text: "81" },
      { id: "b", text: "83" },
      { id: "c", text: "85" },
    ],
    correctAnswer: "b",
  },
  {
    id: 14,
    statement: "Quanto é 75 - 29?",
    alternatives: [
      { id: "a", text: "44" },
      { id: "b", text: "46" },
      { id: "c", text: "48" },
    ],
    correctAnswer: "b",
  },
  {
    id: 15,
    statement: "Quanto é 11 × 7?",
    alternatives: [
      { id: "a", text: "77" },
      { id: "b", text: "79" },
      { id: "c", text: "81" },
    ],
    correctAnswer: "a",
  },
  {
    id: 16,
    statement: "Quanto é 96 ÷ 12?",
    alternatives: [
      { id: "a", text: "6" },
      { id: "b", text: "8" },
      { id: "c", text: "10" },
    ],
    correctAnswer: "b",
  },
  {
    id: 17,
    statement: "Quanto é 20% de 100?",
    alternatives: [
      { id: "a", text: "10" },
      { id: "b", text: "20" },
      { id: "c", text: "25" },
    ],
    correctAnswer: "b",
  },
  {
    id: 18,
    statement: "Quanto é 50% de 80?",
    alternatives: [
      { id: "a", text: "30" },
      { id: "b", text: "40" },
      { id: "c", text: "50" },
    ],
    correctAnswer: "b",
  },
  {
    id: 19,
    statement: "Quanto é 10% de 200?",
    alternatives: [
      { id: "a", text: "10" },
      { id: "b", text: "20" },
      { id: "c", text: "30" },
    ],
    correctAnswer: "b",
  },
  {
    id: 20,
    statement: "Qual é o resultado de 5 + 5 × 2?",
    alternatives: [
      { id: "a", text: "20" },
      { id: "b", text: "15" },
      { id: "c", text: "10" },
    ],
    correctAnswer: "b",
  },
  {
    id: 21,
    statement: "Qual é a metade de 60?",
    alternatives: [
      { id: "a", text: "20" },
      { id: "b", text: "30" },
      { id: "c", text: "40" },
    ],
    correctAnswer: "b",
  },
  {
    id: 22,
    statement: "Qual é o dobro de 35?",
    alternatives: [
      { id: "a", text: "60" },
      { id: "b", text: "70" },
      { id: "c", text: "75" },
    ],
    correctAnswer: "b",
  },
  {
    id: 23,
    statement: "Qual é o triplo de 12?",
    alternatives: [
      { id: "a", text: "24" },
      { id: "b", text: "36" },
      { id: "c", text: "42" },
    ],
    correctAnswer: "b",
  },
  {
    id: 24,
    statement: "Quanto é 1/2 de 40?",
    alternatives: [
      { id: "a", text: "10" },
      { id: "b", text: "20" },
      { id: "c", text: "30" },
    ],
    correctAnswer: "b",
  },
  {
    id: 25,
    statement: "Quanto é 1/4 de 100?",
    alternatives: [
      { id: "a", text: "20" },
      { id: "b", text: "25" },
      { id: "c", text: "30" },
    ],
    correctAnswer: "b",
  },
  {
    id: 26,
    statement: "João tinha 50 reais e gastou 18 reais. Quanto sobrou?",
    alternatives: [
      { id: "a", text: "30 reais" },
      { id: "b", text: "32 reais" },
      { id: "c", text: "38 reais" },
    ],
    correctAnswer: "b",
  },
  {
    id: 27,
    statement: "Uma caixa possui 6 pacotes com 5 unidades cada. Quantas unidades há ao todo?",
    alternatives: [
      { id: "a", text: "25" },
      { id: "b", text: "30" },
      { id: "c", text: "35" },
    ],
    correctAnswer: "b",
  },
  {
    id: 28,
    statement: "Maria comprou 3 cadernos por 12 reais cada. Quanto ela gastou?",
    alternatives: [
      { id: "a", text: "30 reais" },
      { id: "b", text: "36 reais" },
      { id: "c", text: "42 reais" },
    ],
    correctAnswer: "b",
  },
  {
    id: 29,
    statement: "Uma pizza foi dividida em 8 partes iguais. Se João comeu 2 partes, que fração da pizza ele comeu?",
    alternatives: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/4" },
      { id: "c", text: "3/4" },
    ],
    correctAnswer: "b",
  },
  {
    id: 30,
    statement: "Qual é o resultado de 100 + 25 - 50?",
    alternatives: [
      { id: "a", text: "65" },
      { id: "b", text: "75" },
      { id: "c", text: "85" },
    ],
    correctAnswer: "b",
  },
];