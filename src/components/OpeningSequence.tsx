import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ArchDivider } from "./OrnamentalMotifs";

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const { t, lang } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const holdMs = reducedMotion ? 400 : 1700;
    const timer = window.setTimeout(() => setVisible(false), holdMs);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* faint floating particles */}
          {!reducedMotion && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-gold/50"
                  style={{ left: `${10 + i * 11}%`, top: `${20 + (i % 3) * 20}%` }}
                  animate={{ opacity: [0, 0.7, 0], y: [0, -16, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center px-8 text-center"
          >
            <ArchDivider className="mb-6 h-8 w-48 text-gold" />
            <p
              className={`text-2xl text-maroon sm:text-3xl ${
                lang === "te" ? "font-telugu-heading" : "font-display italic"
              }`}
            >
              {t.opening.line1} {t.opening.line2} {t.opening.line3}
            </p>
            <p
              className={`mt-3 text-[11px] uppercase text-gold-deep ${
                lang === "te" ? "font-telugu-sans" : "font-body tracking-widest2"
              }`}
            >
              {t.opening.sub}
            </p>
            <ArchDivider className="mt-6 h-8 w-48 rotate-180 text-gold" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
