/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        cream:        "var(--color-cream)",
        "cream-dark": "var(--color-cream-dark)",
        forest:       "var(--color-forest)",
        "forest-mid": "var(--color-forest-mid)",
        leaf:         "var(--color-leaf)",
        brand: {
          red:      "var(--color-red)",
          "red-dark":"var(--color-red-dark)",
          gold:     "var(--color-gold)",
          "gold-light":"var(--color-gold-light)",
          charcoal: "var(--color-charcoal)",
          muted:    "var(--color-muted)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        script:  ["var(--font-script)"],
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
