export const agents = [
  {
    id: "research",
    name: "Research Hoxo",
    category: "Market research and intelligence",
    description: "Make sense of the moves, narratives and risks.",
    mark: "HX",
  },
  {
    id: "signals",
    name: "HOGA Signals",
    category: "Market signals and opportunity detection",
    description: "Find meaningful movement with clear context.",
    mark: "HS",
  },
  {
    id: "prediction",
    name: "Rain One",
    category: "Prediction market intelligence",
    description: "Explore activity, probabilities and sentiment.",
    mark: "R1",
  },
  {
    id: "trading",
    name: "Yellow Trade",
    category: "Trading intelligence",
    description: "Put market activity into a trading context.",
    mark: "YT",
  },
] as const;
export type Agent = (typeof agents)[number];
export const signals = [
  {
    symbol: "BTC",
    type: "MOMENTUM",
    title: "Momentum strengthening",
    confidence: "HIGH",
    detail:
      "Spot activity is building. Short-term momentum is improving, with volatility still elevated.",
  },
  {
    symbol: "ETH",
    type: "VOLATILITY",
    title: "Volatility expansion detected",
    confidence: "MEDIUM",
    detail:
      "The demo range is widening. Watch for confirmation before interpreting direction.",
  },
  {
    symbol: "SOL",
    type: "ACTIVITY",
    title: "Relative market activity increasing",
    confidence: "HIGH",
    detail:
      "Relative activity is outpacing the demo watchlist. Strength still needs follow-through.",
  },
] as const;
export const markets = [
  { symbol: "BTC", name: "Bitcoin", price: "$112,482", change: "+1.8%" },
  { symbol: "ETH", name: "Ethereum", price: "$4,338", change: "+0.9%" },
  { symbol: "SOL", name: "Solana", price: "$218", change: "-0.4%" },
];
export type WorkflowStatus = "READY" | "RUNNING" | "PAUSED";
export const workflows: {
  name: string;
  description: string;
  status: WorkflowStatus;
}[] = [
  {
    name: "Market Morning Brief",
    description: "A focused overview to start your day.",
    status: "READY",
  },
  {
    name: "BTC Movement Monitor",
    description: "Follow momentum and shifts in activity.",
    status: "RUNNING",
  },
  {
    name: "Prediction Market Scanner",
    description: "Surface changes in market expectations.",
    status: "PAUSED",
  },
];
export const prompts = [
  "What is moving BTC?",
  "Find market opportunities",
  "Summarize today's risk",
  "Show prediction market activity",
];
export function demoResponse(input: string): string {
  const text = input.toLowerCase();
  if (/prediction|probabilit|rain/.test(text))
    return "In this demo, prediction market activity is clustering around macro events. Compare changes in implied probability with participation: a price move on thin activity may offer less useful context. These are illustrative observations, not current market readings.";
  if (/risk|volatil/.test(text))
    return "The demo risk picture is mixed: BTC momentum is improving, ETH volatility is expanding and SOL activity is elevated. Watch for abrupt reversals and avoid treating a confidence label as a guarantee. No current market data is being used.";
  if (/btc|bitcoin/.test(text))
    return "BTC is showing elevated momentum in this demo environment. Spot activity has strengthened while short-term volatility remains elevated. The next useful check is whether participation holds through a pullback. This is a simulated research observation.";
  if (/eth|ethereum/.test(text))
    return "ETH is showing expanding volatility in this demo. Wider ranges suggest uncertainty rather than a confirmed direction. Compare participation with the next range break before drawing a conclusion.";
  if (/sol|solana/.test(text))
    return "SOL has strong relative activity in the demo watchlist, despite a small price decline. Activity alone does not establish direction; look for sustained participation and price confirmation.";
  if (/opportunit|signal|market/.test(text))
    return "Three areas stand out in the demo: BTC momentum, ETH volatility and SOL relative activity. Start with BTC for a momentum study, compare ETH for risk context, then examine whether SOL activity persists. These are research leads from fixed demo data.";
  return "I can help explore BTC momentum, ETH volatility, SOL activity or prediction markets using this demo dataset. Try asking about one of those topics. This local demo does not access current news or external AI services.";
}
