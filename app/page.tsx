"use client";

import { useMemo, useState } from "react";
import { ACCESSORIES, CHAIRS, DESKS } from "@/lib/products";
import WorkspaceScene from "@/components/WorkspaceScene";
import PickerPanel from "@/components/PickerPanel";
import SummaryBar from "@/components/SummaryBar";
import CheckoutModal from "@/components/CheckoutModal";

export default function Home() {
  const [deskId, setDeskId] = useState(DESKS[0].id);
  const [chairId, setChairId] = useState(CHAIRS[0].id);
  const [accessoryIds, setAccessoryIds] = useState<string[]>([
    "acc-monitor",
    "acc-lamp",
  ]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const desk = DESKS.find((d) => d.id === deskId) ?? DESKS[0];
  const chair = CHAIRS.find((c) => c.id === chairId) ?? CHAIRS[0];
  const accessories = useMemo(
    () => ACCESSORIES.filter((a) => accessoryIds.includes(a.id)),
    [accessoryIds]
  );
  const monthlyTotal =
    desk.price + chair.price + accessories.reduce((s, a) => s + a.price, 0);

  const toggleAccessory = (id: string) =>
    setAccessoryIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="flex h-dvh flex-col bg-[#faf6ef]">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-stone-200 bg-white/80 px-5 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="text-lg font-extrabold tracking-tight text-stone-800">
            🌴 monis<span className="text-teal-600">.rent</span>
          </span>
          <span className="hidden rounded-full bg-teal-100 px-2.5 py-1 text-[11px] font-semibold text-teal-700 sm:block">
            Workspace Designer
          </span>
        </div>
        <p className="hidden text-xs text-stone-400 md:block">
          🚚 Free delivery in Bali · Swap anytime · No deposit
        </p>
      </header>

      <main className="flex flex-1 flex-col overflow-hidden md:flex-row">
        <section className="relative min-h-[300px] flex-1 md:min-h-0">
          <WorkspaceScene desk={desk} chair={chair} accessories={accessories} />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-stone-600 shadow backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
            Live preview · {desk.name} + {accessories.length} accessories
          </div>
        </section>

        <PickerPanel
          desk={desk}
          chair={chair}
          accessoryIds={accessoryIds}
          onDesk={setDeskId}
          onChair={setChairId}
          onToggleAccessory={toggleAccessory}
        />
      </main>

      <SummaryBar
        itemCount={2 + accessories.length}
        monthlyTotal={monthlyTotal}
        onRent={() => setCheckoutOpen(true)}
      />

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        desk={desk}
        chair={chair}
        accessories={accessories}
        monthlyTotal={monthlyTotal}
      />
    </div>
  );
}