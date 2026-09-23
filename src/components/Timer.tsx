import { Timer as TimerIcon } from "lucide-react";
import { formatTime } from "../utils/calculateScore";

interface TimerProps {
  elapsedMilliseconds: number;
}

export function Timer({ elapsedMilliseconds }: TimerProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-signal-600/25 bg-paper-100/70 px-3 py-1.5 text-sm font-medium text-void-900 shadow-glow-sm backdrop-blur-sm dark:border-signal-500/25 dark:bg-void-800/50 dark:text-paper-100/90">
      <TimerIcon className="h-4 w-4 text-signal-600 dark:text-signal-400" strokeWidth={2.2} />
      <span className="font-display tabular-nums tracking-wide">
        {formatTime(elapsedMilliseconds)}
      </span>
    </div>
  );
}
