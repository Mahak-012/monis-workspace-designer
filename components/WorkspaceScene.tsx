"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface Props {
  desk: Product;
  chair: Product;
  accessories: Product[];
}

function Item({ children }: { children: ReactNode }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 26, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 18, scale: 0.85 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}
    >
      {children}
    </motion.g>
  );
}

export default function WorkspaceScene({ desk, chair, accessories }: Props) {
  const has = (id: string) => accessories.some((a) => a.id === id);
  const topY = desk.variant === "standing" ? 232 : 268; // desk surface Y
  const aY = topY;

  return (
    <svg
      viewBox="0 0 800 520"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf1e0" />
          <stop offset="100%" stopColor="#f1e2c8" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e3c396" />
          <stop offset="100%" stopColor="#d3ac79" />
        </linearGradient>
      </defs>

      {/* ===== ROOM ===== */}
      <rect width="800" height="400" fill="url(#wall)" />
      <rect y="400" width="800" height="120" fill="url(#floor)" />
      <rect y="396" width="800" height="8" fill="#c9a97a" opacity="0.5" />
      {[434, 468, 502].map((y) => (
        <line key={y} x1="0" x2="800" y1={y} y2={y} stroke="#c9a97a" strokeOpacity="0.4" />
      ))}

      {/* Window with Bali view */}
      <g>
        <rect x="66" y="60" width="208" height="158" rx="10" fill="#ffffff" stroke="#e7d7b8" strokeWidth="4" />
        <rect x="80" y="74" width="180" height="130" rx="4" fill="#7dd3fc" />
        <rect x="80" y="158" width="180" height="46" fill="#0ea5e9" />
        <circle cx="122" cy="112" r="17" fill="#fde047" />
        <g stroke="#134e4a" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M232 204 C 236 170 232 140 220 118" />
          <path d="M220 118 C 200 108 184 110 172 122" />
          <path d="M220 118 C 226 96 242 88 260 90" />
          <path d="M220 118 C 204 92 186 88 170 94" />
          <path d="M220 118 C 240 104 258 106 268 118" />
        </g>
        <line x1="170" y1="74" x2="170" y2="204" stroke="#ffffff" strokeWidth="5" />
      </g>

      {/* Wall shelf */}
      <g>
        <rect x="608" y="168" width="124" height="10" rx="3" fill="#c99a5b" />
        <rect x="620" y="142" width="11" height="26" rx="2" fill="#ef4444" />
        <rect x="634" y="136" width="11" height="32" rx="2" fill="#3b82f6" />
        <rect x="648" y="146" width="9" height="22" rx="2" fill="#f59e0b" transform="rotate(8 652 157)" />
        <rect x="694" y="146" width="18" height="22" rx="3" fill="#e07a5f" />
        <ellipse cx="703" cy="140" rx="9" ry="7" fill="#22c55e" />
        <ellipse cx="696" cy="136" rx="6" ry="5" fill="#16a34a" />
      </g>

      {/* Corner plant (always there) */}
      <g>
        <ellipse cx="702" cy="428" rx="42" ry="7" fill="#000" opacity="0.06" />
        <g stroke="#15803d" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M702 376 C 700 320 690 280 672 250" />
          <path d="M702 376 C 706 312 720 276 738 254" />
          <path d="M702 376 C 702 316 702 276 700 244" />
        </g>
        <ellipse cx="668" cy="242" rx="16" ry="24" fill="#16a34a" transform="rotate(-25 668 242)" />
        <ellipse cx="742" cy="248" rx="16" ry="24" fill="#22c55e" transform="rotate(25 742 248)" />
        <ellipse cx="699" cy="230" rx="15" ry="22" fill="#22c55e" />
        <ellipse cx="714" cy="266" rx="11" ry="15" fill="#4ade80" transform="rotate(18 714 266)" />
        <path d="M676 384 h52 l-8 44 h-36 z" fill="#c2683c" />
        <rect x="672" y="376" width="60" height="12" rx="4" fill="#a85632" />
      </g>

      {/* Rug + shadow */}
      <ellipse cx="430" cy="452" rx="252" ry="34" fill="#14b8a6" opacity="0.15" />
      <ellipse cx="430" cy="452" rx="196" ry="24" fill="none" stroke="#14b8a6" strokeOpacity="0.35" strokeDasharray="6 8" />
      <ellipse cx="430" cy="404" rx="195" ry="15" fill="#000" opacity="0.08" />

      {/* ===== CHAIR (behind desk) ===== */}
      <AnimatePresence>
        <Item key={`chair-${chair.id}`}>
          <ellipse cx="460" cy="394" rx="56" ry="6" fill="#000" opacity="0.06" />
          {chair.variant === "ergo" ? (
            <g>
              <rect x="436" y="142" width="48" height="20" rx="10" fill="#18181b" />
              <rect x="420" y="160" width="80" height="112" rx="22" fill="#27272a" />
              <line x1="428" y1="188" x2="492" y2="188" stroke="#52525b" strokeWidth="3" />
              <line x1="428" y1="208" x2="492" y2="208" stroke="#52525b" strokeWidth="3" />
              <line x1="428" y1="228" x2="492" y2="228" stroke="#52525b" strokeWidth="3" />
              <rect x="454" y="268" width="12" height="96" fill="#3f3f46" />
              <ellipse cx="460" cy="372" rx="50" ry="8" fill="#3f3f46" />
              <circle cx="420" cy="384" r="8" fill="#18181b" />
              <circle cx="460" cy="386" r="8" fill="#18181b" />
              <circle cx="500" cy="384" r="8" fill="#18181b" />
            </g>
          ) : (
            <g>
              <rect x="404" y="210" width="132" height="64" rx="30" fill="#c99a5b" stroke="#a4713e" strokeWidth="3" />
              <path d="M414 240 Q 470 220 526 240" stroke="#a4713e" strokeWidth="2.5" fill="none" />
              <path d="M414 256 Q 470 238 526 256" stroke="#a4713e" strokeWidth="2.5" fill="none" />
              <line x1="438" y1="296" x2="426" y2="396" stroke="#8a5a2e" strokeWidth="8" strokeLinecap="round" />
              <line x1="502" y1="296" x2="514" y2="396" stroke="#8a5a2e" strokeWidth="8" strokeLinecap="round" />
              <line x1="432" y1="370" x2="508" y2="370" stroke="#8a5a2e" strokeWidth="5" />
            </g>
          )}
        </Item>
      </AnimatePresence>

      {/* ===== DESK ===== */}
      <AnimatePresence>
        <Item key={`desk-${desk.id}`}>
          {desk.variant === "wood" && (
            <g>
              <rect x="290" y="284" width="18" height="116" rx="2" fill="#8a5a2e" />
              <rect x="552" y="284" width="18" height="116" rx="2" fill="#8a5a2e" />
              <rect x="268" y="268" width="324" height="16" rx="4" fill="#a4713e" />
              <line x1="282" y1="274" x2="578" y2="274" stroke="#8a5a2e" strokeWidth="2" opacity="0.7" />
              <line x1="282" y1="279" x2="578" y2="279" stroke="#8a5a2e" strokeWidth="2" opacity="0.5" />
            </g>
          )}
          {desk.variant === "minimal" && (
            <g>
              <rect x="294" y="280" width="10" height="120" fill="#e7e5e4" stroke="#d6d3d1" strokeWidth="1" />
              <rect x="556" y="280" width="10" height="120" fill="#e7e5e4" stroke="#d6d3d1" strokeWidth="1" />
              <rect x="268" y="270" width="324" height="10" rx="5" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1.5" />
            </g>
          )}
          {desk.variant === "standing" && (
            <g>
              <rect x="288" y="246" width="26" height="154" rx="2" fill="#52525b" />
              <rect x="546" y="246" width="26" height="154" rx="2" fill="#52525b" />
              <rect x="268" y="232" width="324" height="14" rx="3" fill="#3f3f46" />
              <line x1="280" y1="235" x2="580" y2="235" stroke="#52525b" strokeWidth="2" />
              <rect x="574" y="252" width="12" height="22" rx="3" fill="#27272a" />
              <circle cx="580" cy="260" r="2.5" fill="#4ade80" />
            </g>
          )}
        </Item>
      </AnimatePresence>

      {/* ===== ACCESSORIES ===== */}
      <AnimatePresence>
        {has("acc-monitor") && (
          <Item key="acc-monitor">
            <g>
              <rect x="404" y={aY - 22} width="12" height="14" fill="#27272a" />
              <rect x="386" y={aY - 9} width="48" height="8" rx="4" fill="#27272a" />
              <rect x="355" y={aY - 98} width="110" height="76" rx="8" fill="#18181b" />
              <rect x="362" y={aY - 91} width="96" height="62" rx="4" fill="#0f172a" />
              <rect x="370" y={aY - 82} width="34" height="5" rx="2" fill="#22d3ee" />
              <rect x="370" y={aY - 72} width="52" height="5" rx="2" fill="#a78bfa" />
              <rect x="370" y={aY - 62} width="26" height="5" rx="2" fill="#f472b6" />
              <rect x="370" y={aY - 52} width="44" height="5" rx="2" fill="#4ade80" />
            </g>
          </Item>
        )}

        {has("acc-monitor2") && (
          <Item key="acc-monitor2">
            <g>
              <rect x="512" y={aY - 22} width="8" height="14" fill="#27272a" />
              <rect x="492" y={aY - 8} width="48" height="7" rx="3.5" fill="#27272a" />
              <rect x="477" y={aY - 78} width="76" height="56" rx="6" fill="#18181b" />
              <rect x="483" y={aY - 72} width="64" height="44" rx="3" fill="#1e1b4b" />
              <rect x="490" y={aY - 63} width="28" height="4" rx="2" fill="#c4b5fd" />
              <rect x="490" y={aY - 54} width="40" height="4" rx="2" fill="#818cf8" />
            </g>
          </Item>
        )}

        {has("acc-plant") && (
          <Item key="acc-plant">
            <g>
              <path d={`M338 ${aY - 30} C 336 ${aY - 52} 330 ${aY - 66} 322 ${aY - 78}`} stroke="#15803d" strokeWidth="3.5" fill="none" />
              <path d={`M338 ${aY - 30} C 342 ${aY - 56} 350 ${aY - 70} 358 ${aY - 80}`} stroke="#15803d" strokeWidth="3.5" fill="none" />
              <ellipse cx="318" cy={aY - 84} rx="15" ry="20" fill="#22c55e" transform={`rotate(-20 318 ${aY - 84})`} />
              <ellipse cx="362" cy={aY - 86} rx="14" ry="19" fill="#16a34a" transform={`rotate(20 362 ${aY - 86})`} />
              <ellipse cx="340" cy={aY - 96} rx="13" ry="17" fill="#4ade80" />
              <rect x="316" y={aY - 30} width="44" height="8" rx="3" fill="#c9553d" />
              <path d={`M320 ${aY - 26} h36 l-5 26 h-26 z`} fill="#e07a5f" />
            </g>
          </Item>
        )}

        {has("acc-lamp") && (
          <Item key="acc-lamp">
            <g>
              <path d={`M556 ${aY - 70} L 524 ${aY} L 588 ${aY} Z`} fill="#fde68a" opacity="0.18" />
              <rect x="550" y={aY - 6} width="34" height="6" rx="3" fill="#334155" />
              <line x1="566" y1={aY - 6} x2="548" y2={aY - 62} stroke="#334155" strokeWidth="6" strokeLinecap="round" />
              <line x1="548" y1={aY - 62} x2="562" y2={aY - 80} stroke="#334155" strokeWidth="6" strokeLinecap="round" />
              <path d={`M562 ${aY - 92} L 586 ${aY - 78} L 536 ${aY - 70} Z`} fill="#fbbf24" />
              <motion.circle
                cx="556"
                cy={aY - 70}
                r="18"
                fill="#fde68a"
                animate={{ opacity: [0.25, 0.5, 0.25] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
            </g>
          </Item>
        )}

        {has("acc-fan") && (
          <Item key="acc-fan">
            <g>
              <rect x="284" y={aY - 6} width="36" height="6" rx="3" fill="#64748b" />
              <rect x="298" y={aY - 32} width="7" height="26" fill="#64748b" />
              <circle cx="301.5" cy={aY - 52} r="23" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="3" />
              <g>
                <ellipse cx="301.5" cy={aY - 63} rx="5.5" ry="12" fill="#7dd3fc" transform={`rotate(0 301.5 ${aY - 52})`} />
                <ellipse cx="301.5" cy={aY - 63} rx="5.5" ry="12" fill="#7dd3fc" transform={`rotate(120 301.5 ${aY - 52})`} />
                <ellipse cx="301.5" cy={aY - 63} rx="5.5" ry="12" fill="#7dd3fc" transform={`rotate(240 301.5 ${aY - 52})`} />
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from={`0 301.5 ${aY - 52}`} to={`360 301.5 ${aY - 52}`} dur="0.9s" repeatCount="indefinite" />
              </g>
              <circle cx="301.5" cy={aY - 52} r="4.5" fill="#0284c7" />
            </g>
          </Item>
        )}

        {has("acc-keyboard") && (
          <Item key="acc-keyboard">
            <g>
              <rect x="390" y={aY - 9} width="92" height="9" rx="3" fill="#7c3aed" />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <circle key={i} cx={400 + i * 14} cy={aY - 4.5} r="1.8" fill="#ddd6fe" />
              ))}
            </g>
          </Item>
        )}
      </AnimatePresence>
    </svg>
  );
}