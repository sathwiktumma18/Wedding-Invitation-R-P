import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

/**
 * Renders nothing until you add photo paths to config.assets.gallery in
 * weddingData.ts. We deliberately don't pad this out with placeholder tiles —
 * a near-empty gallery looks worse than no gallery at all.
 */
export default function Gallery() {
  const { t, lang } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const photos = config.assets.gallery;

  if (photos.length === 0) return null;

  return (
    <section className="relative bg-ivory-deep/50 py-20 sm:py-28">
      <div className="section-px mx-auto max-w-4xl text-center">
        <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
        <h2 className={`mt-2 text-maroon ${lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"}`}>{t.gallery.title}</h2>
        <SectionDivider />

        <div className="mt-8 columns-2 gap-3 sm:columns-3 sm:gap-4">
          {photos.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              className="mb-3 block w-full overflow-hidden rounded-xl border border-gold/20 shadow-soft sm:mb-4"
            >
              <img src={src} alt="" loading="lazy" className="w-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-maroon-deep/90 p-4"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={photos[lightboxIndex]}
              alt=""
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
