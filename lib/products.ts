export type Category = "desk" | "chair" | "accessory";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;   // USD per month
  desc: string;
  variant: string;
  color: string;
  emoji: string;
}

export const DESKS: Product[] = [
  { id: "desk-teak", name: "Bali Teak Desk", category: "desk", price: 12,
    desc: "Solid reclaimed teak — island vibes built in.",
    variant: "wood", color: "#a4713e", emoji: "🪵" },
  { id: "desk-white", name: "Minimal White Desk", category: "desk", price: 9,
    desc: "Clean, bright, distraction-free.",
    variant: "minimal", color: "#f4f4f5", emoji: "🤍" },
  { id: "desk-standing", name: "Electric Standing Desk", category: "desk", price: 19,
    desc: "Sit or stand — your back will thank you.",
    variant: "standing", color: "#3f3f46", emoji: "⚡" },
];

export const CHAIRS: Product[] = [
  { id: "chair-ergo", name: "Ergo Pro Chair", category: "chair", price: 15,
    desc: "Mesh back, lumbar support, all-day comfort.",
    variant: "ergo", color: "#27272a", emoji: "🖤" },
  { id: "chair-rattan", name: "Rattan Lounge Chair", category: "chair", price: 8,
    desc: "Handwoven rattan. Style over everything.",
    variant: "rattan", color: "#c99a5b", emoji: "🪑" },
];

export const ACCESSORIES: Product[] = [
  { id: "acc-monitor", name: '24" Monitor', category: "accessory", price: 7,
    desc: "Crisp display for deep work.",
    variant: "monitor", color: "#18181b", emoji: "🖥️" },
  { id: "acc-monitor2", name: "Second Monitor", category: "accessory", price: 6,
    desc: "Dual setup = 2x productivity.",
    variant: "monitor2", color: "#18181b", emoji: "🖥️" },
  { id: "acc-lamp", name: "Desk Lamp", category: "accessory", price: 2,
    desc: "Warm light for late-night deploys.",
    variant: "lamp", color: "#fbbf24", emoji: "💡" },
  { id: "acc-plant", name: "Monstera Plant", category: "accessory", price: 3,
    desc: "A little jungle on your desk.",
    variant: "plant", color: "#22c55e", emoji: "🪴" },
  { id: "acc-keyboard", name: "Mechanical Keyboard", category: "accessory", price: 4,
    desc: "Clicky. Loud. Worth it.",
    variant: "keyboard", color: "#7c3aed", emoji: "⌨️" },
  { id: "acc-fan", name: "Mini Desk Fan", category: "accessory", price: 2,
    desc: "Bali is hot. Stay cool.",
    variant: "fan", color: "#38bdf8", emoji: "🌀" },
];