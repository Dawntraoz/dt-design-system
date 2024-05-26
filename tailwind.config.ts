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
        black: "var(--color-black)",
        'black-light': "var(--color-black-light)",
        white: "var(--color-white)",
        grey: "var(--color-grey)",
        fantasy: {
          orange: "var(--color-fantasy-orange)",
          yellow: "var(--color-fantasy-yellow)",
          green: "var(--color-fantasy-green)",
          blue: "var(--color-fantasy-blue)",
          pink: "var(--color-fantasy-pink)",
        },
      },
      backgroundImage: {
        "fantasy-gradient": `linear-gradient(-45deg, var(--color-fantasy-orange) 0%, var(--color-fantasy-yellow) 25%, var(--color-fantasy-green) 50%, var(--color-fantasy-blue) 75%, var(--color-fantasy-pink) 100%)`,
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
