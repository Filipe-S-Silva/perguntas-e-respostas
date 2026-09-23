import { motion } from "framer-motion";
import type { Alternative } from "../types/quiz";

interface QuestionOptionProps {
  alternative: Alternative;
  isSelected: boolean;
  disabled: boolean;
  onSelect: (id: string) => void;
}

export function QuestionOption({
  alternative,
  isSelected,
  disabled,
  onSelect,
}: QuestionOptionProps) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(alternative.id)}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      animate={{
        scale: isSelected ? 1.01 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left text-sm sm:text-base transition-colors disabled:cursor-not-allowed ${
        isSelected
          ? "border-signal-500 bg-signal-500/10 text-void-900 shadow-glow-sm dark:text-paper-100"
          : "border-void-900/10 bg-white/60 text-void-900/80 hover:border-signal-500/40 dark:border-paper-100/10 dark:bg-void-800/40 dark:text-paper-100/80"
      }`}
    >
      <span
        className={`quiz-radio ${
          isSelected ? "text-signal-500" : "text-void-900/30 dark:text-paper-100/30"
        }`}
      >
        {isSelected && <span className="quiz-radio-dot" />}
      </span>
      <span className="font-medium">
        {alternative.id}) {alternative.text}
      </span>
    </motion.button>
  );
}
