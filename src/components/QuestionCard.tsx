import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Question } from "../types/quiz";
import { QuestionOption } from "./QuestionOption";
import { FeedbackMessage } from "./FeedbackMessage";

interface QuestionCardProps {
  question: Question;
  questionKey: number;
  isFeedback: boolean;
  lastAnswer: { correct: boolean; score: number } | null;
  onSubmit: (selectedAnswer: string) => void;
}

export function QuestionCard({
  question,
  questionKey,
  isFeedback,
  lastAnswer,
  onSubmit,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!selected) return;
    onSubmit(selected);
    setSelected(null);
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <AnimatePresence mode="wait">
        {isFeedback && lastAnswer ? (
          <FeedbackMessage
            key="feedback"
            correct={lastAnswer.correct}
            score={lastAnswer.score}
          />
        ) : (
          <motion.div
            key={questionKey}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl border border-signal-600/15 bg-white/70 p-6 shadow-glow backdrop-blur-md dark:border-signal-500/15 dark:bg-void-800/60 sm:p-8"
          >
            <p className="mb-6 text-lg font-semibold leading-snug text-void-900 dark:text-paper-100 sm:text-xl">
              {question.statement}
            </p>

            <div className="flex flex-col gap-3">
              {question.alternatives.map((alt) => (
                <QuestionOption
                  key={alt.id}
                  alternative={alt}
                  isSelected={selected === alt.id}
                  disabled={false}
                  onSelect={setSelected}
                />
              ))}
            </div>

            <div className="mt-7 flex justify-end">
              <motion.button
                type="button"
                whileTap={selected ? { scale: 0.96 } : undefined}
                disabled={!selected}
                onClick={handleSubmit}
                className="rounded-full bg-gradient-to-br from-signal-500 to-signal-700 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-glow-sm transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              >
                Enviar
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
