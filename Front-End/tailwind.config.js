/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'en': ['Poppins', 'sans-serif'],
        'ar': ['GE Dinar One', 'Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

