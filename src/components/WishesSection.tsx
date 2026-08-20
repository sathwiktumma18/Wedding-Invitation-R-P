import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";

export default function WishesSection() {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // NOTE: front-end only right now — nothing is persisted or sent anywhere.
    // Wire this up to a backend/database before relying on it to collect
    // real messages from guests.
    setSent(true);
    setName("");
    setMessage("");
  };

  return (
    <section id="wishes" className="relative overflow-hidden bg-maroon py-20 sm:py-28">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="section-px relative mx-auto max-w-lg text-center">
        <Eyebrow>
          <span className="text-gold-light">{t.wishes.eyebrow}</span>
        </Eyebrow>
        <h2
          className={`mt-2 text-ivory ${
            lang === "te" ? "font-telugu-heading text-3xl sm:text-4xl" : "font-display italic text-4xl sm:text-5xl"
          }`}
        >
          {t.wishes.title}
        </h2>
        <p className={`mt-3 text-ivory/75 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>{t.wishes.body}</p>
        <SectionDivider className="text-gold-light" />

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-3xl border border-gold/30 bg-ivory/10 px-6 py-8"
            >
              <p className={`text-gold-light ${lang === "te" ? "font-telugu-heading text-xl" : "font-display italic text-2xl"}`}>
                {t.wishes.sent}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex flex-col gap-3 rounded-3xl border border-gold/25 bg-ivory/5 p-6 text-left sm:p-8"
            >
              <label className="sr-only" htmlFor="wish-name">
                {t.wishes.namePlaceholder}
              </label>
              <input
                id="wish-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.wishes.namePlaceholder}
                className={`rounded-xl border border-gold/25 bg-ivory/95 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold ${
                  lang === "te" ? "font-telugu-sans" : "font-body"
                }`}
              />
              <label className="sr-only" htmlFor="wish-message">
                {t.wishes.messagePlaceholder}
              </label>
              <textarea
                id="wish-message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.wishes.messagePlaceholder}
                rows={3}
                className={`resize-none rounded-xl border border-gold/25 bg-ivory/95 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold ${
                  lang === "te" ? "font-telugu-sans" : "font-body"
                }`}
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className={`mt-1 self-center rounded-full bg-gold px-8 py-3 text-xs font-semibold uppercase text-maroon-deep shadow-soft transition-transform hover:scale-[1.03] ${
                  lang === "te" ? "font-telugu-sans" : "tracking-widest2"
                }`}
              >
                {t.wishes.submit}
              </motion.button>
              <p
                className={`mx-auto mt-1 max-w-xs text-center text-[11px] leading-relaxed text-ivory/40 ${
                  lang === "te" ? "font-telugu-sans" : ""
                }`}
              >
                {t.wishes.note}
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
