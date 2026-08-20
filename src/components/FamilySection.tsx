import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";
import { SimpleDivider } from "./OrnamentalMotifs";

function FamilyCard({
  title,
  parents,
  address,
  index,
  isTe,
}: {
  title: string;
  parents: string;
  address: string;
  index: number;
  isTe: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="w-full max-w-sm rounded-2xl border border-gold/25 bg-white/50 px-6 py-7 text-center shadow-soft"
    >
      <p
        className={`text-[11px] font-semibold uppercase text-gold-deep ${
          isTe ? "font-telugu-sans" : "font-body tracking-widest2"
        }`}
      >
        {title}
      </p>
      <p
        className={`mt-2 text-maroon ${isTe ? "font-telugu-heading text-xl" : "font-display text-2xl italic"}`}
      >
        {parents}
      </p>
      <p className={`mt-2 text-xs leading-relaxed text-ink/55 ${isTe ? "font-telugu-sans" : "font-body"}`}>
        {address}
      </p>
    </motion.div>
  );
}

export default function FamilySection() {
  const { t, lang } = useLanguage();
  const isTe = lang === "te";

  return (
    <section id="family" className="relative bg-maroon-deep py-20 sm:py-28">
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="section-px relative mx-auto max-w-4xl text-center">
        <Eyebrow>
          <span className="text-gold-light">{t.family.eyebrow}</span>
        </Eyebrow>
        <h2 className={`mt-2 text-ivory ${isTe ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"}`}>
          {t.family.title}
        </h2>
        <p className={`mt-2 text-gold-light/90 ${isTe ? "font-telugu-sans" : "font-body italic"}`}>
          {t.family.subtitle}
        </p>
        <SectionDivider className="text-gold-light" />

        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:mt-10 md:flex-row md:items-start">
          <FamilyCard
            title={t.family.brideSide}
            parents={
              isTe
                ? `${config.brideFamily.father_te} - ${config.brideFamily.mother_te}`
                : `${config.brideFamily.father_en} - ${config.brideFamily.mother_en}`
            }
            address={isTe ? config.brideFamily.address_te : config.brideFamily.address_en}
            index={0}
            isTe={isTe}
          />
          <FamilyCard
            title={t.family.groomSide}
            parents={
              isTe
                ? `${config.groomFamily.father_te} - ${config.groomFamily.mother_te}`
                : `${config.groomFamily.father_en} - ${config.groomFamily.mother_en}`
            }
            address={isTe ? config.groomFamily.address_te : config.groomFamily.address_en}
            index={1}
            isTe={isTe}
          />
        </div>

        {/* Elders */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-12 max-w-md"
        >
          <p
            className={`text-[11px] font-semibold uppercase text-gold-light/80 ${
              isTe ? "font-telugu-sans" : "font-body tracking-widest2"
            }`}
          >
            {t.family.elders}
          </p>
          <div className="mx-auto mt-4 flex justify-center text-gold/50">
            <SimpleDivider className="h-4 w-32" />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <p
                className={`text-[11px] uppercase text-ivory/50 ${
                  isTe ? "font-telugu-sans" : "font-body tracking-wider"
                }`}
              >
                {t.family.grandparents}
              </p>
              <p className={`mt-1 text-ivory/90 ${isTe ? "font-telugu-heading text-lg" : "font-display text-lg italic"}`}>
                {isTe ? config.elders.grandparents_te : config.elders.grandparents_en}
              </p>
              <p
                className={`mt-0.5 text-[11px] text-ivory/40 ${isTe ? "font-telugu-sans" : "font-body italic"}`}
              >
                {isTe ? config.elders.grandparentsNote_te : config.elders.grandparentsNote_en}
              </p>
            </div>
            <div>
              <p
                className={`text-[11px] uppercase text-ivory/50 ${
                  isTe ? "font-telugu-sans" : "font-body tracking-wider"
                }`}
              >
                {t.family.unclesAunt}
              </p>
              <p className={`mt-1 text-ivory/90 ${isTe ? "font-telugu-heading text-lg" : "font-display text-lg italic"}`}>
                {isTe ? config.elders.unclesAunt_te : config.elders.unclesAunt_en}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hosted by */}
        <div className="mx-auto mt-10 max-w-xs text-center">
          <p
            className={`text-[11px] uppercase text-gold-light/70 ${
              isTe ? "font-telugu-sans" : "font-body tracking-widest2"
            }`}
          >
            {t.family.hostedBy}
          </p>
          <p className={`mt-1 text-ivory ${isTe ? "font-telugu-heading text-xl" : "font-display italic text-2xl"}`}>
            {isTe
              ? `${config.brideFamily.father_te} - ${config.brideFamily.mother_te}`
              : `${config.brideFamily.father_en} - ${config.brideFamily.mother_en}`}
          </p>
        </div>
      </div>
    </section>
  );
}
