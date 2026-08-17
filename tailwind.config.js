/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060b1a",
          900: "#0a1128",
          800: "#0f1c3f",
          700: "#152a5c",
        },
        brand: {
          50: "#eef3ff",
          100: "#dce6ff",
          200: "#b3c9ff",
          300: "#84a6ff",
          400: "#5b82f7",
          500: "#3860e6",
          600: "#2846c2",
          700: "#1e3a8a",
          800: "#182f6e",
          900: "#132453",
        },
        sky: {
          400: "#4d9bf5",
          500: "#2f7fed",
        },
        mist: {
          50: "#f6f8fc",
          100: "#eef2f9",
          200: "#e2e8f4",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pixels":
          "radial-gradient(circle, rgba(59,130,246,0.18) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,17,40,0.06), 0 8px 24px -8px rgba(10,17,40,0.12)",
        glow: "0 0 0 1px rgba(59,130,246,0.15), 0 20px 60px -20px rgba(37,99,235,0.45)",
      },
    },
  },
  plugins: [],
}
