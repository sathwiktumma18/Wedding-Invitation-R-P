import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionDivider from "./SectionDivider";
import { LotusMotif } from "./OrnamentalMotifs";

export default function BlessingSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative bg-ivory py-20 sm:py-28">
      <div className="section-px mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-telugu-heading text-xl text-maroon/80 sm:text-2xl"
        >
          {t.blessing.sanskrit}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`mt-5 text-maroon ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.blessing.title}
        </motion.h2>

        <SectionDivider />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mx-auto max-w-lg text-[15px] leading-relaxed text-ink/75 sm:text-lg ${
            lang === "te" ? "font-telugu-sans" : "font-body font-light"
          }`}
        >
          {t.blessing.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex justify-center text-gold/70"
        >
          <LotusMotif className="h-8 w-16" />
        </motion.div>
      </div>
    </section>
  );
}
