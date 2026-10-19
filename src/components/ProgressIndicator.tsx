interface ProgressIndicatorProps {
  current: number;
  total: number;
}

/** Uma barra por pergunta: concluídas em tinta, atual em destaque, futuras vazias. */
export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div
      role="progressbar"
      aria-label="Progresso do quiz"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current}
      aria-valuetext={`Pergunta ${current} de ${total}`}
      className="flex w-full items-center gap-1.5"
    >
      {Array.from({ length: total }, (_, i) => {
        const position = i + 1;
        const tone =
          position < current
            ? "bg-ink"
            : position === current
            ? "bg-accent"
            : "bg-line";
        return <span key={position} className={`h-2 flex-1 rounded-full ${tone}`} />;
      })}
    </div>
  );
}
