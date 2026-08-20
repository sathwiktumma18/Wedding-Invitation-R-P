import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

// Central place to update the venue location. Paste the real Google Maps
// link here — never invented coordinates.
const WEDDING_MAP_URL = config.venue.mapUrl;

export default function MapSection() {
  const { t, lang } = useLanguage();
  const [loadMap, setLoadMap] = useState(false);

  const embedQuery = encodeURIComponent(`${config.venue.name_en}, ${config.venue.address_en}`);
  const embedSrc = `https://www.google.com/maps?q=${embedQuery}&output=embed`;

  return (
    <section className="relative bg-ivory-deep/50 py-20 sm:py-28">
      <div className="section-px mx-auto max-w-2xl text-center">
        <Eyebrow>{lang === "te" ? "మార్గం" : "Find Us"}</Eyebrow>
        <h2 className={`mt-2 text-maroon ${lang === "te" ? "font-telugu-heading text-3xl" : "font-display italic text-4xl"}`}>
          {lang === "te" ? "దారి" : "Directions"}
        </h2>
        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          onViewportEnter={() => setLoadMap(true)}
          transition={{ duration: 0.8 }}
          className="mt-6 overflow-hidden rounded-3xl border border-gold/25 bg-white shadow-card"
        >
          <div className="aspect-[16/11] w-full bg-ivory-deep">
            {loadMap ? (
              <iframe
                title="Wedding venue map"
                src={embedSrc}
                className="h-full w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-maroon/40">
                {lang === "te" ? "మ్యాప్ లోడ్ అవుతోంది…" : "Loading map…"}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center gap-4 px-6 py-7 sm:px-10">
            <p className={`text-sm text-ink/65 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
              {lang === "te" ? config.venue.address_te : config.venue.address_en}
            </p>
            <a
              href={WEDDING_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3 text-xs font-semibold uppercase text-ivory shadow-soft transition-transform hover:scale-[1.03] active:scale-[0.98] ${
                lang === "te" ? "font-telugu-sans" : "tracking-widest2"
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              {t.venue.directions}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
