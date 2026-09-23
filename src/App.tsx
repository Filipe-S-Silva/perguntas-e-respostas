import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { ProgressIndicator } from "./components/ProgressIndicator";
import { QuestionCard } from "./components/QuestionCard";
import { UserSelector } from "./components/UserSelector";
import { ResultScreen } from "./components/ResultScreen";
import { useQuiz } from "./hooks/useQuiz";
import { useTimer } from "./hooks/useTimer";
import { useDarkMode } from "./hooks/useDarkMode";

const FEEDBACK_DELAY_MS = 1400;

export default function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const {
    userData,
    gameState,
    selectedQuestions,
    currentQuestionIndex,
    currentQuestion,
    lastAnswer,
    summary,
    reviewItems,
    identifyUser,
    startGame,
    submitAnswer,
    advanceQuestion,
    playAgain,
    backToStart,
  } = useQuiz();

  const timer = useTimer();
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleStartFromSelector = async (
    name: string,
    selectedImageIndex: number
  ) => {
    identifyUser(name, selectedImageIndex);
    await startGame();
  };

  // Inicia/reinicia o timer sempre que uma nova pergunta é apresentada.
  useEffect(() => {
    if (gameState === "playing") {
      timer.start();
    } else {
      timer.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, currentQuestionIndex]);

  const handleSubmit = (selectedAnswer: string) => {
    timer.stop();
    submitAnswer(selectedAnswer);

    feedbackTimeoutRef.current = setTimeout(() => {
      advanceQuestion();
    }, FEEDBACK_DELAY_MS);
  };

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  const isFeedback = gameState === "feedback";
  const showQuizChrome = gameState === "playing" || gameState === "feedback";

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-paper-50 text-void-900 transition-colors duration-500 dark:bg-void-950 dark:text-paper-100">
      {/* Glow decorativo de fundo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-signal-500/20 blur-3xl dark:bg-signal-600/25" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-signal-700/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col px-4 py-6 sm:px-8 sm:py-8">
        <Header darkMode={darkMode} onToggleTheme={toggleDarkMode} />

        {showQuizChrome && (
          <div className="mt-4 flex items-center justify-between">
            <Timer elapsedMilliseconds={timer.elapsedMilliseconds} />
            <span className="hidden text-xs font-medium text-void-900/40 dark:text-paper-100/40 sm:block">
              {selectedQuestions.length} perguntas no total
            </span>
            <ProgressIndicator
              current={currentQuestionIndex + 1}
              total={selectedQuestions.length}
            />
          </div>
        )}

        <main className="flex flex-1 items-center justify-center py-8">
          <AnimatePresence mode="wait">
            {gameState === "start" && (
              <motion.div
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <UserSelector onStart={handleStartFromSelector} />
              </motion.div>
            )}

            {showQuizChrome && currentQuestion && (
              <motion.div
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <QuestionCard
                  question={currentQuestion}
                  questionKey={currentQuestionIndex}
                  isFeedback={isFeedback}
                  lastAnswer={lastAnswer}
                  onSubmit={handleSubmit}
                />
              </motion.div>
            )}

            {gameState === "finished" && userData && (
              <motion.div
                key="finished"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <ResultScreen
                  userData={userData}
                  summary={summary}
                  reviewItems={reviewItems}
                  onPlayAgain={playAgain}
                  onBackToStart={backToStart}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
