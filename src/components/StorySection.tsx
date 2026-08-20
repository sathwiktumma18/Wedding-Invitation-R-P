import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

export default function StorySection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-maroon py-20 sm:py-28">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="section-px relative mx-auto max-w-2xl text-center">
        <Eyebrow>
          <span className="text-gold-light">{t.story.eyebrow}</span>
        </Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mt-2 text-ivory ${
            lang === "te" ? "font-telugu-heading text-2xl sm:text-3xl" : "font-display italic text-3xl sm:text-4xl"
          }`}
        >
          {t.story.title}
        </motion.h2>

        <SectionDivider className="text-gold-light" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={`mx-auto max-w-lg text-[15px] leading-relaxed text-ivory/85 sm:text-lg ${
            lang === "te" ? "font-telugu-sans" : "font-body font-light"
          }`}
        >
          {t.story.body}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className={`mx-auto mt-4 max-w-lg text-[15px] italic leading-relaxed text-gold-light/90 sm:text-lg ${
            lang === "te" ? "font-telugu-sans not-italic" : "font-display"
          }`}
        >
          {t.story.body2}
        </motion.p>
      </div>
    </section>
  );
}
