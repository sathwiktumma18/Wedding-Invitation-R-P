import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function AuspiciousIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3c0 5-4 6-4 10a4 4 0 0 0 8 0c0-4-4-5-4-10Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function DetailRow({
  icon,
  label,
  value,
  isTe,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isTe: boolean;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-gold/15 py-4 last:border-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-deep">
        {icon}
      </div>
      <div className="text-left">
        <p className={`text-[11px] uppercase text-ink/45 ${isTe ? "font-telugu-sans" : "font-body tracking-wider"}`}>
          {label}
        </p>
        <p className={`text-maroon ${isTe ? "font-telugu-heading text-lg" : "font-display text-lg sm:text-xl"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default function WeddingDetails() {
  const { t, lang } = useLanguage();

  return (
    <section id="details" className="relative bg-ivory py-20 sm:py-28">
      <div className="section-px mx-auto max-w-xl text-center">
        <Eyebrow>{t.details.eyebrow}</Eyebrow>
        <h2
          className={`mt-2 text-maroon ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.details.title}
        </h2>
        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-8 rounded-3xl border border-gold/25 bg-white/40 px-6 py-2 text-left shadow-card sm:px-8"
        >
          <DetailRow
            icon={<CalendarIcon className="h-5 w-5" />}
            label={lang === "te" ? "తేదీ" : "Date"}
            value={lang === "te" ? config.weddingDateDisplay_te : config.weddingDateDisplay_en}
            isTe={lang === "te"}
          />
          <DetailRow
            icon={<ClockIcon className="h-5 w-5" />}
            label={lang === "te" ? "సమయం" : "Time"}
            value={lang === "te" ? config.muhurthamTime_te : config.muhurthamTime_en}
            isTe={lang === "te"}
          />
          <DetailRow
            icon={<AuspiciousIcon className="h-5 w-5" />}
            label={t.details.nakshatramLagnam}
            value={
              lang === "te"
                ? `${config.nakshatram_te} · ${config.lagnam_te}`
                : `${config.nakshatram_en} · ${config.lagnam_en}`
            }
            isTe={lang === "te"}
          />
        </motion.div>
      </div>
    </section>
  );
}
