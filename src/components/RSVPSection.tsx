import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

export default function RSVPSection() {
  const { t, lang } = useLanguage();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section id="rsvp" className="relative bg-ivory py-20 sm:py-28">
      <div className="section-px mx-auto max-w-lg text-center">
        <Eyebrow>{t.rsvp.eyebrow}</Eyebrow>
        <h2
          className={`mt-2 text-maroon ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.rsvp.title}
        </h2>
        <p className={`mt-3 text-ink/65 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
          {t.rsvp.subtitle}
        </p>
        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 rounded-3xl border border-gold/25 bg-ivory-deep/40 px-6 py-10 shadow-soft sm:px-10"
        >
          <p className={`text-sm font-semibold uppercase text-gold-deep ${lang === "te" ? "font-telugu-sans" : "tracking-widest2"}`}>
            {t.rsvp.body}
          </p>

          <AnimatePresence mode="wait">
            {confirmed ? (
              <motion.p
                key="thanks"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 text-maroon ${lang === "te" ? "font-telugu-heading text-xl" : "font-display italic text-2xl"}`}
              >
                {t.rsvp.thankyou}
              </motion.p>
            ) : (
              <motion.button
                key="button"
                onClick={() => setConfirmed(true)}
                whileTap={{ scale: 0.96 }}
                className={`mt-6 rounded-full bg-maroon px-8 py-3.5 text-xs font-semibold uppercase text-ivory shadow-soft transition-transform hover:scale-[1.03] ${
                  lang === "te" ? "font-telugu-sans" : "tracking-widest2"
                }`}
              >
                {t.rsvp.button}
              </motion.button>
            )}
          </AnimatePresence>

          <p className={`mx-auto mt-6 max-w-xs text-[11px] leading-relaxed text-ink/40 ${lang === "te" ? "font-telugu-sans" : ""}`}>
            {t.rsvp.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
