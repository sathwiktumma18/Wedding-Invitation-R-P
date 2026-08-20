import { motion } from "framer-motion";
import { ArchDivider } from "./OrnamentalMotifs";
import { useLanguage } from "../context/LanguageContext";

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex justify-center py-2 text-gold ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <ArchDivider className="h-6 w-40 sm:w-56" />
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  return (
    <p
      className={`text-center text-[11px] sm:text-xs uppercase text-gold-deep font-semibold ${
        lang === "te" ? "font-telugu-sans" : "font-body tracking-widest2"
      }`}
    >
      {children}
    </p>
  );
}
