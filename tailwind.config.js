/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      animation: {
        'gradual-bounce': 'gradualBounce 2s ease-in-out infinite',
      },
      keyframes: {
        gradualBounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in',
          },
          '30%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
          '70%': {
            transform: 'translateY(-5px)',
          },
          '90%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
