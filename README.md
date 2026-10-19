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

## Passo a passo para usar este pacote

1. Descompacte o arquivo `perguntas-e-respostas-redesign.zip`.
2. Abra um terminal dentro da pasta `perguntas-e-respostas-main`.
3. Instale as dependências com `npm install` (precisa de Node 18 ou superior).
4. Rode `npm run dev` e abra o endereço mostrado no terminal.
5. Para conferir tipos e gerar a versão final, rode `npm run build`.
6. Opcional: `npm run preview` abre a versão gerada pelo build.

## O que mudou no visual

**Estrutura das telas**

- Início: duas colunas no desktop. À esquerda, o título do tema e a regra do jogo; à direita, o painel com nome, personagem e botão de começar. No celular, as duas partes ficam empilhadas.
- Pergunta: faixa no topo com "Pergunta X de 10", barra de progresso com uma divisão por pergunta e o cronômetro em formato de placar. No desktop o enunciado fica à esquerda e as alternativas à direita.
- Resultado: o resumo (pontuação, acertos, erros, tempo e botões) fica fixo à esquerda enquanto a revisão das perguntas rola à direita. Na revisão, as respostas erradas também mostram o que foi marcado.
- O campo de nome agora tem rótulo visível ("Seu nome") em vez de só um placeholder.

**Paleta "dia de jogo"** (variáveis em `src/index.css`, uma versão por tema)

| Papel | Claro | Escuro |
| --- | --- | --- |
| Fundo (`canvas`) | `#EDEFEA` | `#0B1822` |
| Painéis (`panel`) | `#FFFFFF` | `#112431` |
| Texto e traços (`ink`) | `#0F2230` | `#EAF0EE` |
| Destaque (`accent`) | `#F2B01E` | `#F5B82E` |
| Acerto (`ok`) | `#188060` | `#3CCB9C` |
| Erro (`bad`) | `#BE3530` | `#FF7A70` |

A paleta é neutra de propósito, para não lembrar as cores de nenhuma das torcidas citadas nas perguntas. Para trocar o destaque, mude `--accent` e `--accent-ink` em `src/index.css`.

**Tipografia:** uma única família, Archivo, em largura condensada nos títulos e números grandes e em largura normal no texto.

**Acessibilidade:** foco visível por teclado, alternativas marcadas como grupo de opções, barra de progresso e cronômetro com rótulos para leitores de tela, e animações reduzidas quando o sistema pede.

As perguntas (`src/data/questions.ts`), os hooks e as regras de pontuação não foram alterados.

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
placeholders gerados para o mock (agora com as cores da nova paleta). Substitua pelos arquivos finais mantendo
os mesmos nomes/caminhos, ou ajuste `src/data/images.ts`.
