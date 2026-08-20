import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

function VenuePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold/40 bg-ivory-deep/60 text-center">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-gold/60">
        <path
          d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <p className="max-w-[70%] font-body text-xs leading-snug text-maroon/50">{label}</p>
    </div>
  );
}

export default function VenueSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="venue" className="relative bg-ivory py-20 sm:py-28">
      <div className="section-px mx-auto max-w-2xl text-center">
        <Eyebrow>{t.venue.eyebrow}</Eyebrow>
        <h2
          className={`mt-2 text-maroon ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.venue.title}
        </h2>
        <p className={`mt-2 text-ink/60 ${lang === "te" ? "font-telugu-sans" : "font-body italic"}`}>
          {t.venue.subtitle}
        </p>
        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-8 overflow-hidden rounded-3xl border border-gold/25 bg-white/40 shadow-card"
        >
          {config.assets.venuePhoto ? (
            <img
              src={config.assets.venuePhoto}
              alt={config.venue.name_en}
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          ) : (
            <VenuePlaceholder label="Venue photograph — add at config.assets.venuePhoto in weddingData.ts" />
          )}

          <div className="px-6 py-7 sm:px-10 sm:py-8">
            <h3
              className={`text-maroon ${
                lang === "te" ? "font-telugu-heading text-2xl" : "font-display italic text-3xl"
              }`}
            >
              {lang === "te" ? config.venue.name_te : config.venue.name_en}
            </h3>
            <p className={`mx-auto mt-2 max-w-sm text-sm text-ink/65 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
              {lang === "te" ? config.venue.address_te : config.venue.address_en}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
