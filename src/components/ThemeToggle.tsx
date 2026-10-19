import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={darkMode ? "Ativar tema claro" : "Ativar tema escuro"}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel text-ink transition-colors hover:bg-raised"
    >
      {darkMode ? (
        <Sun className="h-5 w-5" strokeWidth={2} />
      ) : (
        <Moon className="h-5 w-5" strokeWidth={2} />
      )}
    </button>
  );
}
