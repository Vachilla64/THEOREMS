/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#242424",
          light: "#2a2a2a",
        },
        safety: {
          DEFAULT: "#FF8C00",
          muted: "#e67e00",
        },
        /** Align with :root in src/index.css */
        brand: {
          light: "#38bdf8",
          dark: "#0369a1",
        },
        cred: "#ed1c24",
        cblue: "#2e3192",
        cdblue: "#04192b",
        cgreen: "#009444",
        cyellow: "#f9ed32",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        "card-lg": "1.25rem",
      },
    },
  },
  plugins: [],
}
