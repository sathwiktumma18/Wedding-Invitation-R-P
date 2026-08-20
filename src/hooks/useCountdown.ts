import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function computeTimeLeft(targetISO: string): TimeLeft {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Live countdown to a target ISO datetime (with timezone offset baked in,
 * e.g. "2026-08-30T10:55:00+05:30" for IST). Updates every second, never
 * goes negative, and stops cleanly once the date has passed.
 */
export function useCountdown(targetISO: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft(targetISO));

  useEffect(() => {
    if (timeLeft.isPast) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = computeTimeLeft(targetISO);
        if (next.isPast && !prev.isPast) {
          clearInterval(interval);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetISO]);

  return timeLeft;
}
