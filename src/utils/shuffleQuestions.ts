import type { Question } from "../types/quiz";

/**
 * Embaralha a base de perguntas sem modificar o array original.
 * Sempre trabalha sobre uma cópia ([...questions]).
 */
export function shuffleQuestions(questions: Question[]): Question[] {
  const copy = [...questions];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

/**
 * Seleciona `count` perguntas aleatórias e únicas a partir da base completa.
 * Deve ser chamada apenas uma vez no início da partida.
 */
export function selectRandomQuestions(
  questions: Question[],
  count: number
): Question[] {
  return shuffleQuestions(questions).slice(0, count);
}
