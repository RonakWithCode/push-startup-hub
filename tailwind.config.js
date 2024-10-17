/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-red': '#f05742',  // Add this line with your preferred red color

      },
    },
  },
  plugins: [],
};
