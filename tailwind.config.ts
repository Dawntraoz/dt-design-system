import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./storyblok/**/*.vue",
    "./nuxt.config.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        spline: "Spline Sans Mono, monospace",
      },
      colors: {
        black: {
          DEFAULT: "rgb(var(--color-black) / <alpha-value>)",
          light: "rgb(var(--color-black-light) / <alpha-value>)",
        },
        white: "rgb(var(--color-white) / <alpha-value>)",
        grey: "rgb(var(--color-grey) / <alpha-value>)",
        fantasy: {
          orange: "rgb(var(--color-fantasy-orange) / <alpha-value>)",
          yellow: "rgb(var(--color-fantasy-yellow) / <alpha-value>)",
          green: "rgb(var(--color-fantasy-green) / <alpha-value>)",
          blue: "rgb(var(--color-fantasy-blue) / <alpha-value>)",
          pink: "rgb(var(--color-fantasy-pink) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "fantasy-gradient": `linear-gradient(-45deg, rgb(var(--color-fantasy-orange)) 0%, rgb(var(--color-fantasy-yellow)) 25%, rgb(var(--color-fantasy-green)) 50%, rgb(var(--color-fantasy-blue)) 75%, rgb(var(--color-fantasy-pink)) 100%)`,
      },
      animation: {
        wiggle: "wiggle .5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
    },
    container: {
      padding: "1.5rem",
      center: true,
    },
  },
  plugins: [],
};
