import { motion } from "framer-motion";
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
      className="relative flex h-9 w-16 items-center rounded-full border border-signal-500/30 bg-void-800/60 px-1 dark:bg-void-800/60 backdrop-blur-sm transition-colors"
      style={{
        background: darkMode
          ? "rgba(21,16,34,0.6)"
          : "rgba(243,238,255,0.9)",
      }}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="flex h-7 w-7 items-center justify-center rounded-full shadow-glow-sm"
        style={{
          marginLeft: darkMode ? "auto" : 0,
          background: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
        }}
      >
        {darkMode ? (
          <Moon className="h-4 w-4 text-white" />
        ) : (
          <Sun className="h-4 w-4 text-white" />
        )}
      </motion.span>
    </button>
  );
}
