export const MAX_SCORE = 110;
export const PENALTY_RATE = 0.001; // 0,1% do valor máximo por intervalo
export const PENALTY_INTERVAL_MS = 500; 

/**
 * Calcula a pontuação de uma questão respondida corretamente com base
 * no tempo decorrido (em milissegundos).
 *
 * Regra: a cada 300ms descontar 0,1% da pontuação máxima (101 pontos).
 * A pontuação nunca fica abaixo de 0.
 */
export function calculateScore(elapsedMilliseconds: number): number {
  const intervals = Math.floor(elapsedMilliseconds / PENALTY_INTERVAL_MS);
  const penalty = intervals * (MAX_SCORE * PENALTY_RATE);
  const score = MAX_SCORE - penalty;
  return Math.max(0, score);
}

/**
 * Calcula a pontuação final de uma resposta, considerando se ela estava
 * correta. Erros sempre valem 0 pontos, mas o tempo é registrado do
 * mesmo jeito.
 */
export function resolveQuestionScore(
  isCorrect: boolean,
  elapsedMilliseconds: number
): number {
  return isCorrect ? calculateScore(elapsedMilliseconds) : 0;
}

export function formatScore(score: number): string {
  return score.toLocaleString("pt-BR", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
}

export function formatTime(totalMilliseconds: number): string {
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}
