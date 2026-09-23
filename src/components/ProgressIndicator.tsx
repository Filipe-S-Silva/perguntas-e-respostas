interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-signal-600/25 bg-paper-100/70 px-3 py-1.5 text-sm font-medium text-void-900 shadow-glow-sm backdrop-blur-sm dark:border-signal-500/25 dark:bg-void-800/50 dark:text-paper-100/90">
      <span className="font-display tabular-nums tracking-wide">
        {String(current).padStart(2, "0")}/{String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
