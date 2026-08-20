/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FBF6EA",
          deep: "#F3EAD4",
          dusk: "#EDE1C4",
        },
        maroon: {
          light: "#8A2432",
          DEFAULT: "#6E1423",
          deep: "#4A0D18",
          950: "#33090F",
        },
        gold: {
          light: "#DCC084",
          DEFAULT: "#AD8A46",
          deep: "#8C6B31",
        },
        ink: "#2B1B14",
        rose: "#B5563F",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        telugu: ["'Noto Serif Telugu'", "serif"],
        "telugu-sans": ["'Noto Sans Telugu'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(74, 13, 24, 0.18)",
        soft: "0 4px 24px -8px rgba(74, 13, 24, 0.12)",
        glass: "0 8px 32px -8px rgba(74, 13, 24, 0.15)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        petalFall: {
          "0%": { transform: "translate3d(0,-10vh,0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.5" },
          "100%": {
            transform: "translate3d(var(--drift,20px),110vh,0) rotate(180deg)",
            opacity: "0",
          },
        },
        kenburns: {
          "0%": { transform: "scale(1.04) translate(0,0)" },
          "100%": { transform: "scale(1.14) translate(-1%,-1%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        kenburns: "kenburns 22s ease-out forwards",
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
