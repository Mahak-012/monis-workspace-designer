"use client";

import { ACCESSORIES, CHAIRS, DESKS, type Product } from "@/lib/products";

interface Props {
  desk: Product;
  chair: Product;
  accessoryIds: string[];
  onDesk: (id: string) => void;
  onChair: (id: string) => void;
  onToggleAccessory: (id: string) => void;
}

function OptionCard({
  p,
  selected,
  onClick,
}: {
  p: Product;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex w-full items-center gap-3 rounded-xl border-2 bg-white p-3 text-left transition ${
        selected
          ? "border-teal-500 bg-teal-50/60"
          : "border-stone-200 hover:border-stone-300"
      }`}
    >
      {selected && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-[11px] font-bold text-white shadow">
          ✓
        </span>
      )}
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl ${
          selected ? "bg-white" : "bg-stone-100"
        }`}
      >
        {p.emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-stone-800">
          {p.name}
        </span>
        <span className="block truncate text-xs text-stone-500">{p.desc}</span>
      </span>
      <span className="shrink-0 text-right">
        <span className="block text-sm font-bold text-stone-800">${p.price}</span>
        <span className="block text-[10px] text-stone-400">per month</span>
      </span>
    </button>
  );
}

export default function PickerPanel({
  desk,
  chair,
  accessoryIds,
  onDesk,
  onChair,
  onToggleAccessory,
}: Props) {
  return (
    <aside className="w-full shrink-0 space-y-6 overflow-y-auto border-t border-stone-200 bg-white p-5 md:w-[390px] md:border-l md:border-t-0">
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Step 1 · Pick your desk
        </h2>
        <div className="mt-2 space-y-2">
          {DESKS.map((d) => (
            <OptionCard
              key={d.id}
              p={d}
              selected={d.id === desk.id}
              onClick={() => onDesk(d.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Step 2 · Pick your chair
        </h2>
        <div className="mt-2 space-y-2">
          {CHAIRS.map((c) => (
            <OptionCard
              key={c.id}
              p={c}
              selected={c.id === chair.id}
              onClick={() => onChair(c.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Step 3 · Add accessories ({accessoryIds.length})
        </h2>
        <div className="mt-2 space-y-2">
          {ACCESSORIES.map((a) => (
            <OptionCard
              key={a.id}
              p={a}
              selected={accessoryIds.includes(a.id)}
              onClick={() => onToggleAccessory(a.id)}
            />
          ))}
        </div>
      </section>

      <p className="pb-2 text-center text-[11px] text-stone-400">
        Prices are per month · Swap items anytime
      </p>
    </aside>
  );
}