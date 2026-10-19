import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface FeedbackMessageProps {
  correct: boolean;
  score: number;
}

export function FeedbackMessage({ correct, score }: FeedbackMessageProps) {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`mx-auto flex w-full max-w-xl items-center gap-5 rounded-2xl border-2 bg-panel p-6 sm:p-8 ${
        correct ? "border-ok" : "border-bad"
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-canvas ${
          correct ? "bg-ok" : "bg-bad"
        }`}
      >
        {correct ? (
          <Check className="h-8 w-8" strokeWidth={3} />
        ) : (
          <X className="h-8 w-8" strokeWidth={3} />
        )}
      </span>

      <div>
        <p className={`text-lg font-bold ${correct ? "text-ok" : "text-bad"}`}>
          {correct ? "Resposta correta" : "Resposta incorreta"}
        </p>
        <p className="font-display text-4xl leading-tight tabular-nums text-ink sm:text-5xl">
          + {score.toFixed(3)} <span className="text-2xl text-ink/70">pontos</span>
        </p>
      </div>
    </motion.div>
  );
}
