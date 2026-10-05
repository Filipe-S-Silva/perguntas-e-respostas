import type { Question } from "../types/quiz";

// Base de perguntas sobre Violência em Torcidas Organizadas (Bamor x Imbatíveis).
// Ajustado: Removidas as questões fáceis, retirados os campos de dificuldade e multiplicador,
// mantidas as médias e difíceis, e adicionadas novas questões difíceis (incluindo a sobre os autores).

export const questions: Question[] = [
  // --- MÉDIAS ---
  {
    id: 1,
    statement: "Como o material descreve a dinâmica entre as lideranças das torcidas e a base periférica?",
    alternatives: [
      { id: "a", text: "Lideranças acumulam capital político e financeiro, enquanto a base atua como massa de manobra[span_0](start_span)[span_0](end_span)" },
      { id: "b", text: "Lideranças e base dividem lucros e decisões de forma igualitária" },
      { id: "c", text: "A base periférica comanda as decisões financeiras das sedes" },
    ],
    correctAnswer: "a",
  },
  {
    id: 2,
    statement: "Quais regiões do país possuem alianças históricas com as torcidas da Bahia mencionadas no documento?",
    alternatives: [
      { id: "a", text: "São Paulo, Rio de Janeiro e Minas Gerais[span_1](start_span)[span_1](end_span)" },
      { id: "b", text: "Rio Grande do Sul, Paraná e Santa Catarina" },
      { id: "c", text: "Pernambuco, Ceará e Pará" },
    ],
    correctAnswer: "a",
  },
  {
    id: 3,
    statement: "Quais características culturais foram herdadas especificamente das Barras Bravas sul-americanas?",
    alternatives: [
      { id: "a", text: "Mosaicos e cantos sincronizados" },
      { id: "b", text: "Bumbos, cânticos intensos e defesa violenta[span_2](start_span)[span_2](end_span)" },
      { id: "c", text: "Uso exclusivo de bandeirões plásticos sem som" },
    ],
    correctAnswer: "b",
  },
  {
    id: 4,
    statement: "Que tipo de herança cultural foi incorporada dos Ultras europeus pelas torcidas organizadas baianas?",
    alternatives: [
      { id: "a", text: "Mosaicos, coreografias e cantos organizados[span_3](start_span)[span_3](end_span)" },
      { id: "b", text: "Uso de fogos de artifício artesanais em vias públicas" },
      { id: "c", text: "Confrontos físicos corporais sem armas" },
    ],
    correctAnswer: "a",
  },
  {
    id: 5,
    statement: "O que a masculinidade tóxica e o uso de insultos homofóbicos representam no contexto das torcidas organizadas?",
    alternatives: [
      { id: "a", text: "Um rito de passagem e uma prova de superioridade masculina[span_4](start_span)[span_4](end_span)" },
      { id: "b", text: "Uma estratégia de marketing para atrair novos associados" },
      { id: "c", text: "Uma forma pacífica de protesto contra a diretoria" },
    ],
    correctAnswer: "a",
  },
  {
    id: 6,
    statement: "De que maneira a elitização dos ingressos impacta diretamente a segurança pública ligada ao futebol?",
    alternatives: [
      { id: "a", text: "Afasta o público tradicional e desloca a violência para espaços urbanos sem controle[span_5](start_span)[span_5](end_span)" },
      { id: "b", text: "Gera maior arrecadação para os clubes investirem em policiamento" },
      { id: "c", text: "Elimina completamente qualquer chance de conflito entre torcedores" },
    ],
    correctAnswer: "a",
  },
  {
    id: 7,
    statement: "Quais atores reguladores são destacados na análise das respostas institucionais à violência nos estádios?",
    alternatives: [
      { id: "a", text: "Ministério Público, polícia, Estado e clubes[span_6](start_span)[span_6](end_span)" },
      { id: "b", text: "Apenas a Confederação Brasileira de Futebol (CBF)" },
      { id: "c", text: "Empresas privadas de patrocínio esportivo" },
    ],
    correctAnswer: "a",
  },
  {
    id: 8,
    statement: "Qual é a principal mensagem da conclusão apresentada no material sobre o problema da violência nas torcidas?",
    alternatives: [
      { id: "a", text: "Exige políticas integradas que considerem raça, classe e cultura[span_7](start_span)[span_7](end_span)" },
      { id: "b", text: "Deve ser combatida unicamente através do banimento definitivo do futebol" },
      { id: "c", text: "É um fenômeno passageiro que se resolve sem intervenção estatal" },
    ],
    correctAnswer: "a",
  },
  {
    id: 9,
    statement: "O que o documento sugere como papel social além do estádio para os torcedores?",
    alternatives: [
      { id: "a", text: "Compreender que torcer é paixão e escolher a mudança com pensamento crítico[span_8](start_span)[span_8](end_span)" },
      { id: "b", text: "Abandonar definitivamente o futebol profissional" },
      { id: "c", text: "Criar partidos políticos próprios geridos pelas torcidas" },
    ],
    correctAnswer: "a",
  },
  {
    id: 10,
    statement: "De que maneira a rivalidade Bamor x Imbatíveis transcende o ambiente esportivo segundo o estudo?",
    alternatives: [
      { id: "a", text: "Através de confrontos contínuos que marcam e dividem a sociedade e as ruas além das arquibancadas[span_9](start_span)[span_9](end_span)" },
      { id: "b", text: "Restringindo-se a debates virtuais em redes sociais sem impactos físicos" },
      { id: "c", text: "Limitando-se estritamente aos dias de clássicos dentro do gramado" },
    ],
    correctAnswer: "a",
  },

  // --- DIFÍCEIS (Incluindo a questão sobre os autores e as 10 novas) ---
  {
    id: 11,
    statement: "De acordo com a capa do documento, quais são os nomes dos autores responsáveis pela análise sobre a violência nas torcidas organizadas?",
    alternatives: [
      { id: "a", text: "Filipe, Joyce, Julia, Carol, Samirya, Vitória[span_10](start_span)[span_10](end_span)" },
      { id: "b", text: "Carlos, Ana, Pedro, Lucas, Mariana e Beatriz" },
      { id: "c", text: "Gabriel, Bruna, Rafael, Larissa, Mateus e Fernanda" },
    ],
    correctAnswer: "a",
  },
  {
    id: 12,
    statement: "Como a assimetria estrutural entre lideranças e base periférica aprofunda a vulnerabilidade social nos conflitos?",
    alternatives: [
      { id: "a", text: "Enquanto a cúpula obtém ganhos políticos/financeiros, os jovens periféricos arriscam a vida e sofrem sanções penais[span_11](start_span)[span_11](end_span)" },
      { id: "b", text: "A base periférica financia as viagens das lideranças em troca de proteção jurídica" },
      { id: "c", text: "Não há relação de poder, pois todas as decisões são tomadas em assembleias democráticas" },
    ],
    correctAnswer: "a",
  },
  {
    id: 13,
    statement: "De que forma as conexões nacionais entre torcidas (São Paulo, Rio, Minas e Bahia) amplificam o ciclo de violência?",
    alternatives: [
      { id: "a", text: "Através de cobranças, punições cruzadas e alianças que expandem o escopo dos conflitos para nível interestadual[span_12](start_span)[span_12](end_span)" },
      { id: "b", text: "Servindo exclusivamente para intercâmbio cultural pacífico de bandeiras" },
      { id: "c", text: "Impedindo qualquer tipo de comunicação externa entre os grupos locais" },
    ],
    correctAnswer: "a",
  },
  {
    id: 14,
    statement: "De acordo com a análise sociológica do documento, como raça e classe se cruzam com a violência das torcidas?",
    alternatives: [
      { id: "a", text: "A violência recai desproporcionalmente sobre uma juventude predominantemente negra e periférica, marginalizada estruturalmente[span_13](start_span)[span_13](end_span)" },
      { id: "b", text: "A violência é um fenômeno restrito às classes dominantes e economicamente privilegiadas" },
      { id: "c", text: "Fatores raciais e de classe não possuem relevância estatística nos conflitos relatados" },
    ],
    correctAnswer: "a",
  },
  {
    id: 15,
    statement: "Qual é o impacto sistêmico gerado pela fusão de influências dos Ultras europeus com as Barras Bravas sul-americanas nas torcidas baianas?",
    alternatives: [
      { id: "a", text: "Cria uma cultura híbrida altamente explosiva que mescla espetáculo visual com rituais de defesa violenta[span_14](start_span)[span_14](end_span)" },
      { id: "b", text: "Neutraliza a agressividade devido à complexidade das coreografias estrangeiras" },
      { id: "c", text: "Reduz o engajamento dos torcedores em detrimento de manifestações estritamente institucionais" },
    ],
    correctAnswer: "a",
  },
  {
    id: 16,
    statement: "Por que a exclusão gerada pela elitização dos ingressos é apontada como um vetor de espalhamento da violência urbana?",
    alternatives: [
      { id: "a", text: "Porque empurra o conflito para espaços públicos descentralizados e fora do alcance dos aparatos de segurança do estádio[span_15](start_span)[span_15](end_span)" },
      { id: "b", text: "Porque obriga os torcedores a protestarem pacificamente dentro das sedes dos clubes" },
      { id: "c", text: "Porque diminui o número de associados e encerra as atividades das torcidas organizadas" },
    ],
    correctAnswer: "a",
  },
  {
    id: 17,
    statement: "De que maneira a imposição de uma masculinidade tóxica baseada na submissão e desprezo atua como mecanismo de coesão interna?",
    alternatives: [
      { id: "a", text: "Utilizando a homofobia e o culto à agressividade como instrumentos de coerção e eliminação da dissidência ou fragilidade[span_16](start_span)[span_16](end_span)" },
      { id: "b", text: "Promovendo a igualdade de direitos e a livre expressão emocional entre os membros" },
      { id: "c", text: "Incentivando o diálogo aberto com as torcidas rivais para resolução pacífica de conflitos" },
    ],
    correctAnswer: "a",
  },
  {
    id: 18,
    statement: "Como as críticas às forças de segurança pública e atores reguladores são tratadas no escopo do documento?",
    alternatives: [
      { id: "a", text: "Como um ponto central na avaliação dos limites e desafios das estratégias atuais de repressão e prevenção[span_17](start_span)[span_17](end_span)" },
      { id: "b", text: "Como prova absoluta de que a polícia resolveu 100% dos problemas" },
      { id: "c", text: "Como um tema irrelevante sem ligação com a violência urbana" },
    ],
    correctAnswer: "a",
  },
  {
    id: 19,
    statement: "De que modo o capital político acumulado pelas lideranças das torcidas organizadas afeta a autonomia da base nos episódios de confronto?",
    alternatives: [
      { id: "a", text: "Subordinando os membros periféricos a interesses de cúpula enquanto estes assumem os riscos jurídicos e físicos nas ruas[span_18](start_span)[span_18](end_span)" },
      { id: "b", text: "Garantindo bolsas de estudo e estabilidade financeira para todos os integrantes que participam das brigas" },
      { id: "c", text: "Eliminando qualquer forma de hierarquia interna através de votações abertas semanais" },
    ],
    correctAnswer: "a",
  },
  {
    id: 20,
    statement: "Qual é a implicação sociológica da frase 'Aqui não tem vez pra viado' citada no contexto da masculinidade tóxica do grupo?",
    alternatives: [
      { id: "a", text: "Demonstra como a heteronormatividade agressiva e a homofobia estruturam ritos de exclusão e validação da macheza[span_19](start_span)[span_19](end_span)" },
      { id: "b", text: "Reflete uma diretriz oficial de inclusão social adotada pelos estatutos dos clubes" },
      { id: "c", text: "Trata-se de uma brincadeira interna sem qualquer relação com a violência simbólica" },
    ],
    correctAnswer: "a",
  },
  {
    id: 21,
    statement: "De que maneira o deslocamento geográfico da violência (deixando o estádio rumo a ruas, ônibus e metrô) altera a eficácia das políticas públicas de segurança?",
    alternatives: [
      { id: "a", text: "Dificulta o controle estatal, pois descentraliza o conflito para redes de transporte e vias públicas sem policiamento fixo[span_20](start_span)[span_20](end_span)" },
      { id: "b", text: "Facilita a ação policial devido à concentração de câmeras de segurança nas ruas" },
      { id: "c", text: "Torna a violência totalmente extinta por falta de público nos arredores" },
    ],
    correctAnswer: "a",
  },
  {
    id: 22,
    statement: "Como a estrutura das torcidas organizadas na Bahia se relaciona com o conceito de identidade forte citado no documento?",
    alternatives: [
      { id: "a", text: "Através de uma coesão rígida baseada em pertencimento territorial e rivalidades históricas enraizadas[span_21](start_span)[span_21](end_span)" },
      { id: "b", text: "Por meio de associações flexíveis que mudam de clube a cada campeonato" },
      { id: "c", text: "Descartando símbolos visuais e hinos para evitar confrontos com a diretoria" },
    ],
    correctAnswer: "a",
  },
  {
    id: 23,
    statement: "Qual é a relação apontada entre o número expressivo de mortes na Bahia (pelo menos 100 em 10 anos) e a dinâmica das torcidas rivais?",
    alternatives: [
      { id: "a", text: "Reflete a gravidade e a letalidade crônica decorrente dos confrontos diretos entre facções de torcedores[span_22](start_span)[span_22](end_span)" },
      { id: "b", text: "Demonstra que a violência letal ocorre exclusivamente dentro dos campos de futebol durante as partidas" },
      { id: "c", text: "Comprova que o fator esportivo é irrelevante para a segurança pública estadual" },
    ],
    correctAnswer: "a",
  },
  {
    id: 24,
    statement: "De que maneira a importação de elementos visuais e comportamentais estrangeiros modifica a cultura das torcidas locais?",
    alternatives: [
      { id: "a", text: "Intensificando o grau de organização tática e o rigor nos confrontos através de rituais importados[span_23](start_span)[span_23](end_span)" },
      { id: "b", text: "Suavizando os conflitos devido ao foco exclusivo em coreografias artísticas" },
      { id: "c", text: "Eliminando a rivalidade regional em prol de uma união internacional" },
    ],
    correctAnswer: "a",
  },
  {
    id: 25,
    statement: "Por que soluções eficazes contra a violência nas torcidas exigem, segundo a conclusão, uma abordagem multidisciplinar baseada em raça, classe e cultura?",
    alternatives: [
      { id: "a", text: "Porque o fenômeno está profundamente enraizado em desigualdades sociais estruturais que vão muito além do ambiente esportivo[span_24](start_span)[span_24](end_span)" },
      { id: "b", text: "Porque os clubes de futebol conseguem resolver o problema sozinhos alterando os preços dos ingressos" },
      { id: "c", text: "Porque a violência é gerada exclusivamente por falhas na arbitragem dos jogos" },
    ],
    correctAnswer: "a",
  }
];
