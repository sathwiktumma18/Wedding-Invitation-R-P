import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "../data/weddingData";
import { useLanguage } from "../context/LanguageContext";

const MAX_PLAY_SECONDS = 60; // auto-stop after 1 minute of playback

export default function MusicPlayer() {
  const { t, lang } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const hasTriedAutoplay = useRef(false);
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playedSecondsRef = useRef(0);
  const playStartRef = useRef<number | null>(null);

  // Track cumulative playback and stop after MAX_PLAY_SECONDS
  const startStopTimer = useCallback(() => {
    if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
    const remaining = MAX_PLAY_SECONDS - playedSecondsRef.current;
    if (remaining <= 0) {
      // Already exceeded — stop immediately
      audioRef.current?.pause();
      setPlaying(false);
      return;
    }
    playStartRef.current = Date.now();
    stopTimerRef.current = setTimeout(() => {
      audioRef.current?.pause();
      setPlaying(false);
      playedSecondsRef.current = MAX_PLAY_SECONDS;
    }, remaining * 1000);
  }, []);

  const clearStopTimer = useCallback(() => {
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
    // accumulate elapsed time
    if (playStartRef.current !== null) {
      playedSecondsRef.current += (Date.now() - playStartRef.current) / 1000;
      playStartRef.current = null;
    }
  }, []);

  const startPlaying = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playedSecondsRef.current >= MAX_PLAY_SECONDS) return; // already done
    audio
      .play()
      .then(() => {
        setPlaying(true);
        startStopTimer();
      })
      .catch(() => {
        setPlaying(false);
      });
  }, [startStopTimer]);

  // Attempt autoplay immediately on mount
  useEffect(() => {
    startPlaying();
  }, [startPlaying]);

  // Fallback: retry on first user interaction if autoplay was blocked
  useEffect(() => {
    const tryStartOnFirstInteraction = () => {
      if (hasTriedAutoplay.current) return;
      const audio = audioRef.current;
      if (!audio || !audio.paused) return;
      hasTriedAutoplay.current = true;
      startPlaying();
    };

    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "scroll"];
    events.forEach((ev) => window.addEventListener(ev, tryStartOnFirstInteraction, { once: true }));
    return () => {
      events.forEach((ev) => window.removeEventListener(ev, tryStartOnFirstInteraction));
    };
  }, [startPlaying]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      clearStopTimer();
    } else {
      if (playedSecondsRef.current >= MAX_PLAY_SECONDS) return; // already done
      startPlaying();
    }
    setShowLabel(true);
    window.setTimeout(() => setShowLabel(false), 1600);
  };

  return (
    <>
      <audio ref={audioRef} src={config.assets.music} preload="auto" />
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
