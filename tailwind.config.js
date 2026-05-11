/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF7",
        secondary: "#F4F6F8",
        text: {
          heading: "#111111",
          body: "#5F6368",
        },
        accent: {
          sky: "#E0F2FE",
          aqua: "#F0FDFA",
          mint: "#F0FDF4",
          peach: "#FFF7ED",
          teal: "#0D9488",
          electric: "#2563EB",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['General Sans', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #E0F2FE 0%, #F0FDFA 25%, #F0FDF4 50%, #FFF7ED 100%)',
      }
    },
  },
  plugins: [],
}
