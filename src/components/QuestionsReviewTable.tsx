import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { ReviewItem } from "../types/quiz";

interface QuestionsReviewTableProps {
  items: ReviewItem[];
}

export function QuestionsReviewTable({ items }: QuestionsReviewTableProps) {
  if (items.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      <h3 className="mb-4 text-xl font-bold text-ink">Revisão das perguntas</h3>

      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li
            key={`${item.questionId}-${index}`}
            className={`grid grid-cols-[2rem_1fr] gap-x-4 gap-y-2 rounded-xl border border-line border-l-4 bg-panel p-4 ${
              item.correct ? "border-l-ok" : "border-l-bad"
            }`}
          >
            <span className="font-display text-2xl leading-none text-ink/50">
              {index + 1}
            </span>

            <div>
              <p className="font-semibold leading-snug text-ink">
                {item.statement}
              </p>
              <p className="mt-1.5 text-sm text-ink/75">
                <span className="font-semibold text-ink">Correta:</span>{" "}
                {item.correctAnswerText}
              </p>
              {!item.correct && (
                <p className="mt-0.5 text-sm text-ink/75">
                  <span className="font-semibold text-ink">Você marcou:</span>{" "}
                  {item.selectedAnswerText}
                </p>
              )}
            </div>

            <span
              className={`col-start-2 flex items-center gap-1.5 text-sm font-bold ${
                item.correct ? "text-ok" : "text-bad"
              }`}
            >
              {item.correct ? (
                <Check className="h-4 w-4" strokeWidth={3} />
              ) : (
                <X className="h-4 w-4" strokeWidth={3} />
              )}
              {item.correct ? "Acertou" : "Errou"}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
