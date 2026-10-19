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
      role="radio"
      aria-checked={isSelected}
      disabled={disabled}
      onClick={() => onSelect(alternative.id)}
      whileTap={disabled ? undefined : { scale: 0.99 }}
      className={`flex w-full items-start gap-4 rounded-xl border-2 px-4 py-4 text-left transition-colors disabled:cursor-not-allowed ${
        isSelected
          ? "border-ink bg-raised"
          : "border-line bg-panel hover:border-ink/50"
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display text-xl uppercase leading-none transition-colors ${
          isSelected ? "bg-accent text-accent-ink" : "bg-raised text-ink/70"
        }`}
      >
        {alternative.id}
      </span>
      <span className="pt-1 text-base font-medium leading-snug text-ink sm:text-lg">
        {alternative.text}
      </span>
    </motion.button>
  );
}
