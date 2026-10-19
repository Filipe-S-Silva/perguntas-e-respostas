import { formatTime } from "../utils/calculateScore";

interface TimerProps {
  elapsedMilliseconds: number;
}

/** Cronômetro no formato de placar: o elemento de destaque da tela de pergunta. */
export function Timer({ elapsedMilliseconds }: TimerProps) {
  return (
    <div
      role="timer"
      aria-label="Tempo nesta pergunta"
      className="rounded-lg bg-scoreboard px-4 py-2 font-display text-3xl leading-none tabular-nums text-accent sm:text-4xl"
    >
      {formatTime(elapsedMilliseconds)}
    </div>
  );
}
