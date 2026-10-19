export interface Alternative {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  statement: string;
  alternatives: Alternative[];
  correctAnswer: string;
}

export interface UserData {
  name: string;
  nameLength: number;
  selectedImageIndex: number;
}

export interface QuestionResult {
  questionId: number;
  selectedAnswer: string;
  correct: boolean;
  elapsedMilliseconds: number;
  score: number;
}

export type GameState = "start" | "playing" | "feedback" | "finished";

export interface QuizSummary {
  totalScore: number;
  correctCount: number;
  incorrectCount: number;
  totalElapsedMilliseconds: number;
  totalQuestions: number;
  percentage: number;
}

export interface ReviewItem {
  questionId: number;
  statement: string;
  correctAnswerText: string;
  selectedAnswerText: string;
  correct: boolean;
  score: number;
}
