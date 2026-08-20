import { useMemo, type CSSProperties } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 6 + Math.random() * 7,
    duration: 16 + Math.random() * 14,
    delay: -(Math.random() * 20),
    drift: (Math.random() - 0.5) * 120,
    opacity: 0.25 + Math.random() * 0.3,
  }));
}

/**
 * Ambient, very low-density petal drift. Pointer-events are disabled so it
 * never interferes with buttons or text. Petal count is reduced on small
 * screens and removed entirely when the user prefers reduced motion.
 */
export default function FloatingPetals({ density = "normal" }: { density?: "normal" | "low" }) {
  const reducedMotion = useReducedMotion();
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;
  const count = reducedMotion ? 0 : density === "low" || isSmallScreen ? 6 : 12;

  const petals = useMemo(() => makePetals(count), [count]);

  if (petals.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 rounded-full bg-gold-light/70"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 0.7,
              opacity: p.opacity,
              filter: "blur(0.2px)",
              "--drift": `${p.drift}px`,
              animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
              borderRadius: "60% 40% 60% 40%",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
