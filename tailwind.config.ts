/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./studio/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#8CA685",
        cream: "#F2EBDC",
        brown: "#A67051",
        ink: "#0D0D0D",
        magenta: "#F249C5",
        purple: "#A62E92",
        cyan: "#2BB9D9",
        orange: "#F2911B",
        slate: {
          950: "#050505",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(242, 73, 197, 0.22)",
        neon: "0 0 32px rgba(242, 73, 197, 0.2)",
        "glow-sage": "0 0 40px rgba(140, 166, 133, 0.15)",
        "glow-cyan": "0 0 50px rgba(43, 185, 217, 0.18)",
        "elevated": "0 20px 60px rgba(0, 0, 0, 0.4)",
        "card": "0 10px 40px rgba(242, 73, 197, 0.08)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(138, 175, 133, 0.14), transparent 24%), radial-gradient(circle at right, rgba(242, 73, 197, 0.12), transparent 20%), linear-gradient(180deg, rgba(13, 13, 13, 1) 0%, rgba(22, 22, 22, 0.98) 45%, rgba(13, 13, 13, 1) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(138, 166, 133, 0.08) 0%, rgba(242, 73, 197, 0.06) 100%)",
        "gradient-magenta": "linear-gradient(135deg, rgba(242, 73, 197, 0.1) 0%, rgba(166, 46, 146, 0.05) 100%)",
        "gradient-cyan": "linear-gradient(135deg, rgba(43, 185, 217, 0.1) 0%, rgba(138, 166, 133, 0.05) 100%)",
        "accent-gradient": "linear-gradient(90deg, #8CA685 0%, #2BB9D9 50%, #F249C5 100%)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 40px rgba(242, 73, 197, 0.3)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 60px rgba(242, 73, 197, 0.5)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "fadeIn": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
