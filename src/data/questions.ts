import type { Question } from "../types/quiz";

// Base de perguntas sobre Violência em Torcidas Organizadas (Bamor x Imbatíveis).
// Ajustado: Removidos os marcadores de citação das alternativas.

export const questions: Question[] = [
  // --- MÉDIAS ---
  {
    id: 1,
    statement: "Como o material descreve a dinâmica entre as lideranças das torcidas e a base periférica?",
    alternatives: [
      { id: "a", text: "Lideranças e base dividem lucros e decisões de forma igualitária" },
      { id: "b", text: "Lideranças acumulam capital político e financeiro, enquanto a base atua como massa de manobra" },
      { id: "c", text: "A base periférica comanda as decisões financeiras das sedes e a cúpula executa" },
    ],
    correctAnswer: "b",
  },
  {
    id: 2,
    statement: "Quais regiões do país possuem alianças históricas com as torcidas da Bahia mencionadas no documento?",
    alternatives: [
      { id: "a", text: "São Paulo, Rio de Janeiro e Minas Gerais" },
      { id: "b", text: "Rio Grande do Sul, Paraná e Santa Catarina" },
      { id: "c", text: "Pernambuco, Ceará e Pará" },
    ],
    correctAnswer: "a",
  },
  {
    id: 3,
    statement: "Quais características culturais foram herdadas especificamente das Barras Bravas sul-americanas?",
    alternatives: [
      { id: "a", text: "Mosaicos e cantos sincronizados importados" },
      { id: "b", text: "Uso exclusivo de bandeirões plásticos sem som" },
      { id: "c", text: "Bumbos, cânticos intensos e defesa violenta" },
    ],
    correctAnswer: "c",
  },
  {
    id: 4,
    statement: "Que tipo de herança cultural foi incorporada dos Ultras europeus pelas torcidas organizadas baianas?",
    alternatives: [
      { id: "a", text: "Uso de fogos de artifício artesanais em vias públicas" },
      { id: "b", text: "Mosaicos, coreografias e cantos organizados" },
      { id: "c", text: "Confrontos físicos corporais sem armas brancas" },
    ],
    correctAnswer: "b",
  },
  {
    id: 5,
    statement: "O que a masculinidade tóxica e o uso de insultos homofóbicos representam no contexto das torcidas organizadas?",
    alternatives: [
      { id: "a", text: "Uma estratégia de marketing para atrair novos associados" },
      { id: "b", text: "Uma forma pacífica de protesto contra a diretoria dos clubes" },
      { id: "c", text: "Um rito de passagem e uma prova de superioridade masculina" },
    ],
    correctAnswer: "c",
  },
  {
    id: 6,
    statement: "De que maneira a elitização dos ingressos impacta diretamente a segurança pública ligada ao futebol?",
    alternatives: [
      { id: "a", text: "Afasta o público tradicional e desloca a violência para espaços urbanos sem controle" },
      { id: "b", text: "Gera maior arrecadação para os clubes investirem em policiamento privado" },
      { id: "c", text: "Elimina completamente qualquer chance de conflito entre torcedores rivais" },
    ],
    correctAnswer: "a",
  },
  {
    id: 7,
    statement: "Quais atores reguladores são destacados na análise das respostas institucionais à violência nos estádios?",
    alternatives: [
      { id: "a", text: "Apenas a Confederação Brasileira de Futebol (CBF)" },
      { id: "b", text: "Ministério Público, polícia, Estado e clubes" },
      { id: "c", text: "Empresas privadas de patrocínio esportivo e atletas" },
    ],
    correctAnswer: "b",
  },
  {
    id: 8,
    statement: "Qual é a principal mensagem da conclusão apresentada no material sobre o problema da violência nas torcidas?",
    alternatives: [
      { id: "a", text: "Deve ser combatida unicamente através do banimento definitivo do futebol" },
      { id: "b", text: "É um fenômeno passageiro que se resolve sem intervenção estatal" },
      { id: "c", text: "Exige políticas integradas que considerem raça, classe e cultura" },
    ],
    correctAnswer: "c",
  },
  {
    id: 9,
    statement: "O que o documento sugere como papel social além do estádio para os torcedores?",
    alternatives: [
      { id: "a", text: "Compreender que torcer é paixão e escolher a mudança com pensamento crítico" },
      { id: "b", text: "Abandonar definitivamente o futebol profissional" },
      { id: "c", text: "Criar partidos políticos próprios geridos pelas torcidas" },
    ],
    correctAnswer: "a",
  },
  {
    id: 10,
    statement: "De que maneira a rivalidade Bamor x Imbatíveis transcende o ambiente esportivo segundo o estudo?",
    alternatives: [
      { id: "a", text: "Restringindo-se a debates virtuais em redes sociais sem impactos físicos" },
      { id: "b", text: "Através de confrontos contínuos que marcam e dividem a sociedade e as ruas além das arquibancadas" },
      { id: "c", text: "Limitando-se estritamente aos dias de clássicos dentro do gramado" },
    ],
    correctAnswer: "b",
  },

  // --- DIFÍCEIS ---
  {
    id: 11,
    statement: "De acordo com a capa do documento, quais são os nomes dos autores responsáveis pela análise sobre a violência nas torcidas organizadas?",
    alternatives: [
      { id: "a", text: "Carlos, Ana, Pedro, Lucas, Mariana e Beatriz" },
      { id: "b", text: "Filipe, Joyce, Julia, Carol, Samirya, Vitória" },
      { id: "c", text: "Gabriel, Bruna, Rafael, Larissa, Mateus e Fernanda" },
    ],
    correctAnswer: "b",
  },
  {
    id: 12,
    statement: "Como a assimetria estrutural entre lideranças e base periférica aprofunda a vulnerabilidade social nos conflitos?",
    alternatives: [
      { id: "a", text: "A base periférica financia as viagens das lideranças em troca de proteção jurídica" },
      { id: "b", text: "Não há relação de poder, pois todas as decisões são tomadas em assembleias democráticas" },
      { id: "c", text: "Enquanto a cúpula obtém ganhos políticos e financeiros, os jovens periféricos arriscam a vida e sofrem sanções penais" },
    ],
    correctAnswer: "c",
  },
  {
    id: 13,
    statement: "De que forma as conexões nacionais entre torcidas (São Paulo, Rio, Minas e Bahia) amplificam o ciclo de violência?",
    alternatives: [
      { id: "a", text: "Através de cobranças, punições cruzadas e alianças que expandem o escopo dos conflitos para nível interestadual" },
      { id: "b", text: "Servindo exclusivamente para intercâmbio cultural pacífico de bandeiras" },
      { id: "c", text: "Impedindo qualquer tipo de comunicação externa entre os grupos locais" },
    ],
    correctAnswer: "a",
  },
  {
    id: 14,
    statement: "De acordo com a análise sociológica do documento, como raça e classe se cruzam com a violência das torcidas?",
    alternatives: [
      { id: "a", text: "A violência é um fenômeno restrito às classes dominantes e economicamente privilegiadas" },
      { id: "b", text: "A violência recai desproporcionalmente sobre uma juventude predominantemente negra e periférica, marginalizada estruturalmente" },
      { id: "c", text: "Fatores raciais e de classe não possuem relevância estatística nos conflitos relatados" },
    ],
    correctAnswer: "b",
  },
  {
    id: 15,
    statement: "Qual é o impacto sistêmico gerado pela fusão de influências dos Ultras europeus com as Barras Bravas sul-americanas nas torcidas baianas?",
    alternatives: [
      { id: "a", text: "Neutraliza a agressividade devido à complexidade das coreografias estrangeiras" },
      { id: "b", text: "Reduz o engajamento dos torcedores em detrimento de manifestações estritamente institucionais" },
      { id: "c", text: "Cria uma cultura híbrida altamente explosiva que mescla espetáculo visual com rituais de defesa violenta" },
    ],
    correctAnswer: "c",
  },
  {
    id: 16,
    statement: "Por que a exclusão gerada pela elitização dos ingressos é apontada como um vetor de espalhamento da violência urbana?",
    alternatives: [
      { id: "a", text: "Porque empurra o conflito para espaços públicos descentralizados e fora do alcance dos aparatos de segurança do estádio" },
      { id: "b", text: "Porque obriga os torcedores a protestarem pacificamente dentro das sedes dos clubes" },
      { id: "c", text: "Porque diminui o número de associados e encerra as atividades das torcidas organizadas" },
    ],
    correctAnswer: "a",
  },
  {
    id: 17,
    statement: "De que maneira a imposição de uma masculinidade tóxica baseada na submissão e desprezo atua como mecanismo de coesão interna?",
    alternatives: [
      { id: "a", text: "Promovendo a igualdade de direitos e a livre expressão emocional entre os membros" },
      { id: "b", text: "Utilizando a homofobia e o culto à agressividade como instrumentos de coerção e eliminação da dissidência ou fragilidade" },
      { id: "c", text: "Incentivando o diálogo aberto com as torcidas rivais para resolução pacífica de conflitos" },
    ],
    correctAnswer: "b",
  },
  {
    id: 18,
    statement: "Como as críticas às forças de segurança pública e atores reguladores são tratadas no escopo do documento?",
    alternatives: [
      { id: "a", text: "Como prova absoluta de que a polícia resolveu 100% dos problemas" },
      { id: "b", text: "Como um tema irrelevante sem ligação com a violência urbana" },
      { id: "c", text: "Como um ponto central na avaliação dos limites e desafios das estratégias atuais de repressão e prevenção" },
    ],
    correctAnswer: "c",
  },
  {
    id: 19,
    statement: "De que modo o capital político acumulado pelas lideranças das torcidas organizadas afeta a autonomia da base nos episódios de confronto?",
    alternatives: [
      { id: "a", text: "Subordinando os membros periféricos a interesses de cúpula enquanto estes assumem os riscos jurídicos e físicos nas ruas" },
      { id: "b", text: "Garantindo bolsas de estudo e estabilidade financeira para todos os integrantes que participam das brigas" },
      { id: "c", text: "Eliminando qualquer forma de hierarquia interna através de votações abertas semanais" },
    ],
    correctAnswer: "a",
  },
  {
    id: 20,
    statement: "Qual é a implicação sociológica da citação de insultos homofóbicos no contexto da masculinidade tóxica do grupo?",
    alternatives: [
      { id: "a", text: "Reflete uma diretriz oficial de inclusão social adotada pelos estatutos dos clubes" },
      { id: "b", text: "Demonstra como a heteronormatividade agressiva e a homofobia estruturam ritos de exclusão e validação da macheza" },
      { id: "c", text: "Trata-se de uma brincadeira interna sem qualquer relação com a violência simbólica" },
    ],
    correctAnswer: "b",
  },
  {
    id: 21,
    statement: "De que maneira o deslocamento geográfico da violência (deixando o estádio rumo a ruas, ônibus e metrô) altera a eficácia das políticas públicas de segurança?",
    alternatives: [
      { id: "a", text: "Facilita a ação policial devido à concentração de câmeras de segurança nas ruas" },
      { id: "b", text: "Torna a violência totalmente extinta por falta de público nos arredores" },
      { id: "c", text: "Dificulta o controle estatal, pois descentraliza o conflito para redes de transporte e vias públicas sem policiamento fixo" },
    ],
    correctAnswer: "c",
  },
  {
    id: 22,
    statement: "Como a estrutura das torcidas organizadas na Bahia se relaciona com o conceito de identidade forte citado no documento?",
    alternatives: [
      { id: "a", text: "Por meio de associações flexíveis que mudam de clube a cada campeonato" },
      { id: "b", text: "Através de uma coesão rígida baseada em pertencimento territorial e rivalidades históricas enraizadas" },
      { id: "c", text: "Descartando símbolos visuais e hinos para evitar confrontos com a diretoria" },
    ],
    correctAnswer: "b",
  },
  {
    id: 23,
    statement: "Qual é a relação apontada entre o número expressivo de mortes na Bahia (pelo menos 100 em 10 anos) e a dinâmica das torcidas rivais?",
    alternatives: [
      { id: "a", text: "Reflete a gravidade e a letalidade crônica decorrente dos confrontos diretos entre facções de torcedores" },
      { id: "b", text: "Demonstra que a violência letal ocorre exclusivamente dentro dos campos de futebol durante as partidas" },
      { id: "c", text: "Comprova que o fator esportivo é irrelevante para a segurança pública estadual" },
    ],
    correctAnswer: "a",
  },
  {
    id: 24,
    statement: "De que maneira a importação de elementos visuais e comportamentais estrangeiros modifica a cultura das torcidas locais?",
    alternatives: [
      { id: "a", text: "Suavizando os conflitos devido ao foco exclusivo em coreografias artísticas" },
      { id: "b", text: "Intensificando o grau de organização tática e o rigor nos confrontos através de rituais importados" },
      { id: "c", text: "Eliminando a rivalidade regional em prol de uma união internacional" },
    ],
    correctAnswer: "b",
  },
  {
    id: 25,
    statement: "Por que soluções eficazes contra a violência nas torcidas exigem, segundo a conclusão, uma abordagem multidisciplinar baseada em raça, classe e cultura?",
    alternatives: [
      { id: "a", text: "Porque os clubes de futebol conseguem resolver o problema sozinhos alterando os preços dos ingressos" },
      { id: "b", text: "Porque a violência é gerada exclusivamente por falhas na arbitragem dos jogos" },
      { id: "c", text: "Porque o fenômeno está profundamente enraizado em desigualdades sociais estruturais que vão muito além do ambiente esportivo" },
    ],
    correctAnswer: "c",
  }
];

