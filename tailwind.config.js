/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: {
          sunbeam: "#DAC062",
        },
      },
      backgroundImage: {
        "hero-section-image": "url('/src/assets/images/HeroSectionImage.png')",
      },
    },
  },
  plugins: [],
};
