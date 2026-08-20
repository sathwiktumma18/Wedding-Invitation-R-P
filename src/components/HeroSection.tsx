import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config, coupleImages } from "../data/weddingData";
import { ArchDivider } from "./OrnamentalMotifs";
import FloatingPetals from "./FloatingPetals";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-maroon-deep sm:items-center sm:justify-center"
    >
      {/* Couple photograph */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={coupleImages.heroWebp} type="image/webp" />
          <motion.img
            src={coupleImages.hero}
            alt={`${config.bride.en} and ${config.groom.en}`}
            className={`h-full w-full object-cover object-[50%_22%] ${
              reducedMotion ? "" : "animate-kenburns"
            }`}
            fetchPriority="high"
            style={{ willChange: "transform" }}
          />
        </picture>

        {/* Warm ivory overlay for legibility, kept light so the photo stays the focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/55 via-maroon-deep/15 to-maroon-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/25 via-transparent to-transparent" />
        {/* subtle light leak, top right */}
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold-light/20 blur-3xl" />
        {/* vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(51,9,15,0.55)]" />
      </div>

      <FloatingPetals />

      {/* Hero content */}
      <div className="section-px relative z-10 w-full pb-16 pt-40 text-center sm:pb-24 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className={`text-[11px] font-semibold uppercase tracking-widest2 text-ivory/90 sm:text-xs ${
            lang === "te" ? "font-telugu-sans" : "font-body"
          }`}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className={`mx-auto mt-4 max-w-xl text-ivory drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] ${
            lang === "te" ? "font-telugu-heading" : "font-display italic"
          }`}
        >
          <span className="block text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl">
            {config.bride[lang]}
          </span>
          <span className="my-1 block text-2xl not-italic text-gold-light sm:my-2 sm:text-3xl">
            {t.hero.and}
          </span>
          <span className="block text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl">
            {config.groom[lang]}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
          className="mx-auto mt-6 flex justify-center text-gold-light"
        >
          <ArchDivider className="h-6 w-44 sm:w-56" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className={`mt-6 text-ivory/95 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}
        >
          <p className={`text-sm font-semibold sm:text-base ${lang === "en" ? "tracking-[0.2em]" : ""}`}>
            {t.hero.dateLine}
          </p>
          <p className={`mt-1 text-xs text-ivory/80 sm:text-sm ${lang === "en" ? "tracking-[0.15em]" : ""}`}>
            {t.hero.timeLine}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          className={`mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-ivory/90 sm:text-base ${
            lang === "te" ? "font-telugu-sans" : "font-body font-light"
          }`}
        >
          {t.hero.invite}
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-ivory/70"
        >
          <span className={`text-[10px] uppercase ${lang === "te" ? "font-telugu-sans" : "tracking-widest2"}`}>
            {t.hero.scroll}
          </span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1" />
            <circle cx="7" cy="6" r="1.4" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
