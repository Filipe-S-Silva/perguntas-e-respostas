import type { Question } from "../types/quiz";

// Base de perguntas complexas sobre "Violência nas Torcidas Organizadas" (Bamor x Imbatíveis).
// Fonte: apresentação de 19/10/2026 (Filipe, Joyce, Julia, Caroline, Samirya, Vitória).

export const questions: Question[] = [
  {
    id: 1,
    statement: "Ao contrapor o perfil das lideranças (Censo ANATORG, 2015) ao dos torcedores do Bahia (Datafolha), qual contraste reforça a tese de assimetria de poder?",
    alternatives: [
      { id: "a", text: "Lideranças majoritariamente negras e de baixa renda, enquanto a base é majoritariamente branca e empregada" },
      { id: "b", text: "Lideranças com 55% de autodeclarados brancos e 81% com vínculo empregatício, enquanto 70% dos torcedores são pretos e pardos e 48% recebem até dois salários mínimos" },
      { id: "c", text: "Lideranças e torcedores com perfis praticamente idênticos de raça, renda e escolaridade" },
    ],
    correctAnswer: "b",
  },
  {
    id: 2,
    statement: "Como a citação de Lebrun (1999) sobre a dominação nas organizações políticas se articula com a divisão entre lideranças e “pistas”?",
    alternatives: [
      { id: "a", text: "Indica que a dominação é um desvio exclusivo das torcidas, inexistente em organizações políticas modernas" },
      { id: "b", text: "Sugere que as torcidas dispensam hierarquia por serem espontâneas e horizontais" },
      { id: "c", text: "Serve de base teórica para tratar a hierarquia (articulação política e capital simbólico no topo, linha de frente e “massa de manobra” na base) como traço estrutural, não acidental" },
    ],
    correctAnswer: "c",
  },
  {
    id: 3,
    statement: "Comparando os preços inteiros de Bahia × Porto (Baiano) e Bahia × Ceará (Brasileiro), qual setor teve o maior aumento percentual?",
    alternatives: [
      { id: "a", text: "Oeste, de R$ 80 para R$ 120 (aumento de aproximadamente 50%)" },
      { id: "b", text: "Leste, de R$ 60 para R$ 160 (aumento de aproximadamente 167%)" },
      { id: "c", text: "Super Sul, de R$ 40 para R$ 90 (aumento de aproximadamente 125%)" },
    ],
    correctAnswer: "b",
  },
  {
    id: 4,
    statement: "Por que o slide ressalva que os valores são “preços inteiros; não são médias anuais” e que o clube anunciou ingressos a partir de R$ 20 para Bahia × Porto?",
    alternatives: [
      { id: "a", text: "Porque os valores foram calculados a partir de médias de toda a temporada" },
      { id: "b", text: "Porque prova que o clube não elevou os preços entre as duas partidas" },
      { id: "c", text: "Porque a tabela compara jogos específicos a preço cheio, o que não permite, sozinha, generalizar o custo médio de ir ao estádio ao longo do ano" },
    ],
    correctAnswer: "c",
  },
  {
    id: 5,
    statement: "Segundo o Observatório Social do Futebol/UERJ (dados de 2024), quantos casos e qual participação somam as ocorrências “longe do estádio” e nos “arredores (até 5 km)”?",
    alternatives: [
      { id: "a", text: "177 casos, 65,1% do total de 272" },
      { id: "b", text: "144 casos, 52,9% do total de 272" },
      { id: "c", text: "149 casos, 54,8% do total de 272" },
    ],
    correctAnswer: "c",
  },
  {
    id: 6,
    statement: "O material afirma que a distribuição espacial dos casos de 2024 “não é prova de deslocamento histórico”. Qual é a principal razão?",
    alternatives: [
      { id: "a", text: "A maior parte dos casos ocorre nas sedes das torcidas, e não nas ruas" },
      { id: "b", text: "Os dados descrevem um único recorte (2024), sem série comparável que demonstre que a violência ocorria antes predominantemente dentro dos estádios" },
      { id: "c", text: "O relatório descarta notícias como fonte, o que invalida a localização dos casos" },
    ],
    correctAnswer: "b",
  },
  {
    id: 7,
    statement: "Quais limitações metodológicas do relatório são destacadas para evitar interpretações apressadas?",
    alternatives: [
      { id: "a", text: "A coleta se apoia em notícias e outras fontes, e mudanças metodológicas entre edições impedem ler diferenças como aumento real da violência" },
      { id: "b", text: "A amostra foi feita por questionários presenciais, o que impede estimar o total de casos" },
      { id: "c", text: "A exclusão da categoria “dentro do estádio” inviabiliza qualquer comparação espacial" },
    ],
    correctAnswer: "a",
  },
  {
    id: 8,
    statement: "Qual alternativa associa corretamente cada influência internacional ao seu traço dominante nas torcidas organizadas?",
    alternatives: [
      { id: "a", text: "Ultras e Barras Bravas: apenas o uso de faixas e bandeirões, sem relação com comportamento" },
      { id: "b", text: "Ultras: o aguante e o sacrifício físico; Barras Bravas: espetacularização visual das arquibancadas" },
      { id: "c", text: "Ultras: presença ostensiva e espetacularização visual; Barras Bravas: o aguante, apoio incondicional com sacrifício físico" },
    ],
    correctAnswer: "c",
  },
  {
    id: 9,
    statement: "Ao afirmar que as referências são importadas, mas que a postura violenta no futebol baiano tem “determinantes locais e históricos”, o material evita qual simplificação?",
    alternatives: [
      { id: "a", text: "Admitir que Bamor e Imbatíveis compartilham sinalizadores e padronização de vestimentas" },
      { id: "b", text: "Atribuir a violência baiana à simples cópia de modelos estrangeiros, ignorando o contexto local" },
      { id: "c", text: "Reconhecer que a estética das torcidas mudou a partir dos anos 2000" },
    ],
    correctAnswer: "b",
  },
  {
    id: 10,
    statement: "Sobre a empregabilidade dos torcedores infratores, qual afirmação reflete corretamente a comparação apresentada?",
    alternatives: [
      { id: "a", text: "No Brasil, 71% estão desempregados ou na informalidade, contra 40% na Europa, e a Argentina tem situação muito parecida com a brasileira" },
      { id: "b", text: "Os percentuais de Brasil e Europa são idênticos e a Argentina é a exceção" },
      { id: "c", text: "No Brasil, 71% têm emprego formal, enquanto na Europa 40% estão desempregados" },
    ],
    correctAnswer: "a",
  },
  {
    id: 11,
    statement: "Por que a Dinamarca é tratada como exceção na comparação sobre presença feminina entre torcedores infratores?",
    alternatives: [
      { id: "a", text: "Porque apresenta 45% de mulheres ativas, organizadas e agressivas, bem acima da média europeia (20%) e do Brasil (15%)" },
      { id: "b", text: "Porque não há registro de mulheres envolvidas em confrontos no país" },
      { id: "c", text: "Porque registra os mesmos 15% do Brasil, ao contrário do restante da Europa" },
    ],
    correctAnswer: "a",
  },
  {
    id: 12,
    statement: "Quais práticas descritas entre infratores brasileiros, também vistas no exterior, indicam maior sofisticação na organização dos confrontos?",
    alternatives: [
      { id: "a", text: "Restrição das ações a dias de clássico, sem preparo físico prévio" },
      { id: "b", text: "Uso ostensivo de internet e redes sociais para organizar confrontos, prática de MMA, Jiu-Jitsu e Krav Maga e uso de armas brancas" },
      { id: "c", text: "Realização de assembleias presenciais abertas e votação de estratégias de paz" },
    ],
    correctAnswer: "b",
  },
  {
    id: 13,
    statement: "O que significa tratar a violência como “rito de passagem” no contexto da masculinidade tóxica nas torcidas?",
    alternatives: [
      { id: "a", text: "Comportamento isolado e sem relação com a cultura do grupo" },
      { id: "b", text: "Ferramenta para subjugar o outro e “ganhar respeito” no grupo, em um futebol que institucionaliza práticas e discursos de masculinidades tóxicas" },
      { id: "c", text: "Punição aplicada pelos clubes a torcedores reincidentes" },
    ],
    correctAnswer: "b",
  },
  {
    id: 14,
    statement: "Qual papel é atribuído à escola no debate sobre masculinidade e sociabilidade violenta?",
    alternatives: [
      { id: "a", text: "Arena de disputa e subjetivação, onde o binarismo e o medo de associação ao feminino ou à homossexualidade se manifestam, e onde se propõe uma educação voltada para a vida, com igualdade de gênero" },
      { id: "b", text: "Local voltado apenas à repressão disciplinar de torcedores" },
      { id: "c", text: "Espaço neutro, imune ao binarismo de gênero e às disputas de torcida" },
    ],
    correctAnswer: "a",
  },
  {
    id: 15,
    statement: "O que a agressão ligada à identificação de torcida em uma jaqueta, na Unijorge (junho de 2025), evidencia quando articulada aos demais dados?",
    alternatives: [
      { id: "a", text: "Que os conflitos ocorrem apenas nas sedes das torcidas" },
      { id: "b", text: "Que a rivalidade se projeta para espaços cotidianos, como instituições de ensino, para além de estádios e arredores" },
      { id: "c", text: "Que a violência se restringe aos dias de jogo e às proximidades do estádio" },
    ],
    correctAnswer: "b",
  },
  {
    id: 16,
    statement: "Por que o material ressalva que a “responsabilidade criminal individual depende da apuração” no registro do TJBA sobre a morte de um integrante da Bamor antes do Ba-Vi?",
    alternatives: [
      { id: "a", text: "Porque o registro documenta o fato, mas atribuir culpa a indivíduos ou grupos exige apuração, evitando conclusões precipitadas" },
      { id: "b", text: "Porque o caso foi arquivado sem investigação" },
      { id: "c", text: "Porque o TJBA não confirmou que a morte ocorreu" },
    ],
    correctAnswer: "a",
  },
  {
    id: 17,
    statement: "O que o relato do comandante do BEPE (junho de 2025) acrescenta à análise espacial e temporal da violência?",
    alternatives: [
      { id: "a", text: "Indica áreas urbanas específicas (Avenida Suburbana, Periperi, Imbuí, Itapuã e entorno da Fonte Nova) com confrontos antes e depois das partidas" },
      { id: "b", text: "Que os confrontos ocorrem exclusivamente dentro dos estádios durante a partida" },
      { id: "c", text: "Que a violência se concentra nas sedes das torcidas organizadas" },
    ],
    correctAnswer: "a",
  },
  {
    id: 18,
    statement: "O que as comparações com o hóquei no gelo (Vancouver, 2011) e a NBA (2004) buscam demonstrar?",
    alternatives: [
      { id: "a", text: "Que o problema é exclusivo de torcidas organizadas latino-americanas" },
      { id: "b", text: "Que a violência só ocorre em arenas comerciais fechadas" },
      { id: "c", text: "Que a violência associada a eventos esportivos não é exclusiva do futebol nem do Brasil, podendo alcançar espaços públicos e romper a separação entre atletas e público" },
    ],
    correctAnswer: "c",
  },
  {
    id: 19,
    statement: "Quais são as três frentes de medidas integradas defendidas por Murad (2017) na conclusão?",
    alternatives: [
      { id: "a", text: "Policial, esportivo e midiático" },
      { id: "b", text: "Punitivo, preventivo e reeducativo" },
      { id: "c", text: "Econômico, tecnológico e jurídico" },
    ],
    correctAnswer: "b",
  },
  {
    id: 20,
    statement: "Qual afirmação é a mais defensável ao unir os slides sobre ingressos, local da violência e as ressalvas metodológicas?",
    alternatives: [
      { id: "a", text: "Como as sedes concentram só 1,5% dos casos, o tema do deslocamento da violência é irrelevante" },
      { id: "b", text: "Há forte alta de preços e concentração de casos fora ou nos arredores dos estádios, mas, isoladamente, isso não prova causalidade nem deslocamento histórico; a hipótese exige séries comparáveis e outras evidências" },
      { id: "c", text: "A elitização dos ingressos causou comprovadamente o aumento da violência fora dos estádios" },
    ],
    correctAnswer: "b",
  },
  {
    id: 21,
    statement: "Somando as faixas etárias do Censo ANATORG, que parcela das lideranças tem até 40 anos?",
    alternatives: [
      { id: "a", text: "93%, somando também lideranças acima de 40" },
      { id: "b", text: "52%, pois só a faixa até 30 anos é considerada jovem" },
      { id: "c", text: "83% (52% até 30 anos e 31% entre 31 e 40)" },
    ],
    correctAnswer: "c",
  },
  {
    id: 22,
    statement: "Que contraste socioeconômico emerge entre as lideranças (Censo ANATORG) e os torcedores infratores brasileiros?",
    alternatives: [
      { id: "a", text: "Ambos os grupos têm cerca de 80% de empregados formais" },
      { id: "b", text: "81% das lideranças têm vínculo empregatício, enquanto 71% dos infratores estão desempregados ou na informalidade" },
      { id: "c", text: "As lideranças são majoritariamente desempregadas, e os infratores, empregados formais" },
    ],
    correctAnswer: "b",
  }
];
