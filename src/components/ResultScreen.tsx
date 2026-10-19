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
    <div className="mx-auto grid w-full max-w-5xl items-start gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14">
      {/* Resumo: fica à vista enquanto a revisão rola */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="rounded-2xl border border-line bg-panel p-6 sm:p-8 lg:sticky lg:top-6"
      >
        <div className="flex items-center gap-4">
          <img
            src={characterImage}
            alt=""
            className="h-16 w-16 shrink-0 rounded-xl border-2 border-line object-cover"
          />
          <p className="text-xl font-bold leading-tight text-ink">
            Parabéns, {userData.name}!
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-scoreboard px-5 py-4">
          <p className="text-sm font-medium text-white/70">Sua pontuação</p>
          <p className="font-display text-6xl leading-none tabular-nums text-accent sm:text-7xl">
            {formatScore(summary.totalScore)}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {summary.percentage.toFixed(1)}% de aproveitamento
          </p>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-3">
          <Stat label="Acertos" value={String(summary.correctCount)} tone="ok" />
          <Stat label="Erros" value={String(summary.incorrectCount)} tone="bad" />
          <Stat
            label="Tempo total"
            value={formatTime(summary.totalElapsedMilliseconds)}
          />
        </dl>

        <div className="mt-6 flex flex-col gap-3">
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={onPlayAgain}
            className="flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-base font-bold text-accent-ink transition-opacity hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" strokeWidth={2.5} />
            Jogar novamente
          </motion.button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={onBackToStart}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-line py-3.5 text-base font-bold text-ink transition-colors hover:border-ink/50"
          >
            <Home className="h-4 w-4" strokeWidth={2.5} />
            Voltar ao início
          </motion.button>
        </div>
      </motion.section>

      <QuestionsReviewTable items={reviewItems} />
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "ok" | "bad";
}) {
  const color = tone === "ok" ? "text-ok" : tone === "bad" ? "text-bad" : "text-ink";
  return (
    <div className="rounded-xl bg-raised px-3 py-3">
      <dd className={`font-display text-3xl leading-none tabular-nums ${color}`}>
        {value}
      </dd>
      <dt className="mt-1 text-xs font-semibold text-ink/70">{label}</dt>
    </div>
  );
}
