import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

export default function EventsTimeline() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative bg-ivory-deep/50 py-20 sm:py-28">
      <div className="section-px mx-auto max-w-lg text-center">
        <Eyebrow>{t.timeline.eyebrow}</Eyebrow>
        <h2
          className={`mt-2 text-maroon ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.timeline.title}
        </h2>
        <SectionDivider />

        <div className="relative mt-10 pl-8 text-left sm:pl-10">
          {/* vertical gold line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent sm:left-[11px]" />

          {config.events.map((ev, i) => {
            const time = lang === "te" ? ev.time_te : ev.time_en;
            return (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-ivory sm:-left-10">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
              </span>
              <p className={`text-[11px] uppercase text-gold-deep ${lang === "te" ? "font-telugu-sans" : "font-body tracking-wider"}`}>
                {lang === "te" ? ev.date_te : ev.date_en}
              </p>
              <h3
                className={`mt-1 text-maroon ${
                  lang === "te" ? "font-telugu-heading text-xl" : "font-display italic text-2xl"
                }`}
              >
                {lang === "te" ? ev.title_te : ev.title_en}
              </h3>
              {time && (
                <p className={`mt-1 text-lg text-gold-deep ${lang === "te" ? "font-telugu-heading" : "font-display"}`}>
                  {time}
                </p>
              )}
              <p className={`mt-1 text-sm text-ink/60 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
                {lang === "te" ? ev.desc_te : ev.desc_en}
              </p>
              {ev.mapUrl && (
                <a
                  href={ev.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-3 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2 text-[10px] font-semibold uppercase text-ivory shadow-soft transition-transform hover:scale-[1.03] active:scale-[0.98] ${
                    lang === "te" ? "font-telugu-sans" : "tracking-widest2"
                  }`}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  {t.reception?.directions ?? t.venue.directions}
                </a>
              )}
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
