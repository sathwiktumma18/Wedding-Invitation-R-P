import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { useCountdown } from "../hooks/useCountdown";
import SectionDivider, { Eyebrow } from "./SectionDivider";

function CountdownCard({ value, label, isTe }: { value: number; label: string; isTe: boolean }) {
  return (
    <div className="flex w-[72px] flex-col items-center rounded-2xl border border-gold/25 bg-ivory/10 px-2 py-4 shadow-soft backdrop-blur-sm sm:w-24 sm:py-6">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-display text-3xl font-semibold text-ivory tabular-nums sm:text-5xl"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span
        className={`mt-1.5 text-[9px] uppercase text-gold-light sm:text-[11px] ${
          isTe ? "font-telugu-sans" : "tracking-widest2"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const { t, lang } = useLanguage();
  const { days, hours, minutes, seconds, isPast } = useCountdown(config.weddingDateISO);

  return (
    <section className="relative overflow-hidden bg-maroon py-16 sm:py-20">
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-maroon-light/30 blur-3xl" />
      <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="section-px relative mx-auto max-w-3xl text-center">
        <Eyebrow>
          <span className="text-gold-light">{t.countdown.eyebrow}</span>
        </Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mt-2 text-3xl text-ivory sm:text-4xl ${
            lang === "te" ? "font-telugu-heading" : "font-display italic"
          }`}
        >
          {t.countdown.title}
        </motion.h2>

        <SectionDivider className="text-gold-light" />

        {isPast ? (
          <p className={`mt-8 text-lg text-ivory/90 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
            {t.countdown.arrived}
          </p>
        ) : (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <CountdownCard value={days} label={t.countdown.days} isTe={lang === "te"} />
            <span className="pb-6 font-display text-2xl text-gold-light/50 sm:text-3xl">:</span>
            <CountdownCard value={hours} label={t.countdown.hours} isTe={lang === "te"} />
            <span className="pb-6 font-display text-2xl text-gold-light/50 sm:text-3xl">:</span>
            <CountdownCard value={minutes} label={t.countdown.minutes} isTe={lang === "te"} />
            <span className="pb-6 font-display text-2xl text-gold-light/50 sm:text-3xl">:</span>
            <CountdownCard value={seconds} label={t.countdown.seconds} isTe={lang === "te"} />
          </div>
        )}
      </div>
    </section>
  );
}
