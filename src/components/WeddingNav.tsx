import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { MonogramArch } from "./OrnamentalMotifs";

const SECTIONS: { id: string; key: "home" | "couple" | "details" | "venue" | "family" | "rsvp" | "wishes" }[] = [
  { id: "hero", key: "home" },
  { id: "couple", key: "couple" },
  { id: "details", key: "details" },
  { id: "venue", key: "venue" },
  { id: "family", key: "family" },
  { id: "rsvp", key: "rsvp" },
  { id: "wishes", key: "wishes" },
];

export default function WeddingNav() {
  const { t, lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // Outer element owns the static centering transform (left-1/2 + -translate-x-1/2).
    // The entrance animation lives on an inner element instead of this one —
    // Framer Motion writes its own inline `transform`, which would otherwise
    // silently overwrite the Tailwind translate-x utility on the same node.
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 sm:top-5">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`glass-panel flex items-center justify-between rounded-full border border-gold/25 px-3 py-2 transition-shadow sm:px-5 ${
            scrolled ? "shadow-glass" : "shadow-soft"
          }`}
        >
          <button
            onClick={() => goTo("hero")}
            aria-label="Scroll to top"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-maroon"
          >
            <MonogramArch className="h-8 w-8" />
          </button>

          {/* Desktop links */}
          <div
            className={`hidden flex-1 items-center justify-center gap-6 text-[13px] font-medium uppercase text-maroon-deep md:flex ${
              lang === "te" ? "font-telugu-sans" : "font-body tracking-wider"
            }`}
          >
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className="transition-colors hover:text-gold-deep"
              >
                {t.nav[s.key]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggleLang}
              className="rounded-full border border-gold/40 px-3 py-1.5 font-body text-xs font-semibold text-maroon transition-colors hover:bg-gold/10"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-maroon" : "text-maroon/40"}>{t.lang.en}</span>
              <span className="mx-1 text-gold/50">|</span>
              <span className={lang === "te" ? "text-maroon font-telugu-heading" : "text-maroon/40 font-telugu-heading"}>
                {t.lang.te}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-maroon md:hidden"
            >
              <div className="flex flex-col gap-[5px]">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-5 bg-current"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[1.5px] w-5 bg-current"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-5 bg-current"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel mt-2 overflow-hidden rounded-3xl border border-gold/25 shadow-glass md:hidden"
            >
              <div className="flex flex-col divide-y divide-gold/15">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(s.id)}
                    className={`px-6 py-3.5 text-left text-lg text-maroon-deep ${
                      lang === "te" ? "font-telugu-heading" : "font-display italic"
                    }`}
                  >
                    {t.nav[s.key]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
