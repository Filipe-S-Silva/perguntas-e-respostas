import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface FeedbackMessageProps {
  correct: boolean;
  score: number;
}

export function FeedbackMessage({ correct, score }: FeedbackMessageProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={correct ? "correct" : "incorrect"}
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`flex flex-col items-center justify-center gap-2 rounded-3xl px-8 py-10 text-center shadow-glow ${
          correct
            ? "bg-signal-600/15 text-signal-600 dark:text-signal-400"
            : "bg-red-500/10 text-red-500"
        }`}
      >
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full ${
            correct ? "bg-signal-500/20" : "bg-red-500/20"
          }`}
        >
          {correct ? (
            <Check className="h-7 w-7" strokeWidth={2.5} />
          ) : (
            <X className="h-7 w-7" strokeWidth={2.5} />
          )}
        </span>

        <p className="font-display text-lg font-semibold">
          {correct ? "Resposta correta" : "Resposta incorreta"}
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-2xl font-display font-bold"
        >
          + {score.toFixed(3)} pontos
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
