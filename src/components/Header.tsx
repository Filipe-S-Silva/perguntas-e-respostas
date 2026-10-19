import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export function Header({ darkMode, onToggleTheme }: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between border-b border-line pb-4">
      <h1 className="font-display text-3xl leading-none text-ink sm:text-4xl">
        RI<span className="mx-1.5 text-accent">-</span>TEMA
      </h1>
      <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
    </header>
  );
}
