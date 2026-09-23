import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images, characterNames } from "../data/images";

interface UserSelectorProps {
  onStart: (name: string, selectedImageIndex: number) => void;
}

export function UserSelector({ onStart }: UserSelectorProps) {
  const [name, setName] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    const normalizedName = name.trim();

    if (!normalizedName) {
      setError("Digite seu nome para continuar.");
      return;
    }

    if (selectedImageIndex === null) {
      setError("Escolha um personagem para continuar.");
      return;
    }

    setError(null);
    onStart(normalizedName, selectedImageIndex);
  };

  const previewImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : images[0];

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-signal-500/30 blur-2xl" />
        <img
          src={previewImage}
          alt="Personagem selecionado"
          className="h-28 w-28 rounded-full border-2 border-signal-500/60 object-cover shadow-glow sm:h-32 sm:w-32"
        />
      </motion.div>

      <div className="w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError(null);
          }}
          placeholder="NOME"
          maxLength={40}
          className="w-full rounded-2xl border-2 border-signal-600/20 bg-white/70 px-5 py-3.5 text-center text-base font-medium tracking-wide text-void-900 placeholder:text-void-900/40 outline-none transition-colors focus:border-signal-500 dark:border-signal-500/20 dark:bg-void-800/50 dark:text-paper-100 dark:placeholder:text-paper-100/40"
        />
      </div>

      <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-3">
        {images.map((src, index) => {
          const isSelected = selectedImageIndex === index;
          return (
            <motion.button
              key={src}
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                setSelectedImageIndex(index);
                if (error) setError(null);
              }}
              animate={{ scale: isSelected ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 p-2.5 transition-colors ${
                isSelected
                  ? "border-signal-500 bg-signal-500/10 shadow-glow-sm"
                  : "border-void-900/10 bg-white/50 hover:border-signal-500/40 dark:border-paper-100/10 dark:bg-void-800/40"
              }`}
            >
              <img
                src={src}
                alt={characterNames[index]}
                className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
              />
              <span className="text-xs font-medium text-void-900/70 dark:text-paper-100/70">
                {characterNames[index]}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm font-medium text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={handleStart}
        className="w-full rounded-full bg-gradient-to-br from-signal-500 to-signal-700 py-4 text-base font-semibold tracking-widest text-white shadow-glow transition-transform"
      >
        INICIAR
      </motion.button>
    </div>
  );
}
