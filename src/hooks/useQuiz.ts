import { useCallback, useMemo, useRef, useState } from "react";
import type {
  GameState,
  Question,
  QuestionResult,
  QuizSummary,
  ReviewItem,
  UserData,
} from "../types/quiz";
import { getQuestions } from "../data/questionService";
import { selectRandomQuestions } from "../utils/shuffleQuestions";
import { resolveQuestionScore } from "../utils/calculateScore";

const QUESTIONS_PER_GAME = 10;

interface LastAnswer {
  correct: boolean;
  score: number;
}

export function useQuiz() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [lastAnswer, setLastAnswer] = useState<LastAnswer | null>(null);

  // Guarda o instante em que a pergunta atual foi exibida.
  const questionStartTimeRef = useRef<number>(0);

  const identifyUser = useCallback((name: string, selectedImageIndex: number) => {
    const normalizedName = name.trim();

    const data: UserData = {
      name: normalizedName,
      nameLength: normalizedName.length,
      selectedImageIndex,
    };

    setUserData(data);
  }, []);

  const startGame = useCallback(async () => {
    const allQuestions = await getQuestions();
    const chosen = selectRandomQuestions(allQuestions, QUESTIONS_PER_GAME);

    setSelectedQuestions(chosen);
    setResults([]);
    setCurrentQuestionIndex(0);
    setLastAnswer(null);
    setGameState("playing");
    questionStartTimeRef.current = Date.now();
  }, []);

  const markQuestionStart = useCallback(() => {
    questionStartTimeRef.current = Date.now();
  }, []);

  const submitAnswer = useCallback(
    (selectedAnswer: string) => {
      const currentQuestion = selectedQuestions[currentQuestionIndex];
      if (!currentQuestion) return;

      const questionEndTime = Date.now();
      const elapsedMilliseconds =
        questionEndTime - questionStartTimeRef.current;

      const correct = selectedAnswer === currentQuestion.correctAnswer;
      const score = resolveQuestionScore(correct, elapsedMilliseconds);

      const result: QuestionResult = {
        questionId: currentQuestion.id,
        selectedAnswer,
        correct,
        elapsedMilliseconds,
        score,
      };

      setResults((prev) => [...prev, result]);
      setLastAnswer({ correct, score });
      setGameState("feedback");
    },
    [selectedQuestions, currentQuestionIndex]
  );

  const advanceQuestion = useCallback(() => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex >= selectedQuestions.length) {
      setGameState("finished");
      return;
    }

    setCurrentQuestionIndex(nextIndex);
    setLastAnswer(null);
    setGameState("playing");
    questionStartTimeRef.current = Date.now();
  }, [currentQuestionIndex, selectedQuestions.length]);

  const playAgain = useCallback(async () => {
    await startGame();
  }, [startGame]);

  const backToStart = useCallback(() => {
    setGameState("start");
    setSelectedQuestions([]);
    setResults([]);
    setCurrentQuestionIndex(0);
    setLastAnswer(null);
  }, []);

  const summary: QuizSummary = useMemo(() => {
    const totalScore = results.reduce((total, r) => total + r.score, 0);
    const correctCount = results.filter((r) => r.correct).length;
    const incorrectCount = results.length - correctCount;
    const totalElapsedMilliseconds = results.reduce(
      (total, r) => total + r.elapsedMilliseconds,
      0
    );
    const totalQuestions = selectedQuestions.length || QUESTIONS_PER_GAME;
    const maxPossible = totalQuestions * 101;
    const percentage = maxPossible > 0 ? (totalScore / maxPossible) * 100 : 0;

    return {
      totalScore,
      correctCount,
      incorrectCount,
      totalElapsedMilliseconds,
      totalQuestions,
      percentage,
    };
  }, [results, selectedQuestions.length]);

  const reviewItems: ReviewItem[] = useMemo(() => {
    return results.map((result) => {
      const question = selectedQuestions.find(
        (q) => q.id === result.questionId
      );

      const findAlternativeText = (alternativeId: string) =>
        question?.alternatives.find((alt) => alt.id === alternativeId)
          ?.text ?? "—";

      return {
        questionId: result.questionId,
        statement: question?.statement ?? "Pergunta indisponível",
        correctAnswerText: question
          ? findAlternativeText(question.correctAnswer)
          : "—",
        selectedAnswerText: findAlternativeText(result.selectedAnswer),
        correct: result.correct,
        score: result.score,
      };
    });
  }, [results, selectedQuestions]);

  return {
    userData,
    gameState,
    selectedQuestions,
    currentQuestionIndex,
    currentQuestion: selectedQuestions[currentQuestionIndex] ?? null,
    results,
    lastAnswer,
    summary,
    reviewItems,
    identifyUser,
    startGame,
    submitAnswer,
    advanceQuestion,
    markQuestionStart,
    playAgain,
    backToStart,
  };
}
