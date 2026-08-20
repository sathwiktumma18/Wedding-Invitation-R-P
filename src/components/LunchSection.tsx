import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

function LeafBowlMotif(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 60" fill="none" {...props}>
      {/* banana leaf, simplified */}
      <path
        d="M10 30c20-16 60-16 80 0-20 12-60 12-80 0Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M50 20v20M30 22c6 4 6 12 0 16M70 22c-6 4-6 12 0 16" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      {/* brass vessel */}
      <path d="M40 33c0 6 4.5 10 10 10s10-4 10-10" stroke="currentColor" strokeWidth="1.1" />
      <path d="M38 33h24" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export default function LunchSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative bg-ivory py-16 sm:py-20">
      <div className="section-px mx-auto max-w-lg text-center">
        <Eyebrow>{t.lunch.eyebrow}</Eyebrow>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-4 flex justify-center text-gold"
        >
          <LeafBowlMotif className="h-14 w-24" />
        </motion.div>

        <h2 className={`mt-3 text-maroon ${lang === "te" ? "font-telugu-heading text-3xl" : "font-display italic text-4xl"}`}>
          {t.lunch.title}
        </h2>
        <SectionDivider />

        <p className={`text-2xl text-gold-deep ${lang === "te" ? "font-telugu-heading" : "font-display"}`}>
          {lang === "te" ? config.lunchTime_te : config.lunchTime_en}
        </p>
        <p className={`mx-auto mt-3 max-w-xs text-[15px] text-ink/65 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
          {t.lunch.body}
        </p>
      </div>
    </section>
  );
}
