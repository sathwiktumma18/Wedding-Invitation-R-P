import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import { copy, type Lang } from "../data/weddingData";

interface LanguageContextValue {
  lang: Lang;
  t: (typeof copy)[Lang];
  toggleLang: () => void;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Telugu is the default; visitors can switch to English from the nav.
  const [lang, setLang] = useState<Lang>("te");

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: copy[lang],
      toggleLang: () => setLang((prev) => (prev === "en" ? "te" : "en")),
      setLang,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
