"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import type { Product } from "@/lib/products";

const DURATIONS = [1, 3, 6, 12];

interface Props {
  open: boolean;
  onClose: () => void;
  desk: Product;
  chair: Product;
  accessories: Product[];
  monthlyTotal: number;
}

export default function CheckoutModal({
  open,
  onClose,
  desk,
  chair,
  accessories,
  monthlyTotal,
}: Props) {
  const [duration, setDuration] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [orderNo] = useState(
    () => `MONIS-${Math.floor(10000 + Math.random() * 90000)}`
  );

  const discount = duration >= 3 ? 0.1 : 0;
  const perMonth = Math.round(monthlyTotal * (1 - discount));
  const total = perMonth * duration;
  const items = [desk, chair, ...accessories];

  const handleConfirm = () => {
    if (!name.trim()) return setError("Please enter your name.");
    if (!/\S+@\S+\.\S+/.test(email))
      return setError("Please enter a valid email.");
    setError("");
    confetti({
      particleCount: 180,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#14b8a6", "#f59e0b", "#22c55e", "#fbbf24"],
    });
    setTimeout(
      () => confetti({ particleCount: 120, spread: 70, origin: { x: 0 } }),
      250
    );
    setTimeout(
      () => confetti({ particleCount: 120, spread: 70, origin: { x: 1 } }),
      400
    );
    setConfirmed(true);
  };

  const close = () => {
    setConfirmed(false);
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
            initial={{ scale: 0.9, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            {!confirmed ? (
              <>
                <h2 className="text-xl font-bold text-stone-900">
                  Rent this setup 🌴
                </h2>
                <p className="mt-1 text-sm text-stone-500">
                  Review your workspace and lock it in.
                </p>

                <div className="mt-4 space-y-1.5">
                  {items.map((i) => (
                    <div key={i.id} className="flex justify-between text-sm">
                      <span className="text-stone-600">
                        {i.emoji} {i.name}
                      </span>
                      <span className="font-medium text-stone-800">
                        ${i.price}/mo
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                    Rent duration
                  </p>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {DURATIONS.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`rounded-lg border-2 py-2 text-sm font-semibold transition ${
                          duration === d
                            ? "border-teal-500 bg-teal-50 text-teal-700"
                            : "border-stone-200 text-stone-600 hover:border-stone-300"
                        }`}
                      >
                        {d} mo
                      </button>
                    ))}
                  </div>
                  {duration >= 3 && (
                    <p className="mt-1.5 text-xs font-medium text-teal-600">
                      🌴 Long-stay discount: 10% off applied
                    </p>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {error && <p className="text-xs text-red-500">{error}</p>}
                </div>

                <div className="mt-5 border-t pt-4">
                  <p className="text-xs text-stone-400">
                    ${perMonth}/month × {duration}{" "}
                    {duration === 1 ? "month" : "months"}
                  </p>
                  <p className="text-2xl font-bold text-stone-900">
                    ${total}
                    <span className="text-sm font-normal text-stone-400"> total</span>
                  </p>
                </div>

                <button
                  onClick={handleConfirm}
                  className="mt-4 w-full rounded-xl bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700 active:scale-[0.98]"
                >
                  Confirm booking
                </button>
                <p className="mt-2 text-center text-[11px] text-stone-400">
                  Free delivery in Bali · Cancel anytime · No deposit
                </p>
              </>
            ) : (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 14 }}
                  className="text-6xl"
                >
                  🎉
                </motion.div>
                <h2 className="mt-3 text-xl font-bold text-stone-900">
                  You&apos;re all set, {name.split(" ")[0]}!
                </h2>
                <p className="mt-1 text-sm text-stone-500">
                  Order <b>{orderNo}</b> confirmed. Your setup will be delivered
                  anywhere in Bali within 48 hours.
                </p>
                <div className="mt-4 rounded-xl bg-teal-50 p-4 text-left text-sm text-teal-800">
                  ☀️ Selamat datang di Bali! Swap or return any item anytime.
                </div>
                <button
                  onClick={close}
                  className="mt-5 w-full rounded-xl bg-stone-900 py-3 font-semibold text-white transition hover:bg-stone-700"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}