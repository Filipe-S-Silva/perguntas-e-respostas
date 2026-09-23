# RI - TEMA

Quiz interativo com identificação de usuário, seleção de personagem, 10
perguntas sorteadas aleatoriamente, cronômetro de precisão e pontuação
baseada em tempo de resposta.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Motion (Framer Motion)
- Lucide React

## Como rodar

```bash
npm install
npm run dev
```

Acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/       Componentes de apresentação reutilizáveis
├── data/             Mock de perguntas, imagens e camada de serviço
├── hooks/            useQuiz (máquina de estado do jogo) e useTimer
├── types/            Interfaces compartilhadas (Question, UserData, etc.)
├── utils/            Funções puras: shuffle e cálculo de pontuação
├── App.tsx
└── main.tsx
```

## Regras de negócio implementadas

- Nome e índice do personagem selecionado são armazenados em `UserData`
  (`name`, `nameLength`, `selectedImageIndex`).
- 10 perguntas são sorteadas de uma base de 22, uma única vez por partida,
  sem repetição, sem mutar o array original (`shuffleQuestions`).
- Cada questão vale no máximo 101 pontos. A cada 300ms de tempo de resposta,
  0,1% da pontuação máxima é descontada (`calculateScore.ts`). Respostas
  erradas valem sempre 0 pontos, mas o tempo é registrado normalmente.
- Ao final das 10 perguntas, a tela de resultado mostra pontuação total,
  acertos, erros, tempo total e percentual de aproveitamento.

## Preparação para backend real

A obtenção das perguntas passa por `src/data/questionService.ts`. Hoje ele
retorna o mock local (`getQuestions()`); para integrar com uma API real,
basta trocar o corpo dessa função por um `fetch("/api/questions")` — nenhum
outro ponto da aplicação precisa mudar.

## Imagens dos personagens

As imagens em `public/images/personagem-1.svg` a `personagem-6.svg` são
placeholders gerados para o mock. Substitua pelos arquivos finais mantendo
os mesmos nomes/caminhos, ou ajuste `src/data/images.ts`.
