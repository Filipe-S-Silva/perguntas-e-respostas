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
    <div className="mx-auto w-full max-w-5xl">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14"
          >
            {/* Enunciado à esquerda no desktop, no topo no mobile */}
            <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl lg:pt-1 lg:text-4xl">
              {question.statement}
            </h2>

            <div className="flex flex-col gap-6">
              <div
                role="radiogroup"
                aria-label="Alternativas"
                className="flex flex-col gap-3"
              >
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

              <motion.button
                type="button"
                whileTap={selected ? { scale: 0.98 } : undefined}
                disabled={!selected}
                onClick={handleSubmit}
                className="w-full rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35 sm:ml-auto sm:w-auto"
              >
                Enviar resposta
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
