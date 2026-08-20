import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";
import { CornerMotif } from "./OrnamentalMotifs";

// Developer-facing placeholder note — deliberately always in English
// regardless of site language, since it's an instruction for whoever is
// editing the site, not guest-facing content.
function PhotoPlaceholder({ note }: { note: string }) {
  return (
    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold/40 bg-ivory-deep/60 text-center">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-gold/60">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="9" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M21 16l-5.5-5.5L4 19" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <p className="max-w-[70%] font-body text-[11px] leading-snug text-maroon/50">{note}</p>
    </div>
  );
}

function PersonCard({
  label,
  name,
  lineage,
  index,
  photo,
  photoNote,
  lang,
}: {
  label: string;
  name: string;
  lineage?: string;
  index: number;
  photo?: string | null;
  photoNote: string;
  lang: "en" | "te";
}) {
  const isTe = lang === "te";
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-gold/25 bg-ivory p-5 shadow-card sm:p-6"
    >
      <CornerMotif className="pointer-events-none absolute -right-2 -top-2 h-16 w-16 text-gold/25" />

      {photo ? (
        <img
          src={photo}
          alt={name}
          className="aspect-[4/5] w-full rounded-2xl object-cover"
          loading="lazy"
        />
      ) : (
        <PhotoPlaceholder note={photoNote} />
      )}

      <div className="mt-5 text-center">
        <p
          className={`text-[11px] font-semibold uppercase text-gold-deep ${
            isTe ? "font-telugu-sans" : "font-body tracking-widest2"
          }`}
        >
          {label}
        </p>
        <h3
          className={`mt-1.5 text-maroon ${
            isTe ? "font-telugu-heading text-3xl" : "font-display italic text-3xl sm:text-4xl"
          }`}
        >
          {name}
        </h3>
        {lineage && (
          <p className={`mt-2 text-xs text-ink/60 ${isTe ? "font-telugu-sans" : "font-body"}`}>{lineage}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function CoupleSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="couple" className="relative bg-ivory-deep/50 py-20 sm:py-28">
      <div className="section-px mx-auto max-w-4xl text-center">
        <Eyebrow>{t.couple.eyebrow}</Eyebrow>
        <h2
          className={`mt-2 text-maroon ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.couple.title}
        </h2>
        <SectionDivider />

        <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:mt-10 md:flex-row md:items-start md:gap-10">
          <PersonCard
            label={t.couple.brideLabel}
            name={config.bride[lang]}
            index={0}
            lang={lang}
            photo="/assets/images/bride.jpg"
            photoNote="Bride's photograph"
          />
          <PersonCard
            label={t.couple.groomLabel}
            name={config.groom[lang]}
            lineage={`${t.couple.groomLineage} ${
              lang === "te" ? config.groomFamily.father_te : config.groomFamily.father_en
            } - ${lang === "te" ? config.groomFamily.mother_te : config.groomFamily.mother_en}`}
            index={1}
            lang={lang}
            photo="/assets/images/groom.jpg"
            photoNote="Groom's photograph"
          />
        </div>
      </div>
    </section>
  );
}
