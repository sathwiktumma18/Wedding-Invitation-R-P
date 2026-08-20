import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { ArchDivider } from "./OrnamentalMotifs";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="relative bg-maroon-deep py-14 text-center sm:py-16">
      <div className="section-px mx-auto max-w-md">
        <ArchDivider className="mx-auto h-6 w-40 text-gold/60" />
        <p
          className={`mt-5 text-ivory ${
            lang === "te" ? "font-telugu-heading text-2xl" : "font-display italic text-3xl"
          }`}
        >
          {config.bride[lang]} <span className="text-gold-light">&</span> {config.groom[lang]}
        </p>
        <p className="mt-2 font-body text-sm tracking-[0.3em] text-gold-light/80">
          {t.footer.dateStamp}
        </p>
        <p className={`mt-4 text-xs text-ivory/50 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
