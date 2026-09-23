import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  compact?: boolean;
}

export function Header({ darkMode, onToggleTheme, compact = false }: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between">
      <div className={compact ? "opacity-0 pointer-events-none" : ""}>
        {/* espaçador simétrico para manter o título centralizado */}
        <div className="h-9 w-9" />
      </div>

      <h1
        className={`font-display font-semibold tracking-tight text-signal-500 dark:text-signal-400 ${
          compact ? "text-lg" : "text-2xl sm:text-3xl"
        }`}
      >
        RI <span className="text-void-800 dark:text-paper-100">-</span> TEMA
      </h1>

      <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
    </header>
  );
}
