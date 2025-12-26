import type { TestConfig } from "@shared/schema";

export const testData: TestConfig = {
  id: "default-test",
  title: "Fundamentos de Finanças Corporativas",
  description: "Avaliação sobre princípios fundamentais de Finanças Corporativas, análise financeira, rácios, e decisões de investimento. Teste seus conhecimentos em gestão financeira. Responda todas as 15 questões no tempo limite.",
  durationMinutes: 40,
  questions: [
    {
      id: 1,
      text: "O princípio económico 'Não há almoço grátis' está fundamentalmente associado à:",
      options: ["Existência de bens públicos fornecidos pelo Estado.", "Necessidade de escolha devido à escassez de recursos.", "Capacidade do governo de controlar a inflação."],
      correctOptionIndex: 1,
    },
    {
      id: 2,
      text: "Qual das seguintes áreas NÃO é considerada uma parte chave das Finanças conforme o módulo?",
      options: ["Finanças Públicas.", "Finanças Comportamentais.", "Finanças Corporativas."],
      correctOptionIndex: 1,
    },
    {
      id: 3,
      text: "O fenómeno de 'juros sobre juros', característico do Regime de Juros Compostos, é tecnicamente denominado:",
      options: ["Capitalização simples.", "Anatocismo.", "Desconto comercial."],
      correctOptionIndex: 1,
    },
    {
      id: 4,
      text: "Para uma estrutura financeira minimamente equilibrada, de acordo com a regra do equilíbrio financeiro mínimo, é condição que:",
      options: ["A Tesouraria Líquida seja positiva.", "O Fundo de Maneio (FM) seja maior ou igual a zero.", "A Necessidade de Fundo de Maneio (NFM) seja negativa."],
      correctOptionIndex: 1,
    },
    {
      id: 5,
      text: "Se o Rácio de Autonomia Financeira (RAF) de uma empresa for de 40%, isso significa que:",
      options: ["40% do ativo é financiado por capitais alheios.", "60% do ativo é financiado por capitais próprios.", "40% do ativo é financiado por capitais próprios."],
      correctOptionIndex: 2,
    },
    {
      id: 6,
      text: "As três decisões fundamentais da gestão financeira são:",
      options: ["Investimento, Produção e Marketing.", "Investimento, Financiamento e Dividendos.", "Contratação, Compra e Venda."],
      correctOptionIndex: 1,
    },
    {
      id: 7,
      text: "O Custo de Oportunidade representa:",
      options: ["O custo contabilístico de um investimento.", "O juro pago num empréstimo bancário.", "O valor da melhor alternativa sacrificada ao se fazer uma escolha."],
      correctOptionIndex: 2,
    },
    {
      id: 8,
      text: "A principal diferença entre Análise Horizontal e Análise Vertical é que:",
      options: ["A Horizontal analisa a evolução no tempo, enquanto a Vertical analisa a estrutura num momento.", "A Horizontal usa apenas valores absolutos, e a Vertical apenas percentagens.", "A Vertical avalia a liquidez, e a Horizontal a rentabilidade."],
      correctOptionIndex: 0,
    },
    {
      id: 9,
      text: "Uma das principais funções do Mercado Financeiro é:",
      options: ["Definir a política salarial das empresas.", "Estabelecer contacto entre poupadores e investidores.", "Controlar a emissão de moeda pelo banco central."],
      correctOptionIndex: 1,
    },
    {
      id: 10,
      text: "No cálculo de juros compostos, a fórmula VF = VP * (1 + i)^n é utilizada para encontrar:",
      options: ["O Valor Presente de uma quantia futura.", "O Valor Futuro de um investimento inicial.", "A taxa de juro efetiva de um empréstimo."],
      correctOptionIndex: 1,
    },
    {
      id: 11,
      text: "Se uma empresa possui um Fundo de Maneio (FM) positivo e uma Necessidade de Fundo de Maneio (NFM) positiva, a sua Tesouraria Líquida (TL) será:",
      options: ["Positiva se FM > NFM.", "Sempre negativa.", "Igual ao valor das disponibilidades."],
      correctOptionIndex: 0,
    },
    {
      id: 12,
      text: "O Modelo de Gordon (ou de crescimento constante) é utilizado principalmente para:",
      options: ["Calcular o ponto de equilíbrio de uma empresa.", "Avaliar o preço teórico de uma ação com dividendos crescentes.", "Determinar a taxa de desconto de um projeto."],
      correctOptionIndex: 1,
    },
    {
      id: 13,
      text: "Um Rácio de Liquidez Reduzida (Ácido) inferior a 1,0 geralmente indica que:",
      options: ["A empresa tem excesso de caixa.", "A empresa pode ter dificuldade em pagar dívidas de curto prazo sem vender inventários.", "O ativo não corrente é insuficiente."],
      correctOptionIndex: 1,
    },
    {
      id: 14,
      text: "O Critério do Custo Nominal Total do Capital Alheio (CNTCA) considera para comparação de propostas de financiamento:",
      options: ["Apenas a taxa de juro nominal anunciada.", "A taxa de juro, impostos sobre juros e comissões.", "O sistema de amortização (Price ou SAC)."],
      correctOptionIndex: 1,
    },
    {
      id: 15,
      text: "Um Rácio de Rendibilidade do Capital Próprio (ROE) elevado sugere que:",
      options: ["A empresa está muito endividada.", "A empresa está a gerar um retorno atrativo para os seus acionistas.", "A empresa tem uma margem bruta baixa."],
      correctOptionIndex: 1,
    },
  ],
};
