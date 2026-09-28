"use client";

interface Props {
  itemCount: number;
  monthlyTotal: number;
  onRent: () => void;
}

export default function SummaryBar({ itemCount, monthlyTotal, onRent }: Props) {
  return (
    <div className="flex shrink-0 items-center justify-between gap-4 border-t border-stone-200 bg-white px-5 py-3.5">
      <div className="flex items-center gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-stone-400">
            Your setup
          </p>
          <p className="text-xl font-bold leading-tight text-stone-900">
            ${monthlyTotal}
            <span className="text-sm font-normal text-stone-400">/month</span>
          </p>
        </div>
        <span className="hidden rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-500 sm:block">
          {itemCount} items selected
        </span>
      </div>
      <button
        onClick={onRent}
        className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 active:scale-95"
      >
        Rent this setup →
      </button>
    </div>
  );
}