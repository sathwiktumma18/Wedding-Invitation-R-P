import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";
import { KalashMotif, BellMotif, JasmineSprig } from "./OrnamentalMotifs";

export default function MuhurthamSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-maroon-deep py-20 sm:py-28">
      <div className="absolute inset-0 bg-grain opacity-40" />
      {/* faint corner motifs */}
      <BellMotif className="pointer-events-none absolute left-4 top-8 h-16 w-16 text-gold/15 sm:left-10" />
      <BellMotif className="pointer-events-none absolute right-4 top-8 h-16 w-16 -scale-x-100 text-gold/15 sm:right-10" />
      <JasmineSprig className="pointer-events-none absolute bottom-10 left-8 h-10 w-10 text-gold/20" />
      <JasmineSprig className="pointer-events-none absolute bottom-16 right-10 h-8 w-8 text-gold/15" />

      <div className="section-px relative mx-auto max-w-xl text-center">
        <Eyebrow>
          <span className="text-gold-light">{t.muhurtham.eyebrow}</span>
        </Eyebrow>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 flex justify-center text-gold-light"
        >
          <KalashMotif className="h-16 w-14" />
        </motion.div>

        <h2
          className={`mt-4 text-ivory ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.muhurtham.title}
        </h2>

        <SectionDivider className="text-gold-light" />

        <p className={`text-2xl text-gold-light sm:text-3xl ${lang === "te" ? "font-telugu-heading" : "font-display"}`}>
          {lang === "te" ? config.weddingDateDisplay_te : config.weddingDateDisplay_en}
        </p>
        <p className={`mt-1 text-sm text-ivory/80 ${lang === "te" ? "font-telugu-sans" : "font-body tracking-wide"}`}>
          {lang === "te" ? config.muhurthamTime_te : config.muhurthamTime_en}
        </p>

        <div className="mt-6 flex flex-col items-center gap-1.5">
          <p className={`text-ivory/90 ${lang === "te" ? "font-telugu-sans text-base" : "font-body text-[15px]"}`}>
            {lang === "te" ? config.nakshatram_te : config.nakshatram_en}
          </p>
          <p className={`text-ivory/90 ${lang === "te" ? "font-telugu-sans text-base" : "font-body text-[15px]"}`}>
            {lang === "te" ? config.lagnam_te : config.lagnam_en}
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-ivory/70 ${
            lang === "te" ? "font-telugu-sans" : "font-body font-light"
          }`}
        >
          {t.muhurtham.body}
        </motion.p>
      </div>
    </section>
  );
}
