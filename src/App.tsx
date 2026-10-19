import { useEffect, useRef } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
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
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-5 sm:px-8 sm:py-7">
          <Header darkMode={darkMode} onToggleTheme={toggleDarkMode} />

          {showQuizChrome && (
            <div className="mx-auto mt-6 flex w-full max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <p className="shrink-0 text-base font-bold text-ink">
                Pergunta {currentQuestionIndex + 1} de {selectedQuestions.length}
              </p>
              <ProgressIndicator
                current={currentQuestionIndex + 1}
                total={selectedQuestions.length}
              />
              <div className="self-start sm:self-auto">
                <Timer elapsedMilliseconds={timer.elapsedMilliseconds} />
              </div>
            </div>
          )}

          <main className="flex flex-1 items-center justify-center py-8 sm:py-10">
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
    </MotionConfig>
  );
}
