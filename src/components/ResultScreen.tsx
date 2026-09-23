import { motion } from "framer-motion";
import { RotateCcw, Home } from "lucide-react";
import type { QuizSummary, ReviewItem, UserData } from "../types/quiz";
import { images } from "../data/images";
import { formatScore, formatTime } from "../utils/calculateScore";
import { QuestionsReviewTable } from "./QuestionsReviewTable";

interface ResultScreenProps {
  userData: UserData;
  summary: QuizSummary;
  reviewItems: ReviewItem[];
  onPlayAgain: () => void;
  onBackToStart: () => void;
}

export function ResultScreen({
  userData,
  summary,
  reviewItems,
  onPlayAgain,
  onBackToStart,
}: ResultScreenProps) {
  const characterImage = images[userData.selectedImageIndex];

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex w-full max-w-lg flex-col items-center gap-6 rounded-3xl border border-signal-600/15 bg-white/70 p-8 text-center shadow-glow backdrop-blur-md dark:border-signal-500/15 dark:bg-void-800/60"
    >
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
        src={characterImage}
        alt={userData.name}
        className="h-24 w-24 rounded-full border-2 border-signal-500/60 object-cover shadow-glow"
      />

      <div>
        <p className="font-display text-xl font-bold text-void-900 dark:text-paper-100 sm:text-2xl">
          Parabéns, {userData.name.toUpperCase()}!
        </p>
        <p className="mt-1 text-sm text-void-900/60 dark:text-paper-100/60">
          Sua pontuação
        </p>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl font-bold text-signal-600 dark:text-signal-400 sm:text-5xl"
        >
          {formatScore(summary.totalScore)}
        </motion.p>
        <p className="text-xs text-void-900/50 dark:text-paper-100/50">
          {summary.percentage.toFixed(1)}% de aproveitamento
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Acertos" value={String(summary.correctCount)} />
        <Stat label="Erros" value={String(summary.incorrectCount)} />
        <Stat
          label="Tempo total"
          value={formatTime(summary.totalElapsedMilliseconds)}
        />
        <Stat
          label="Questões"
          value={`${summary.totalQuestions}/${summary.totalQuestions}`}
        />
      </div>

      <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onPlayAgain}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-signal-500 to-signal-700 py-3.5 text-sm font-semibold tracking-wide text-white shadow-glow"
        >
          <RotateCcw className="h-4 w-4" />
          Jogar novamente
        </motion.button>

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onBackToStart}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-signal-600/30 py-3.5 text-sm font-semibold tracking-wide text-void-900 dark:border-signal-500/30 dark:text-paper-100"
        >
          <Home className="h-4 w-4" />
          Voltar ao início
        </motion.button>
      </div>
    </motion.div>

      <QuestionsReviewTable items={reviewItems} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-signal-600/10 bg-signal-500/5 px-3 py-3 dark:border-signal-500/10">
      <p className="font-display text-lg font-bold text-void-900 dark:text-paper-100">
        {value}
      </p>
      <p className="text-[11px] font-medium text-void-900/50 dark:text-paper-100/50">
        {label}
      </p>
    </div>
  );
}
