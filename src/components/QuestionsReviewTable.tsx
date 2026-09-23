import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { ReviewItem } from "../types/quiz";

interface QuestionsReviewTableProps {
  items: ReviewItem[];
}

export function QuestionsReviewTable({ items }: QuestionsReviewTableProps) {
  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      className="w-full rounded-3xl border border-signal-600/15 bg-white/70 p-5 shadow-glow-sm backdrop-blur-md dark:border-signal-500/15 dark:bg-void-800/60 sm:p-6"
    >
      <p className="mb-4 text-left font-display text-sm font-semibold text-void-900 dark:text-paper-100">
        Revisão das perguntas
      </p>

      {/* Cabeçalho — visível apenas em telas maiores */}
      <div className="mb-2 hidden grid-cols-[2.75rem_1fr_1fr_5.5rem] gap-3 px-3 text-[11px] font-medium uppercase tracking-wide text-void-900/40 dark:text-paper-100/40 sm:grid">
        <span></span>
        <span>Pergunta</span>
        <span>Resposta correta</span>
        <span className="text-right">Resultado</span>
      </div>

      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li
            key={`${item.questionId}-${index}`}
            className={`grid grid-cols-[2.75rem_1fr_5.5rem] gap-3 rounded-2xl border px-3 py-3 text-sm sm:grid-cols-[2.75rem_1fr_1fr_5.5rem] sm:items-center ${
              item.correct
                ? "border-signal-500/20 bg-signal-500/5"
                : "border-red-500/20 bg-red-500/5"
            }`}
          >
            <span className="font-display text-xs font-semibold text-void-900/40 dark:text-paper-100/40">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="text-void-900/85 dark:text-paper-100/85">
              {item.statement}
            </span>

            <span className="hidden text-void-900/60 dark:text-paper-100/60 sm:block">
              {item.correctAnswerText}
            </span>

            <span
              className={`flex items-center justify-end gap-1.5 text-xs font-semibold ${
                item.correct
                  ? "text-signal-600 dark:text-signal-400"
                  : "text-red-500"
              }`}
            >
              {item.correct ? (
                <Check className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                <X className="h-4 w-4" strokeWidth={2.5} />
              )}
              {item.correct ? "Acertou" : "Errou"}
            </span>

            {/* Resposta correta visível apenas no mobile, abaixo da pergunta */}
            <span className="col-span-3 text-xs text-void-900/50 dark:text-paper-100/50 sm:hidden">
              Correta: {item.correctAnswerText}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
