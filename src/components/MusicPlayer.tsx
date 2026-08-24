import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "../data/weddingData";
import { useLanguage } from "../context/LanguageContext";

export default function MusicPlayer() {
  const { t, lang } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const hasStartedRef = useRef(false);

  const startPlaying = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (hasStartedRef.current && !audio.paused) return; // already playing
    audio
      .play()
      .then(() => {
        setPlaying(true);
        hasStartedRef.current = true;
      })
      .catch(() => {
        // Autoplay blocked — will retry on user interaction
        setPlaying(false);
      });
  }, []);

  // Attempt autoplay immediately on mount
  useEffect(() => {
    startPlaying();
  }, [startPlaying]);

  // Fallback: retry on first user interaction if autoplay was blocked (especially mobile)
  useEffect(() => {
    const tryOnInteraction = () => {
      const audio = audioRef.current;
      if (!audio || !audio.paused) return;
      startPlaying();
    };

    // These events cover mobile and desktop interaction gestures
    const events: (keyof WindowEventMap)[] = [
      "pointerdown",
      "touchstart",
      "click",
      "keydown",
      "scroll",
    ];
    events.forEach((ev) =>
      window.addEventListener(ev, tryOnInteraction, { once: false, passive: true })
    );

    // Also try when page becomes visible (e.g. user switches back to tab)
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        tryOnInteraction();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, tryOnInteraction));
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [startPlaying]);

  // Clean up listeners once audio is playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      startPlaying();
    }
    setShowLabel(true);
    window.setTimeout(() => setShowLabel(false), 1600);
  };

  return (
    <>
      <audio ref={audioRef} src={config.assets.music} preload="auto" loop />
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <AnimatePresence>
          {showLabel && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className={`glass-panel rounded-full border border-gold/30 px-3 py-1.5 text-[11px] font-medium text-maroon shadow-soft ${
                lang === "te" ? "font-telugu-sans" : "font-body"
              }`}
            >
              {playing ? t.music.on : t.music.off}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.button
          onClick={toggle}
          whileTap={{ scale: 0.9 }}
          aria-label={playing ? t.music.pause : t.music.play}
          aria-pressed={playing}
          className="glass-panel flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-maroon shadow-glass"
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            animate={playing ? { rotate: 360 } : { rotate: 0 }}
            transition={playing ? { duration: 6, repeat: Infinity, ease: "linear" } : {}}
          >
            <path
              d="M9 18V5l11-2v13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
          </motion.svg>
        </motion.button>
      </div>
    </>
  );
}
