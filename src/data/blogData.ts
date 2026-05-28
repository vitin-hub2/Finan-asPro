/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Author, Article, IndexRate, FAQItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'investimentos',
    name: 'Investimentos',
    iconName: 'TrendingUp',
    bgColor: 'bg-emerald-50 text-emerald-700 border-emerald-150',
    textColor: 'text-emerald-750',
    description: 'Ações, fundos de investimento, renda fixa, fundos imobiliários e estratégias para multiplicar seu patrimônio.'
  },
  {
    id: 'financas_pessoais',
    name: 'Finanças Pessoais',
    iconName: 'PiggyBank',
    bgColor: 'bg-blue-50 text-blue-700 border-blue-150',
    textColor: 'text-blue-750',
    description: 'Orçamento pessoal, métodos de organização financeira, quitação de dívidas e mudança de mentalidade.'
  },
  {
    id: 'economia',
    name: 'Economia',
    iconName: 'Globe',
    bgColor: 'bg-[#F0F7FC] text-[#1B6CA8] border-[#D4E8F4]',
    textColor: 'text-[#1B6CA8]',
    description: 'Indicadores econômicos, taxa Selic, inflação, decisões do Banco Central e como o cenário nacional impacta seu bolso.'
  },
  {
    id: 'patrimonio',
    name: 'Patrimônio',
    iconName: 'Home',
    bgColor: 'bg-amber-50 text-amber-700 border-amber-150',
    textColor: 'text-amber-750',
    description: 'Planejamento sucessório, investimentos imobiliários, proteção patrimonial e construção de longo prazo.'
  },
  {
    id: 'consumo_inteligente',
    name: 'Consumo Inteligente',
    iconName: 'CreditCard',
    bgColor: 'bg-purple-50 text-purple-700 border-purple-150',
    textColor: 'text-purple-750',
    description: 'Uso racional de cartões de crédito, estratégias de acúmulo de milhas e cashback, e comparativos de serviços financeiros.'
  },
  {
    id: 'renda_extra',
    name: 'Renda Extra',
    iconName: 'Briefcase',
    bgColor: 'bg-rose-50 text-rose-700 border-rose-150',
    textColor: 'text-rose-750',
    description: 'Empreendedorismo paralelo, atividades freelancers, monetização de habilidades e fontes alternativas de fluxo de caixa.'
  }
];

export const AUTHORS: Author[] = [
  {
    id: 'carlos_malta',
    name: 'Carlos Malta',
    role: 'Economista-Chefe',
    specialty: 'Macroeconomia e Renda Fixa',
    bio: 'Formado pela USP com mestrado em Finanças pela FGV. Atua há mais de 15 anos como analista macroeconômico, ajudando investidores a navegarem pelos ciclos de juros no Brasil.',
    avatarChar: 'CM',
    bgColor: 'bg-[#0A3D62]'
  },
  {
    id: 'mariana_rocha',
    name: 'Mariana Rocha, CFP®',
    role: 'Planejadora Financeira',
    specialty: 'Finanças Pessoais e Orçamento',
    bio: 'Certificada CFP® (Certified Financial Planner). Especialista em psicologia do consumo e reestruturação de finanças familiares, com foco em planejamento de metas de médio e longo prazo.',
    avatarChar: 'MR',
    bgColor: 'bg-[#27AE60]'
  },
  {
    id: 'thiago_silva',
    name: 'Thiago Silva, CNPI',
    role: 'Analista de Investimentos',
    specialty: 'Ações e Fundos Imobiliários',
    bio: 'Analista credenciado CNPI. Com passagens por grandes corretoras de valores, monitora o mercado de capitais brasileiro e é defensor de estratégias de dividendos focadas em valor.',
    avatarChar: 'TS',
    bgColor: 'bg-[#1B6CA8]'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'O FinançasPro faz recomendações diretas de investimentos?',
    answer: 'Não. O FinançasPro é um portal de educação e análise financeira puramente informativa. Nossos artigos expõem cenários, simulações e conceitos técnicos do mercado de capitais e finanças pessoais. Conforme exigido pela legislação da CVM, qualquer decisão tomada com base em nosso conteúdo é de inteira responsabilidade do leitor. Recomendamos consultar profissionais de investimentos certificados para estruturar sua carteira individual.'
  },
  {
    question: 'Como posso enviar uma sugestão de artigo ou pauta para a redação?',
    answer: 'Nossa equipe de redação está sempre aberta a novas pautas de educação financeira! Você pode usar o formulário de contato em nosso site ou escrever diretamente para redacao@financaspro.com.br. Todas as sugestões são avaliadas por nossos analistas baseando-se no critério de utilidade pública e clareza informativa.'
  },
  {
    question: 'De quanto em quanto tempo as análises de mercado são atualizadas?',
    answer: 'As taxas econômicas de referência (como IPCA, CDI e Selic) são atualizadas semanalmente ou assim que ocorrem as reuniões do COPOM (Comitê de Política Monetária del Banco Central). Nossos artigos de análise macroeconômica acompanham de perto os relatórios oficiais do setor financeiro para que você tome sempre decisões reais baseadas em dados consolidados.'
  },
  {
    question: 'Vocês realizam parcerias com bancos ou corretoras de valores?',
    answer: 'Nossa linha editorial é estritamente independente. Avaliações de produtos financeiros (como contas correntes, cartões de crédito e fundos) são feitas com base em dados técnicos e benefício real para o investidor pessoa física. Eventuais conteúdos patrocinados são devidamente identificados com a tag correspondente, garantindo transparência integral aos nossos leitores.'
  },
  {
    question: 'A calculadora de investimentos calcula o imposto de renda regressivo?',
    answer: 'Sim! Nossa ferramenta de simulação na sidebar fornece uma projeção real e já desconta a alíquota de imposto de renda padrão para aplicações de renda fixa, dependendo do prazo de simulação digitado. Isso possibilita que você entenda exatamente a rentabilidade líquida aproximada de suas aplicações financeiras de longo prazo.'
  }
];

export const EXPERT_ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'tesouro-direto-2025-como-escolher',
    title: 'Tesouro Direto em 2025: Como escolher o título certo para seu perfil',
    subtitle: 'Navegue pelas principais opções do Tesouro Nacional e aprenda a casar prazos e objetivos de forma estratégica',
    category: 'investimentos',
    excerpt: 'O Tesouro Direto continua sendo o porto seguro do investidor brasileiro. Contudo, em 2025 com o cenário de juros flutuantes, errar na escolha pode custar rentabilidade ou até gerar prejuízos na marcação a mercado. Descubra qual papel é ideal para os seus objetivos.',
    authorId: 'carlos_malta',
    date: '24 de Maio de 2026',
    readTime: 6,
    views: 3450,
    likes: 210,
    isFeatured: true,
    keyPoints: [
      'Entenda seu horizonte de tempo para não resgatar antes e perder na marcação a mercado.',
      'O Tesouro Selic continua sendo a única opção viável para a reserva de emergência absoluta.',
      'O Tesouro IPCA+ garante ganho real histórico contra a inflação, recomendado para aposentadoria.',
      'Os títulos prefixados exigem cautela e devem ser comprados apenas quando há forte viés de queda nos juros.'
    ],
    warning: 'Atenção: Os títulos do Tesouro IPCA+ e Tesouro Prefixado sofrem oscilações diárias de preço (marcação a mercado). Se você vender antes do vencimento estipulado, poderá receber menos dinheiro do que investiu inicialmente.',
    tableData: {
      headers: ['Tipo de Título', 'Rentabilidade Típica', 'Ideal Para', 'Carência/Liquidez'],
      rows: [
        ['Tesouro Selic', 'Taxa Selic + pequeno spread', 'Reserva de emergência e caixa', 'Liquidez diária (D+1)'],
        ['Tesouro IPCA+', 'Inflação oficial + Taxa Fixa', 'Aposentadoria e projetos longos', 'Médio/Longo prazo (D+1 na venda)'],
        ['Tesouro Prefixado', 'Taxa fixa anual fechada', 'Apostar na queda da inflação', 'Longo prazo (Evitar resgate antecipado)'],
        ['Tesouro RendA+', 'Inflação + cupom mensal futuro', 'Complemento de aposentadoria', 'Período de acumulação mínimo']
      ],
      caption: 'Comparativo dos títulos públicos disponíveis em 2025'
    },
    content: `O Tesouro Direto consolidou-se como o principal veículo de introdução ao mundo dos investimentos no Brasil. Emitido pelo Tesouro Nacional e garantido de forma soberana pelo próprio Governo Federal, ele é considerado o investimento com o menor risco de crédito de todo o sistema financeiro nacional. Ainda assim, muitos investidores compram títulos sem entender suas regras básicas. Em tempos de incerteza fiscal e inflacionária em 2025, o comportamento das taxas de juros no Brasil impõe escolhas criteriosas.

Felipe, um engenheiro civil de 38 anos, decidiu que era o momento de planejar a faculdade dos seus dois filhos pequenos. Ele colocou R$ 30.000,00 em um título Prefixado de longo prazo simplesmente porque achou a taxa anunciada atrativa. Um ano depois, a inflação subiu, o Banco Central elevou os juros e Felipe precisou de parte do dinheiro para uma reforma na casa. Ao resgatar, assustou-se: o valor de resgate estava menor do que o capital investido original de R$ 30.000. O que aconteceu com ele tem nome técnico: marcação a mercado.

## A Importância do Horizonte Temporal
Para investir sem surpresas, o seu horizonte de investimento deve ditar o título escolhido. O Tesouro Direto é dividido em três grandes famílias com funcionamentos radicalmente diferentes:

1. **Os Títulos Pós-fixados (Tesouro Selic):** São atrelados diretamente ao patamar diário dos juros brasileiros. Seu rendimento acompanha a variação do CDI e da Selic de forma contínua. Por não estarem sujeitos a grandes variações de valor patrimonial negativo, são o único porto adequado para dinheiro de curto prazo, de onde vêm as reservas de segurança.
2. **Os Títulos Híbridos (Tesouro IPCA+):** Pagam uma taxa prefixada fixa somada à variação da inflação medida pelo IPCA (Índice de Preços ao Consumidor Amplo). São o porto ideal para a preservação do poder de compra no longuíssimo prazo. Se você investe com um prazo superior a cinco anos, precisa de proteção contra a espiral inflacionária que corrói o dinheiro no colchão.
3. **Os Títulos Prefixados (Tesouro Prefixado):** Definem, no ato da compra, a taxa exata que você receberá ao término do contrato. Se o título oferece 11% ao ano, você receberá exatamente 11% ao ano, nem um centavo a mais ou a menos. No entanto, se a inflação subir e ultrapassar esse valor de 11%, você sairá perdendo na rentabilidade líquida real.

## Escolhendo por Perfil de Necessidade
O planejamento financeiro começa com o diagnóstico da reserva pessoal. Se você não possui de seis a doze meses de despesas mensais custeadas em ativos totalmente líquidos, sua única escolha viável é o **Tesouro Selic 2029** ou **Tesouro Selic 2026** (com vencimentos mais curtos). Ele garante liquidez diária nacional (você pede o resgate num dia útil e o dinheiro cai na sua conta corrente no dia útil seguinte) sem risco de desvalorização abrupta do principal.

Por outro lado, imagine que você já tenha essa reserva assegurada e queira construir seu colchão de aposentadoria para daqui a 15 anos. Escolher o Tesouro Selic aqui pode ser um erro silencioso: se os juros globais caírem, seu rendimento diminui no futuro. Nesse momento de longo prazo, o ideal é o **Tesouro IPCA+**. Ele mitiga o risco inflacionário garantindo que seu dinheiro sempre crescerá acima do índice de preços oficial, gerando aumento real de patrimônio líquido de longo prazo.

## Cuidados Práticos com a Marcação a Mercado
É importante entender os pormenores operacionais. Quando o Banco Central sobe a taxa básica de juros de mercado, a rentabilidade dos novos títulos emitidos fica maior. Com isso, os títulos de vencimentos longos mais antigos (que pagavam taxas prévias menores) sofrem uma redução em seus valores de mercado imediatos para continuarem competitivos para os compradores na mesa de negociações.

Se você resgatar esses papéis no mercado secundário antes do tempo, será obrigado a vendê-los por esse valor reduzido, consumando o prejuízo financeiro sofrido por Felipe no nosso exemplo inicial. Portanto, a regra de ouro do Tesouro Direto é clara: se comprar títulos prefixados ou IPCA+, faça-o planejando manter os papéis exatamente até a data de vencimento preestabelecida no contrato inicial. No dia do vencimento, o governo honrará rigorosamente a taxa acordada de forma matemática.`
  },
  {
    id: 2,
    slug: 'regra-dos-50-30-20-metodo',
    title: 'Regra dos 50/30/20: O método que pode transformar suas finanças em 90 dias',
    subtitle: 'Simplifique seu orçamento mensal sem planilhas complexas ou restrições extremas e crie consistência nos aportes',
    category: 'financas_pessoais',
    excerpt: 'Quem nunca desistiu de controlar as despesas após duas semanas preenchendo uma planilha confusa? A regra dos 50/30/20 propõe um sistema simples por percentuais que traz foco ao que realmente importa: pagar suas despesas fixas, ter lazer e garantir o amanhã de forma automática.',
    authorId: 'mariana_rocha',
    date: '18 de Maio de 2026',
    readTime: 5,
    views: 5210,
    likes: 388,
    isSecondaryFeatured: true,
    keyPoints: [
      'Separe suas finanças em apenas três grandes categorias: Essencial, Estilo de Vida e Futuro.',
      'A alocação de 50% para necessidades básicas evita o endividamento estrutural crônico das famílias.',
      'Sua vida de hoje importa: 30% reservado para lazer e estilo de vida garante a sustentabilidade do orçamento.',
      'O investimento de 20% deve ser feito logo no início do mês (método "pague-se primeiro").'
    ],
    tableData: {
      headers: ['Categoria', 'Percentual', 'Exemplos Práticos', 'Como Controlar'],
      rows: [
        ['Necessidades (Essencial)', '50% máximo', 'Aluguel, plano de saúde, supermercado, luz e água', 'Débito automático e revisão de tarifas'],
        ['Desejos (Estilo de Vida)', '30% máximo', 'Jantares, assinaturas de streaming, vestuário, barbearia', 'Limite rígido no cartão ou conta separada'],
        ['Prioridades (Investimentos)', '20% mínimo', 'Aportes, pagamento de dívidas antigas, previdência', 'Pague-se primeiro assim que receber o salário']
      ],
      caption: 'Distribuição sugerida nos limites da regra dos 50/30/20'
    },
    content: `Gerenciar despesas não precisa ser sinônimo de sofrimento ou planilhas pesadas. A principal queixa que recebo em meu consultório de planejamento financeiro é a fadiga da ferramenta de controle. As pessoas anotam até o cafezinho do meio da tarde no celular e, em menos de um mês, sentem-se esgotadas e retornam aos antigos hábitos de consumo compulsivos ou impulsivos. 

Fernanda, uma jovem profissional de publicidade de 27 anos, sentia essa frustração de forma aguda. Com uma renda mensal líquida de R$ 4.500,00, ela sentia que o dinheiro simplesmente escorria pelos dedos sem que acumulasse qualquer patrimônio. O método dos 50/30/20 mudou sua visão ao dar restrições claras por blocos de uso de recursos em vez de caixas fragmentadas de despesas.

## Os Três Pilares Orçamentários
Este método, popularizado pela senadora norte-americana Elizabeth Warren durante estudos sobre as causas de falência de famílias de classe média, divide sua receita líquida em apenas três grupos amplos:

### 1. 50% para as Necessidades Básicas (Essenciais)
Aqui entram todos os gastos vitais, ou seja, aquelas despesas sem as quais você não consegue sobreviver ou trabalhar. Aluguel ou prestação da casa, condomínio, contas de consumo de luz e água, transporte para o trabalho, plano médico básico e compras essenciais de supermercado. O teto máximo ideal para esse bloco deve ser de metade da sua renda.

Se o seu custo essencial consome 65% ou 70% de tudo o que você ganha, esse é o indicador mais alarmante de que seu padrão de vida atual está desalinhado da sua realidade financeira atual. Você estará eternamente em risco grave se qualquer imprevisto médico, profissional ou familiar cruzar seu caminho.

### 2. 30% para Desejos Pessoais (Estilo de Vida)
O grande diferencial da regra dos 50/30/20 é de que ele reconhece que as pessoas precisam de entretenimento e experiências sociais para continuarem produtivas e saudáveis. Os gastos com jantares fora de casa aos finais de semana, cinema, academia sofisticada, viagens, presentes para familiares e assinaturas de lazer digital como Netflix integram esse grupo.

Isolar esses gastos a um teto específico de 30% impede que despesas variáveis dominem o orçamento de forma descontrolada através de cobranças invisíveis no parcelamento de compras supérfluas no cartão de crédito comercial.

### 3. 20% para o Futuro e Quitação de Dívidas (Prioridades)
A última fatia de 20% não é o que sobra, mas sim o seu primeiro compromisso pessoal do mês. O seu eu do futuro precisa de estabilidade. Esse percentual deve ser dedicado a construir a sua reserva financeira de segurança, investir em títulos para a sua aposentadoria ou pagar parcelas pendentes para a quitação total de juros e endividamentos antigos.

## Aplicando na Prática sem Fadiga
O segredo da aplicação consolidada nos primeiros 90 dias reside na automatização bancária. No primeiro dia após receber seu pagamento salarial líquido, transfira imediatamente os 20% diretamente para sua conta de investimentos separada. Não espere fechar as faturas de despesas cotidianas para verificar quanto restará; se você deixar por último, historicamente descobrirá que o saldo restante será nulo.

A partir desse ponto, organize suas necessidades. O controle dos desejos pode ser simplificado dividindo-se o saldo livre correspondente aos 30% em quatro cotas semanais idênticas. Se você sabe que tem R$ 300,00 semanais para gastar livremente com restaurantes e lazer, seu cérebro adquire um controle visual físico instantâneo muito mais fácil do que preencher aplicativos móveis todas as noites. Fernanda alcançou sua independência financeira com essa simetria.`
  },
  {
    id: 3,
    slug: 'dividendos-ou-crescimento-estratega',
    title: 'Dividendos ou crescimento: Qual estratégia de investimento faz mais sentido?',
    subtitle: 'Analise as vantagens de investir em grandes pagadoras de proventos ou buscar a valorização de ações de alto potencial',
    category: 'investimentos',
    excerpt: 'Criar uma carteira de renda passiva ou apostar em empresas que reinvestem tudo no próprio negócio para crescer aceleradamente? Entenda os conceitos por trás das duas correntes mais fortes e consolidadas de investimentos em ações de empresas brasileiras.',
    authorId: 'thiago_silva',
    date: '10 de Maio de 2026',
    readTime: 7,
    views: 4120,
    likes: 295,
    keyPoints: [
      'Empresas focadas em dividendos pertencem a setores maduros de baixo crescimento, como energia elétrica e saneamento.',
      'Estratégia de crescimento foca em ações de alto beta que podem se valorizar consideravelmente com o reinvestimento de lucros futuros.',
      'Os dividendos no Brasil ainda contam com isenção fiscal parcial de imposto de renda, o que potencializa os juros compostos.',
      'Equilibrar ambas as abordagens cria uma carteira resiliente capaz de resistir aos períodos turbulentos e de juros altos.'
    ],
    content: `No mercado de ações no Brasil, duas escolas de investidores debatem constantemente sobre qual abordagem traz a maior taxa de retorno financeiro de longo prazo para uma carteira individual de pessoa física: focar prioritariamente no recebimento de dividendos e juros sobre capital próprio (JCP) ou buscar companhias de rápido crescimento exponencial que retêm o lucro do exercício para comprar outros ativos industriais ou expandir fábricas de produção tecnológica.

Para entender qual atende melhor ao seu plano, é preciso examinar as matrizes de governança operacional de cada tipo de modelo de sociedade anônima listada na nossa bolsa de valores (B3).

## O Motor do Dividend Investing
A tese de investimentos baseada em proventos (Renda Passiva) mira empresas que alcançaram a fase de maturidade em seus respectivos modelos de negócios. São companhias que já dominam seus mercados geográficos, exigem poucas inversões de capital para manter suas estruturas rodando e atuam em setores de demanda altamente perene e previsível. Excelentes exemplos residem nos setores de transmissão de energia elétrica (como Taesa e Alupar), saneamento (como Sabesp e Copasa) e grandes bancos centrais (como Itaú e Banco do Brasil).

Como esses negócios já atingiram a liderança mercadológica, reinvestir 100% dos bilhões faturados não traria retorno adicional expressivo. Portanto, distribuem a maior fração possível do lucro líquido aos acionistas comerciais (processo determinado pelo indicador *Payout*). A grande vantagem para o pequeno investidor é ver dinheiro real cair trimestralmente ou semestralmente na conta corrente da corretora, possibilitando que ele compre novas ações do próprio bolso e crie o ciclo de acumulação de juros sobre juros sem precisar desinvestir suas posições iniciais.

## O Modelo de Crescimento (Growth Investing)
Do outro lado da mesa, temos as chamadas "empresas de crescimento" ou Growth stocks. Essas companhias atuam em setores de inovação acelerada, e-commerce, saúde, tecnologia financeira ou varejo intensivo de expansão geográfica. Elas buscam reter a totalidade de suas margens de lucro líquidos para expandir as operações para outros estados, investir em equipes de pesquisa de software ou adquirir concorrentes menores de mercado.

Se uma empresa desse perfil tem a oportunidade de reinvestir R$ 1,00 dentro da sua própria operação com um retorno anual de 25%, distruibuir esse mesmo R$ 1,00 ao acionista sob a forma de dividendo comum seria uma alocação financeira ineficiente. A compensação para quem segura essas ações vem no formato de valorização contínua das cotações em si no painel do home broker da bolsa. A desvantagem evidente reside na forte turbulência financeira: se os termos macroeconômicos globais apertarem ou a taxa Selic se mantiver alta demais, o endividamento corporativo para sustentar esse crescimento acelerado poderá cobrar um preço alto das ações desse segmento.

## Afinal, Qual Delas Adotar em 2025?
Sua idade corporal e urgência patrimonial devem ditar as porcentagens da carteira de ações de valor. Ricardo, de 58 anos, que pretende se aposentar nos próximos três ou quatro anos, precisa de estabilidade de fluxo de caixa operacional periódico imediato. Concentrar sua carteira em empresas com alto rendimento de dividendos líquidos (*Dividend Yield*) blinda suas contas domésticas e previne que ele tenha que vender pedaços da carteira física no mercado secundário durante uma crise temporária generalizada para cobrir suas despesas de vida doméstica.

Já Amanda, uma jovem universitária e interna hospitalar de 24 anos com um horizonte econômico de 30 anos pela frente, pode suportar flutuações patrimoniais severas na carteira de investimentos. Ela obterá maiores benefícios no acúmulo de empresas inovadoras de crescimento sólido, que gradualmente amadurecerão até se transformarem nas grandes pagadoras de dividendos de amanhã.`
  },
  {
    id: 4,
    slug: 'selic-na-economia-investimentos',
    title: 'Selic a 10,75%: O que isso significa para seus investimentos e financiamentos',
    subtitle: 'Navegue pelos impactos diretos da taxa básica de juros da economia brasileira na sua carteira de investimentos',
    category: 'economia',
    excerpt: 'Quando o COPOM deita a caneta e define a taxa de juros referencial Selic do Brasil, o reflexo financeiro atinge imediatamente desde a rentabilidade da sua poupança até o custo do financiamento imobiliário e as parcelas dos cartões de crédito. Compreenda o fluxo desses vetores.',
    authorId: 'carlos_malta',
    date: '04 de Maio de 2026',
    readTime: 6,
    views: 4560,
    likes: 312,
    keyPoints: [
      'Entenda como a Selic é a âncora usada pelo Banco Central do Brasil para domar a inflação interna de curto prazo.',
      'Sua caderneta de Poupança sofre limitação automática de rentabilidade quando a taxa e os juros caem abaixo de 8,5%.',
      'O cenário de juros altos incentiva o investidor a manter o patrimônio na Renda Fixa clássica (CDBs e Tesouro).',
      'Taxas de crédito comercial e financiamento habitacional sofrem reajustes em cascata após repasses interbancários.'
    ],
    content: `As discussões sobre taxa básica de juros podem muitas vezes soar burocráticas ou distantes das necessidades cotidianas das famílias brasileiras, mas a verdade é que nenhuma decisão do cenário econômico afeta de forma tão rápida e direta o seu bolso quanto a fixação da taxa Selic promovida pelo Comitê de Política Monetária (COPOM).

A Selic é a abreviação do Sistema Especial de Liquidação e de Custódia, sendo usada pelas instituições financeiras brasileiras para lastrear os empréstimos diários firmados por bancos comerciais garantidos por títulos federais emitidos. Numa economia de mercado, a Selic assume o papel de matriz elementar de todos os juros praticados nos contratos de balanço geral.

## O Cabo de Guerra: Selic x Inflação (IPCA)
Por trás da oscilação dos juros básicos, opera uma dinâmica econômica crucial. Quando a economia brasileira se aquece com excesso de canais de circulação de moeda física e a inflação oficial (IPCA) dispara, o Banco Central é instigado a subir as taxas de juros básicas nacionais. Ao encarecer o custo de captação de recursos financeiros de crédito, o governo desestimula despesas domésticas gerais de alto parcelamento, reduz o consumo físico médio de automóveis novos ou bens duráveis industriais e traz equilíbrio aos índices de preços gerais de varejo.

Por outro lado, se a inflação se estabilizar de forma consistente próximo das metas anuais fixadas e o crescimento industrial e de comércio desacelerar, o COPOM inicia o ciclo oposto: cortes na taxa Selic para reaquecer e injetar energia no consumo corporativo nacional e pessoal.

## O Reflexo Direto na Renda Fixa e Variável
Com uma taxa Selic estabilizada em patamares robustos, a Renda Fixa do Brasil oferece um banquete de juros fácil ao poupador médio. Títulos tradicionais como CDBs pós-fixados, LCIs da construção civil e o clássico Tesouro Selic pagam rendimentos fáceis, livres da típica volatilidade das ações e de fundos de investimento. 

Esse fenômeno atua como um aspirador de pó no mercado doméstico de capitais de risco: os fundos imobiliários e os ativos empresariais sofrem pressão técnica, pois os poupadores preferem as taxas fixas livres de riscos flutuantes. Já quando ocorre o oposto, e a Selic sofre severos cortes subsequentes, a corrida no sentido oposto reinicia: os rendimentos da renda fixa caem e as pessoas são forçadas a entrar na tomada de risco na B3 se quiserem lucros acima da inflação anual acumulada de longo prazo.

## O Custo do Crédito Humano e do Financiamento Habitacional
O impacto de uma taxa Selic se mostra sensível no lado dos empréstimos estudantis, pessoais ou imobiliários. Os bancos comerciais de varejo baseiam o preço final de captação e transferência de risco de capital (como o financiamento de casas próprias indexado ao Sistema de Financiamento da Habitação - SFH) nos juros interbancários correntes.

Para uma família tentando comprar um lote ou apartamento residencial, o reflexo de aumentos nas taxas contratuais eleva o valor fixo das parcelas em centenas de reais mensais ao longo de 30 anos, inviabilizando decisões imobiliárias ou exigindo maior acúmulo prévio na economia para a entrada básica, obrigando o cidadão comum a planejar minuciosamente o calendário desses reajustes estruturais.`
  },
  {
    id: 5,
    slug: 'fiis-tudo-sobre-fundos-imobiliarios',
    title: 'FIIs: Tudo que você precisa saber antes de investir em fundos imobiliários',
    subtitle: 'Torne-se sócio de shopping centers, condomínios logísticos e prédios comerciais pagando a partir de R$ 10',
    category: 'investimentos',
    excerpt: 'Quem nunca pensou em viver da renda de aluguel de imóveis? Embora a compra tradicional de tijolo exija centenas de milhares de reais e envolva impostos e inadimplência de inquilinos, os fundos imobiliários oferecem excelente fracionamento físico e isenção fiscal mensal real.',
    authorId: 'thiago_silva',
    date: '30 de Abril de 2026',
    readTime: 6,
    views: 3890,
    likes: 271,
    keyPoints: [
      'Os FIIs reúnem recursos de diversos investidores para comprar, administrar e alugar propriedades de alta escala.',
      'Diferente do imóvel físico, os rendimentos distribuídos mensalmente aos cotistas pessoas físicas são isentos de imposto de renda.',
      'Você pode investir em Fundos de Tijolo (imóveis reais) ou Fundos de Papel (títulos de dívida imobiliária como CRIs).',
      'A liquidez dos fundos na bolsa permite o resgate de frações do seu investimento em poucos segundos.'
    ],
    content: `Comprar um imóvel residencial tradicional com o objetivo de obter renda de aluguel já figurou como tese preferencial da totalidade dos investidores brasileiros do último século. No entanto, na realidade urbana contemporânea de 2025, os custos incidentes no registro de escrituras públicas de cartório, IPTU excessivo de vacância de locatário, reformas imprevistas nas tubulações internas e problemas jurídicos com locatários inadimplentes tornaram essa rota custosa e ineficiente para as finanças domésticas do dia a dia.

A democratização do mercado imobiliário brasileiro moderno opera por meio de uma sigla simples com ampla adesão social: os FIIs (Fundos de Investimento Imobiliário).

## O Que São e Como Funcionam os FIIs?
Um fundo imobiliário opera de forma bastante análoga a uma cooperativa de investidores. Uma gestora de recursos financeiros devidamente credenciada e fiscalizada pela CVM faz o escaneamento técnico de propriedades que seriam completamente inacessíveis ao patrimônio individual comum, tais como robustos shopping centers das metrópoles, extensos galpões de distribuição logística de gigantes de tecnologia como a Amazon, ou andares de escritórios corporativos premium de centros comerciais como os localizados na Avenida Faria Lima em São Paulo.

O fundo capta dinheiro emitindo pequenas fatias societárias chamadas de "cotas" de investimentos, que são livremente comercializadas no mercado de balanço da bolsa de valores local. Se o investidor possui apenas R$ 100,00 ou R$ 150,00 poupados de sobressalente salarial no mês, ele consegue instantaneamente comprar uma cota e adquirir uma porção societária direta desses gigantescos complexos imobiliários do setor.

## Divisão de Receitas e Isenção Tributária
Por determinação de regras legais brasileiras instituídas, os fundos são obrigados a distribuir semestralmente, no mínimo, 95% do lucro líquido contábil gerado no aluguel desses prédios diretamente aos cotistas reguladores de forma mensal. Na prática brasileira corriqueira, essa distribuição é operacionalizada eletronicamente de forma mensal direto no caixa do investidor pessoa física.

O grande atrativo gerador de fluxo de caixa passivo mensal reside na **isenção absoluta de imposto de renda** retido na fonte nos rendimentos líquidos de aluguel tributados para pessoas físicas (desde que atendidos os requisitos simples de fracionamento das cotas no fundo), o que confere enorme vantagem matemática imediata aos FIIs frente à tributação progressiva imposta à locação convencional física de imóveis residenciais.

## Tipos e Abordagens de Fundos
O investidor iniciante precisa diferenciar as duas bases fundamentais desses veículos de investimentos para diversificar sem expor perigosamente as suas economias:

1. **Fundos de Tijolo:** Composto por galpões logísticos, torres comerciais corporativas e de hotéis, hospitais de alta tecnologia e shoppings. O rendimento acompanha diretamente os contratos de locação física assinados com as multinacionais locatárias.
2. **Fundos de Papel:** Investem em títulos de crédito de fomento de dívidas imobiliárias estruturadas como os CRIs (Certificados de Recebíveis Imobiliários). Eles distribuem juros e índices inflacionários atrelados ao CDI ou IPCA. Embora ofereçam comumente taxas de dividendos imediatas mais elevadas, não se beneficiam de valorização imobiliária estrutural física dos imóveis na terra ao longo das décadas ocorridas no país. Ricardo obteve retornos equilibrados com essa clareza estratégica.`
  },
  {
    id: 6,
    slug: 'como-sair-das-dividas-bola-de-neve',
    title: 'Como sair das dívidas em 12 meses com o método da bola de neve',
    subtitle: 'Adote uma estratégia psicológica cientificamente comprovada para eliminar pendências financeiras passo a passo',
    category: 'financas_pessoais',
    excerpt: 'Lidar com juros de rotativos do cartão de crédito ou cheque especial pode paralisar as decisões diárias de uma família. Aprenda a estruturar o método de amortização comportamental focado em pequenas vitórias que mantém sua mente produtiva e sem fadiga acelerada.',
    authorId: 'mariana_rocha',
    date: '20 de Abril de 2026',
    readTime: 5,
    views: 4980,
    likes: 356,
    keyPoints: [
      'O método Foco na Bola de Neve não foca na maior taxa de juros matemática, mas no comportamento psicológico.',
      'Enumere suas dívidas do menor saldo devedor nominal para o maior para focar em liquidações imediatas.',
      'A eliminação física de credores menores gera a liberação de dopamina necessária para manter a consistência financeira.',
      'Direcione de forma agressiva as pequenas economias mensais para um único credor de cada vez durante o plano.'
    ],
    content: `O tormento das pendências financeiras não se encerra apenas com as ligações incômodas de cobranças de telemarketing. A verdadeira erosão ocorre na saúde mental do indivíduo devedor. Famílias inteiras sofrem rupturas de convívio social, as noites de sono são prejudicadas e a produtividade no trabalho diminui significativamente quando há descontrole com os limites de linhas de crédito comercial de curto prazo no Brasil.

Embora especialistas matemáticos puros preguem constantemente que o investidor devedor deva priorizar pagar primeiro a dívida que ostenta a maior taxa anual nominal de juros pactuada (método conhecido comercialmente como Avalanche), a ciência do comportamento humano demonstra que quase ninguém consegue sustentar esse comportamento por longos prazos sem vitórias práticas palpáveis.

## A Física Psicológica do Método Bola de Neve
Desenvolvido por analistas de hábitos e conselhos domésticos nos Estados Unidos, o método conhecido como **Bola de Neve** joga as planilhas puras para segundo plano e prioriza o comportamento e estímulos cerebrais do devedor humano. 

João, de 32 anos de idade, possuía quatro faturas pendentes de natureza diversa que totalizavam R$ 18.000,00 de endividamento. O método clássico disse para liquidar primeiro o empréstimo pessoal com taxa agressiva, mas o saldo devedor lá era de R$ 12.000, e ele levaria quase um ano apenas para encerrar essa única caixa de devedor. Ele sentia-se desanimado e acabava fazendo novas compras. Com o método Bola de Neve, João organizou as despesas assim:

1. **Dívida A (Lojas de Departamento):** R$ 450,00 de saldo nominal.
2. **Dívida B (Cartão de Crédito Varejo):** R$ 1.800,00 de saldo nominal.
3. **Dívida C (Cheque Especial de Banco):** R$ 3.500,00 de saldo nominal.
4. **Dívida D (Empréstimo Pessoal antigo):** R$ 12.250,00 de saldo nominal.

## O Passo a Passo da Implementação do Plano
O plano inicia com um mapeamento visual simples. Em uma folha de papel ou arquivo eletrônico básico, liste todas as suas dívidas ativas ordenadas rigidamente pelo valor total imediato do saldo devedor da conta do menor para o maior, independentemente de saber se as taxas de juros incidentes nelas são elevadas ou não.

A partir desse mapeamento, as regras do método se dividem em duas ordens de decisão operacional:

### Pague o Mínimo de Todos
Mantenha os pagamentos mínimos obrigatórios das contas B, C e D em dia para impedir que novos processos judiciais ou protestos paralisem a emissão de novos documentos de trânsito ou seu trabalho. Isso mantém sua conta corrente regularizada perante cadastros governamentais básicos de crédito.

### Jogue Toda a Força Residual no Menor Alvo
Pegue todo o excedente financeiro disponível poupado na sua economia familiar (por meio do orçamento dos 50/30/20 ou vendas de utensílios que não use) e direcione com máxima agressividade para liquidar integralmente e o mais rápido possível a **Dívida A** (o menor saldo nominal físico de R$ 450,00).

## O Efeito Cascata Motivacional
Em poucas semanas, você receberá a confirmação física de que a Dívida A de R$ 450,00 foi integralmente quitada e riscada do mapa da sua vida de uma vez por todas. Menos um credor fazendo ligações diárias; menos uma pendência pesando na planilha. Essa vitória inicial rápida libera dopamina real na mente humana do poupador em recuperação.

Ao apagar o menor débito, use todo o valor que você gastava no pagamento dessa Dívida A de forma mensal cumulada e some-o à parcela básica mensal que você destinava para a amortização da **Dívida B**. O seu pagamento para a Dívida B agora será consideravelmente maior, acelerando em formato geométrico a sua quitação — como uma pequena bola de neve descendo a montanha que ganha tamanho, velocidade e força esmagadora a cada metro adicional percorrido, limpando o seu horizonte financeiro familiar.`
  },
  {
    id: 7,
    slug: 'cdb-lci-lca-guia-renda-fixa-2025',
    title: 'CDBs vs LCIs vs LCAs: O guia definitivo para renda fixa em 2025',
    subtitle: 'Compreenda as regras de tributação do imposto de renda e o papel do FGC para potencializar seu caixa básico',
    category: 'financas_pessoais',
    excerpt: 'Muitos poupadores perdem dinheiro deixando o caixa na caderneta de poupança acreditando que a isenção de imposto de renda compensa tudo. Aprenda a comparar de forma matemática o retorno líquido real de papéis privados bancários de liquidez garantida pelo FGC.',
    authorId: 'carlos_malta',
    date: '15 de Abril de 2026',
    readTime: 6,
    views: 4190,
    likes: 298,
    keyPoints: [
      'CDBs emitem captações básicas gerais para bancos comerciais e contam com incidência regressiva de imposto de renda.',
      'LCIs e LCAs são ativos de crédito lastreados em setores vitais imobiliários e agrícolas da nação.',
      'A isenção fiscal presente nas LCIs e LCAs exige cálculos comparativos para determinar a melhor taxa de rentabilidade equivalente.',
      'A proteção soberana e integral correspondente ao Fundo Garantidor de Créditos blinda o seu caixa até limites de R$ 250 mil por instituição.'
    ],
    tableData: {
      headers: ['Papel de Renda Fixa', 'Incidência de IR', 'Liquidez Comum', 'Setor Fomentado', 'Retorno Equivalente CDB 100% CDI'],
      rows: [
        ['CDB Pós-Fixado', 'Tabela regressiva 22.5% a 15%', 'Frequentemente diária no varejo', 'Captação e empréstimos livres do banco', '100% do CDI nominal'],
        ['LCI (Imobiliário)', 'Isento de IR para Pessoa Física', 'Mínimo de 9 meses após emissão', 'Financiamento imobiliário nacional', '~82.5% do CDI líquido de IR'],
        ['LCA (Agronegócio)', 'Isento de IR para Pessoa Física', 'Mínimo de 9 meses após emissão', 'Custos de colheita e agropecuária', '~82.5% do CDI líquido de IR']
      ],
      caption: 'Matriz comparativa de ativos básicos de renda fixa do Brasil em 2025'
    },
    content: `A caderneta de poupança clássica no Brasil vem sofrendo uma perda gradativa de capital de investidores conscientes. Diante da inflação real medida pelos preços do supermercado comum de varejo alimentar, deixar o dinheiro poupado na caderneta se traduz em perda de poder de compra mensurável a cada fechamento de balanço trimestral. Ainda assim, o investidor iniciante costuma travar na escolha dos investimentos privados alternativos de renda fixa por desconhecer seus funcionamentos fiscais internos.

Para estruturar um dinheiro de caixa ou projeto com segurança corporativa igualitária à poupança, você precisa compreender esses três papéis emitidos por instituições bancárias estruturadas no Brasil.

## O Que São os CDBs?
CDB significa Certificado de Depósito Bancário. Trata-se, de forma direta, de um contrato de empréstimo financeiro onde você empresta seu dinheiro poupado a um banco comercial e, em contrapartida, esse banco se compromete a devolver o capital original somado a uma remuneração preestabelecida de juros no ato das negociações operacionais.

Os CDBs são comumente ofertados de forma indexada ao CDI (Certificado de Depósito Interbancário, taxa muito próxima à Selic). O rendimento líquido dos CDBs sofre tributação de imposto de renda de tabela regressiva que reduz consideravelmente de acordo com o tempo decorrido de aplicação:

- **Até 180 dias:** Alíquota máxima de 22,5% do ganho real.
- **De 181 a 360 dias:** Alíquota de 20% do ganho real.
- **De 361 a 720 dias:** Alíquota de 17,5% do ganho real.
- **Acima de 720 dias:** Alíquota mínima consolidada de 15% do ganho real.

## O que são as LCIs e LCAs?
Siglas para Letras de Crédito Imobiliário e Letras de Crédito do Agronegócio, de forma correlativa. São emitidos pelos mesmos bancos comerciais, mas o dinheiro captado nessas letras é carimbado por lei para custear obrigatoriamente financiamentos habitacionais de loteamentos urbanos ou custeio de colheitas de maquinários no campo brasileiro de exportações agrícolas.

Como o Governo Federal possui enorme interesse em incentivar projetos desses dois setores estruturais do Brasil, ele oferece um generoso estímulo ao investidor final personificado na **isenção absoluta de imposto de renda retido na fonte** sobre os rendimentos para pessoas físicas.

## A Matemática do Retorno Equivalente
A abundância de isenção de imposto de renda faz muitos caírem na tentação de investir em qualquer taxa anunciada de LCI. Entretanto, juros baixos em LCIs podem de fato render menos que um CDB que sofra incidência fiscal se os prazos forem muito curtos de aplicação.

A fórmula base para comparar se vale a pena comprar uma LCI ou um CDB pós-fixado é converter as porcentagens utilizando o fator de desconto de IR:

$$\\text{Taxa Equivalente do CDB} = \\frac{\\text{Taxa Líquida da LCI/LCA}}{1 - \\text{Alíquota do IR para o Prazo}}$$

Se você tem planos de deixar o dinheiro poupado guardado por mais de dois anos, a alíquota do CDB de incidência seria da classe mínima de 15%. Se houver no mercado de investimentos uma LCA que ofereça 85% do CDI líquido, a conta matemática seria: 85% divididos por 0,85, resultando em 100% de parâmetro nominal de CDI de equivalência total de retorno. Se as ofertas de CDBs de varejo forem de taxas na base de 115% ou 120% do CDI, o CDB de fato será o grande vencedor contábil, mostrando que a isenção de imposto de renda de investimentos por si só nunca justifica aportes impensados de capitais.`
  },
  {
    id: 8,
    slug: 'previdencia-privada-pgbl-vgbl',
    title: 'Previdência Privada PGBL ou VGBL: Qual é mais vantajosa para você?',
    subtitle: 'Evite o ralo fiscal na sua declaração anual do Imposto de Renda e escolha o plano correto para sua renda anual',
    category: 'patrimonio',
    excerpt: 'Se você faz a declaração completa simplificada no Imposto de Renda anual, cometer um erro simples na seleção do plano de previdência complementar trancado no banco corporativo comum pode anular qualquer ganho de médio prazo. Saiba como escolher bem o seu plano.',
    authorId: 'mariana_rocha',
    date: '10 de Abril de 2026',
    readTime: 7,
    views: 3120,
    likes: 215,
    keyPoints: [
      'O plano PGBL permite deduzir até 12% da sua renda bruta tributada se você declara no modelo Completo.',
      'O plano VGBL incide tributação final apenas no ganho de capital líquido acumulado do fundo, ideal para o modelo Simplificado.',
      'Defina se adota a tabela de tributação regressiva ou progressiva de acordo com sua data de planejamento de aposentadoria futura.',
      'Previdência não é apenas para idosos: é uma ferramenta contemporânea ágil para eficiência de herança patrimonial.'
    ],
    content: `O debate nacional sobre aposentadoria estruturada no sistema público (INSS) vem causando ansiedade nas novas turmas de trabalhadores assalariados domésticos de carteira assinada. Com regras de idade mínima e tempo contributivo progressivas de reajustes do teto de tese oficial de subsistência de vida, planejar de forma complementar uma previdência de poupança própria se qualifica como comportamento urgente ao profissional maduro contemporâneo.

No entanto, o acesso aos planos de seguro complementar nos sistemas corporativos bancários apresenta um labirinto operacional de duas opções básicas com consequências profundas de eficiência tributária real: as siglas PGBL e VGBL.

## O Tesouro da Dedução no PGBL
PGBL significa Plano Gerador de Benefício Livre. A principal característica que define a sua superioridade fiscal em projetos residenciais de alta renda é o **abatimento fiscal imediato**. Se o investidor faz a declaração anual do Imposto de Renda (DIRPF) pelo modelo Completo, ele poderá aplicar no PGBL e deduzir o valor total correspondente a até 12% de toda a sua renda bruta anual tributada sob a sua conta pessoal.

Na prática operacional, se a pessoa fatura R$ 100.000,00 anuais de renda bruta de cargos operacionais e destina R$ 12.000,00 anuais ao PGBL doméstico, a Secretaria da Receita Federal cobrará o imposto de renda com incidência restrita à base reduzida de R$ 88.000,00, gerando uma restituição robusta de dinheiro físico no caixa de milhares de reais no calendário seguinte para ser reinvestido com agressividade em novos aportes.

## A Grande Pegadinha do PGBL no Resgate
Embora a isenção de pagamento parcial temporária seja excelente, a cobrança se dará integralmente no dia do término do contrato de investimentos. No momento em que você começar a retirar suas mensalidades futuras no PGBL, as alíquotas do imposto de renda incidirão sobre a **totalidade do saldo acumulado do fundo de reservas** (o capital original que você aplicou somado ao ganho real gerado no mercado).

Por isso, se você não faz a declaração pelo modelo Completo anual, contratar oPGBL é considerado um grande ralo contábil pessoal e o principal pesadelo fiscal do cidadão desatento.

## A Rota do VGBL para Profissionais Liberais
O VGBL (Vida Gerador de Benefício Livre) é estruturado juridicamente como um seguro pessoal de acumulação coletiva. Nesses planos, você não deduz absolutamente nada da declaração do seu imposto de renda comum na fase imediata de aportes de reservas.

Em compensação a essa restrição inicial, a tributação de resgate futuro no VGBL será imposta **única e exclusivamente sobre os lucros e rendimentos de investimentos** que as suas reservas financeiras gerarem sob custódia das mesas operacionais, preservando o valor original do seu capital poupado de qualquer bitributação regressiva posterior de heranças.

## Progressiva x Regressiva: A Escolha das Tabelas
Somando-se às regras estruturais de plano, você precisará arbitrar o funcionamento das diretrizes de tabelas de cobrança de alíquota no contrato de previdência:

- **Tabela Progressiva:** O imposto sobe com o valor total resgatado, chegando ao topo de 27.5% tributados de acordo com os limites tradicionais mensais nacionais já bem consolidados.
- **Tabela Regressiva:** Premia o poupador consistente por sua persistência operacional. As taxas sofrem quedas vigorosas a cada dois anos de carência de investimento, partindo da alíquota assustadora inicial de 35% nos primeiros meses, e despencando para a taxa final irrisória de apenas **10% retidos na fonte após decorridos dez anos** acumulados no plano de previdência complementares, superando qualquer fundo tradicional imobiliário ou de taxas multimercado no longo prazo nacional.`
  },
  {
    id: 9,
    slug: 'reserva-de-emergencia-quanto-guardar',
    title: 'Reserva de emergência: Quanto guardar e onde deixar esse dinheiro',
    subtitle: 'Construa o alicerce fundamental das suas decisões financeiras e durma com tranquilidade blindado contra imprevistos',
    category: 'financas_pessoais',
    excerpt: 'Antes de comprar qualquer ação na bolsa, investir em fundos imobiliários ou sonhar com as rentabilidades dos dividendos de empresas, você precisa formatar um porto seguro. Descubra como estruturar sua rede pessoal de resgate automático.',
    authorId: 'mariana_rocha',
    date: '02 de Abril de 2026',
    readTime: 5,
    views: 6130,
    likes: 489,
    keyPoints: [
      'A reserva de emergência é o alicerce absoluto de qualquer estabilidade psicológica e independência financeira.',
      'Trabalhadores CLT necessitam tipicamente de seis meses de custo fixo mensal poupados na reserva básica.',
      'Profissionais liberais e empreendedores exigem proteção de nove a doze meses de custo fixo por sua oscilação de receitas.',
      'Os ativos para alocação de reserva exigem restrição a risco de liquidez diária e volatilidade negativa nula.'
    ],
    content: `Muitas pessoas me procuram ansiosas para saber qual é a ação que vai dobrar de preço no próximo mês ou qual fundo imobiliário doméstico de alto rendimento pagará o rendimento mensal de maior dividend yield das telas operacionais da bolsa de valores brasileira. No entanto, em minhas consultas, minha primeira providência sempre consiste em fazer uma simples pergunta: "Se o seu carro quebrar amanhã, sua geladeira queimar de repente, ou se você sofrer uma demissão imprevista no emprego de forma sem aviso, qual é a origem imediata dos recursos para lidar com a surpresa?"

A resposta comum costuma ser o silêncio, seguido da admissão de uso de linhas de cheque especial em conta, empréstimo com parentes familiares próximos ou parcelamento em cartões comerciais a taxas abusivas corporativas.

## O Que É a Reserva de Emergência?
A reserva financeira pessoal de emergência não funciona para enriquecer rápido o poupador, e sim para impedir de forma soberana que ele empobreça repentinamente ou destrua o seu patrimônio financeiro em formação durante as naturais intempéries e turbulências do decorrer existencial cotidiano das pessoas físicas no Brasil.

Ela atua como uma robusta rede de segurança sob as suas decisões cotidianas de vida e de carreira bancárias. Sem uma reserva de emergência devidamente consolidada, o seu patrimônio recém-comprado em fundos imobiliários ou investimentos de longo prazo na B3 será rotineiramente vulnerável: na primeira emergência física médica ou de demissão pessoal, você será obrigado a resgatar suas posições longas a preços desvantajosos em um mercado turbulento de baixas de cotações periódicas.

## Qual Deve Ser o Tamanho do seu Seguro Pessoal?
O volume financeiro ideal a ser poupado depende de forma elementar do grau de estabilidade e previsibilidade de fluxo de caixa das suas receitas de trabalho e fontes geradoras domésticas de salários de proventos:

* **Para Trabalhadores CLT e Servidores Públicos:** O tamanho recomendado para o colchão de reservas deve cobrir rigorosamente de **seis meses das despesas mensais de vida essenciais calculadas** (conforme a regra 50/30/20 descrita). Como o funcionário CLT conta com rede de fomento legal mínima em caso de desligamento (como saque do FGTS, seguro-desemprego nacional e aviso prévio indenizado), meio ano de recursos financeiros garante excelente conforto para a recolocação.
* **Para Profissionais Autônomos, Liberais ou Empreendedores:** O volume deve abranger de **nove a doze meses de despesas fixas**. Sem os direitos tradicionais de segurança social e salário fixo garantidos por contratos duradouros do setor público, as oscilações de fluxo de caixa operacional corporativo ou de venda de serviços profissionais imprevistos no ano recomendam um colchão robustamente amplificado.

## Onde Deixar Esse Dinheiro em 2025?
O local de alocação física da reserva deve ser pautado rigidamente por duas características imutáveis, das quais o investidor comum nunca deve abrir mão em hipótese alguma na sua tomada de decisão operacional:

### 1. Volatilidade Nula (Preservação de Capital)
O dinheiro que você guarda na poupança clássica ou Tesouro Selic não pode sofrer oscilações negativas diárias. Se você precisa resgatar R$ 5.000 para pagar uma emergência médica, o patrimônio não pode estar com valor avaliado a mercado a R$ 4.200 simplesmente porque a taxa de juros do país subiu na véspera. O principal de capital inicial investido deve ser totalmente preservado.

### 2. Liquidez D+0 ou D+1 Absoluta (Acesso Rápido)
A emergência financeira não avisa horário e geralmente ocorre às sextas-feiras à noite ou nos finais de semana de feriados nacionais. Se as suas economias estiverem bloqueadas em um fundo multimercado dinâmico com regras de resgate que demoram 30 dias para liberar o dinheiro para a conta corrente (linguagem de mercado: D+30), a sua reserva falhou integralmente em sua meta física elementar imediata de resgates ágeis.

Os ativos ideais recomendados residem apenas no clássico e soberano **Tesouro Selic 2029** (com liquidez regulatória diária) operado de forma simplificada, ou em contas correntes de bancos líderes com rendimento automático de **100% do CDI** dotadas de liquidez diária automatizada na hora (para transferências rápidas por PIX em poucos segundos). Fuja de fundos complexos e foque na simplicidade.`
  }
];

export const SIMULATED_INDEX_RATES: IndexRate[] = [
  { name: 'Selic', value: '10,75%', change: '-0,25%', isPositive: false, description: 'Taxa básica de juros definida pelo COPOM' },
  { name: 'CDI', value: '10,65%', change: '-0,25%', isPositive: false, description: 'Referência de rentabilidade da renda fixa pós-fixada' },
  { name: 'IPCA', value: '3,93%', change: '+0,12%', isPositive: true, description: 'Inflação oficial acumulada útil dos últimos 12 meses' },
  { name: 'IBOVESPA', value: '128.450 pts', change: '+1,14%', isPositive: true, description: 'Índice de desempenho das principais ações da B3' },
  { name: 'Dólar Comercial', value: 'R$ 5,14', change: '-0,84%', isPositive: false, description: 'Cotação da moeda norte-americana frente ao Real' }
];
