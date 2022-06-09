module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // tailwind themes here
    },
  },
  daisyui: {
    themes: false,
    // false means it won't apply daisy ui theme
  },
  plugins: [require("daisyui")],
}
