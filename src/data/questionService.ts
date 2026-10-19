import { questions as mockQuestions } from "./questions";
import type { Question } from "../types/quiz";

/**
 * Camada de serviço para obtenção das perguntas.
 *
 * Hoje retorna o mock local. No futuro, basta substituir o corpo desta
 * função por uma chamada real, por exemplo:
 *
 *   export async function getQuestions(): Promise<Question[]> {
 *     const response = await fetch("/api/questions");
 *     return response.json();
 *   }
 *
 * Nenhum outro ponto da aplicação precisa ser alterado.
 */
export async function getQuestions(): Promise<Question[]> {
  return mockQuestions;
}
