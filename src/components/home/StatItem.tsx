import { useEffect, useRef, useState } from "react";
import { useCountUp } from "./useCountUp";

export type StatAccent = "cred" | "cgreen" | "cblue" | "cyellow";

const accentNumberClass: Record<StatAccent, string> = {
  cred: "text-cred",
  cgreen: "text-cgreen",
  cblue: "text-cblue",
  cyellow: "text-cyellow",
};

const accentLabelClass: Record<StatAccent, string> = {
  cred: "text-cred/80",
  cgreen: "text-cgreen/80",
  cblue: "text-cblue/80",
  /* yellow is light — use charcoal label for readability */
  cyellow: "text-charcoal",
};

const accentBarClass: Record<StatAccent, string> = {
  cred: "bg-cred",
  cgreen: "bg-cgreen",
  cblue: "bg-cblue",
  cyellow: "bg-cyellow",
};

export default function StatItem({
  value,
  suffix = "",
  prefix = "",
  label,
  accent,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  accent: StatAccent;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, { enabled: active });
  return (
    <div
      ref={ref}
      className="flex flex-1 flex-col items-center justify-center px-4 py-8 text-center"
    >
      <p
        className={`text-4xl font-bold tracking-tight md:text-5xl ${accentNumberClass[accent]}`}
      >
        {prefix}
        {n}
        {suffix}
      </p>
      <p className={`mt-2 max-w-[10rem] text-sm font-medium leading-snug `}>
        {label}
      </p>
      {/*<span
        className={`mt-3 h-1 w-10 rounded-full ${accentBarClass[accent]}`}
        aria-hidden
      />*/}
    </div>
  );
}
