import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../data/weddingData";
import { Eyebrow } from "./SectionDivider";
import SectionDivider from "./SectionDivider";
import { CornerMotif, JasmineSprig } from "./OrnamentalMotifs";
import FloatingPetals from "./FloatingPetals";

export default function TeluguInvitation() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ivory-deep/60 py-20 sm:py-28">
      <div className="section-px relative mx-auto max-w-2xl text-center">
        <Eyebrow>{t.telugu.eyebrow}</Eyebrow>
        <h2 className="mt-2 font-telugu-heading text-3xl text-maroon sm:text-4xl">{t.telugu.title}</h2>
        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative mt-8 overflow-hidden rounded-[28px] border-2 border-gold/40 bg-ivory px-6 py-10 shadow-card sm:px-12 sm:py-14"
        >
          <FloatingPetals density="low" />
          <CornerMotif className="pointer-events-none absolute -left-3 -top-3 h-20 w-20 text-gold/30" />
          <CornerMotif className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rotate-90 text-gold/30" />
          <CornerMotif className="pointer-events-none absolute -bottom-3 -left-3 h-20 w-20 -rotate-90 text-gold/30" />
          <CornerMotif className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 rotate-180 text-gold/30" />

          <div className="relative font-telugu-heading text-maroon">
            <p className="text-base text-maroon/70 sm:text-lg">
              శ్రీరస్తు! శుభమస్తు!! అవిఘ్నమస్తు!!!
            </p>

            <p className="mt-6 text-2xl sm:text-3xl">కళ్యాణ శుభలేఖ</p>
            <p className="mt-2 text-sm text-maroon/70 sm:text-base">మా ఏకైక పుత్రిక</p>

            <p className="mt-4 text-3xl sm:text-4xl">{config.bride.te}</p>
            <p className="my-1 text-base text-gold-deep">వివాహము</p>
            <p className="text-3xl sm:text-4xl">{config.groom.te}</p>

            <div className="mx-auto my-6 flex justify-center text-gold/60">
              <JasmineSprig className="h-6 w-6" />
            </div>

            <p className="mx-auto max-w-md font-telugu-sans text-[15px] leading-loose text-ink/75">
              ({config.groomFamily.address_te} గ్రామ వాస్తవ్యులు {config.groomFamily.father_te} -{" "}
              {config.groomFamily.mother_te} {config.groomFamily.relation_te}) తో జరిపించుటకు వేద
              పండితులచే నిశ్చయించబడినది.
            </p>

            <p className="mt-8 text-xl sm:text-2xl">సుముహూర్తం</p>
            <p className="mt-2 font-telugu-sans text-base text-ink/80">
              {config.weddingDateDisplay_te} {config.muhurthamTime_te}
            </p>
            <p className="mt-1 font-telugu-sans text-sm text-ink/60">
              ({config.nakshatram_te} - {config.lagnam_te})
            </p>

            <p className="mt-8 text-xl sm:text-2xl">కళ్యాణ వేదిక</p>
            <p className="mt-2 font-telugu-sans text-base text-ink/80">{config.venue.name_te}</p>
            <p className="font-telugu-sans text-sm text-ink/60">{config.venue.address_te}</p>

            <p className="mt-8 text-xl sm:text-2xl">విందు</p>
            <p className="mt-2 font-telugu-sans text-base text-ink/80">
              {config.lunchTime_te} కన్వెన్షన్ హాల్ నందు
            </p>

            <div className="mx-auto my-8 h-px w-24 bg-gold/40" />

            <p className="mx-auto max-w-md font-telugu-sans text-[15px] italic leading-loose text-maroon/80">
              పచ్చని పెళ్లి పందిరిలో వేదమంత్రాల సాక్షిగా మూడుముళ్ళ బంధంతో ఏకమవుతున్న నూతన
              వధూవరులకు ఈ శుభవేళలో మీ చల్లని దీవెనలకై మా ఆహ్వానం
            </p>

            <p className="mt-8 text-sm text-maroon/70">మీ ఆగమనాభిలాషులు</p>
            <p className="mt-2 text-xl sm:text-2xl">
              {config.brideFamily.father_te} - {config.brideFamily.mother_te}
            </p>

            <div className="mx-auto my-8 h-px w-24 bg-gold/40" />

            <p className={`mt-2 text-[15px] italic leading-loose text-maroon/80 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
              {lang === "te"
                ? "మా చెల్లి పెళ్లికి తప్పక రారండి"
                : "Maa chelli pelliki thappaka raarandi"}
            </p>
            <p className={`mt-1 text-sm text-maroon/70 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
              — {lang === "te" ? "హనుమాన్ సాయి" : "Hanuman Sai"}
            </p>

            <p className={`mt-6 text-[15px] italic leading-loose text-maroon/80 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
              {lang === "te"
                ? "మా వదిన పెళ్లికి తప్పకుండా రారండి"
                : "Maa vadina pelliki thappakunda raarandi"}
            </p>
            <p className={`mt-1 text-sm text-maroon/70 ${lang === "te" ? "font-telugu-sans" : "font-body"}`}>
              — {lang === "te" ? "వధ సాత్విక్" : "Vadha Sathwik"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
