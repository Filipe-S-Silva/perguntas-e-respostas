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
    <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-20">
      {/* Apresentação */}
      <section>
        <h2 className="font-display text-6xl leading-[0.9] text-ink sm:text-7xl lg:text-8xl">
          Violência em torcidas organizadas
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
          São 10 perguntas sorteadas a cada partida. Acertar vale pontos, e
          quanto mais rápido você responde, mais pontos ganha.
        </p>
      </section>

      {/* Identificação */}
      <section className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
        <div className="flex items-end gap-4">
          <img
            src={previewImage}
            alt={
              selectedImageIndex !== null
                ? `Personagem selecionado: ${characterNames[selectedImageIndex]}`
                : "Nenhum personagem selecionado"
            }
            className={`h-16 w-16 shrink-0 rounded-xl border-2 border-line object-cover transition-opacity ${
              selectedImageIndex === null ? "opacity-40 grayscale" : ""
            }`}
          />
          <div className="w-full">
            <label
              htmlFor="player-name"
              className="mb-1.5 block text-sm font-semibold text-ink"
            >
              Seu nome
            </label>
            <input
              id="player-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError(null);
              }}
              maxLength={40}
              autoComplete="given-name"
              className="w-full rounded-lg border-2 border-line bg-raised px-4 py-3 text-base font-medium text-ink outline-none transition-colors focus:border-ink"
            />
          </div>
        </div>

        <fieldset className="mt-7">
          <legend className="mb-2.5 text-sm font-semibold text-ink">
            Escolha seu personagem
          </legend>
          <div className="grid grid-cols-3 gap-3">
            {images.map((src, index) => {
              const isSelected = selectedImageIndex === index;
              return (
                <motion.button
                  key={src}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setSelectedImageIndex(index);
                    if (error) setError(null);
                  }}
                  className={`flex flex-col items-center gap-2 rounded-xl border-2 p-2.5 transition-colors ${
                    isSelected
                      ? "border-ink bg-raised"
                      : "border-line bg-panel hover:border-ink/50"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="h-14 w-14 rounded-lg object-cover sm:h-16 sm:w-16"
                  />
                  <span
                    className={`text-sm ${
                      isSelected ? "font-bold text-ink" : "font-medium text-ink/75"
                    }`}
                  >
                    {characterNames[index]}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </fieldset>

        <AnimatePresence>
          {error && (
            <motion.p
              role="alert"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden pt-4 text-sm font-semibold text-bad"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={handleStart}
          className="mt-6 w-full rounded-xl bg-accent py-4 text-lg font-bold text-accent-ink transition-opacity hover:opacity-90"
        >
          Começar o quiz
        </motion.button>
      </section>
    </div>
  );
}
