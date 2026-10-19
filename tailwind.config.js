/** @type {import('tailwindcss').Config} */

// As cores vêm de variáveis CSS (src/index.css), uma por tema.
// O formato "rgb(var(--x) / <alpha-value>)" mantém funcionando utilitários
// como bg-accent/20 ou text-ink/70.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
      },
      colors: {
        canvas: token("canvas"), // fundo da página
        panel: token("panel"), // cartões e painéis
        raised: token("raised"), // campos e itens dentro de painéis
        ink: token("ink"), // texto e traços principais
        line: token("line"), // bordas e divisores
        accent: token("accent"), // destaque (ação principal, seleção)
        "accent-ink": token("accent-ink"), // texto sobre o destaque
        ok: token("ok"), // acerto
        bad: token("bad"), // erro
        scoreboard: token("scoreboard"), // fundo do placar (cronômetro)
      },
    },
  },
  plugins: [],
};
