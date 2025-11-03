/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        red: {
          600: '#E50914',
          700: '#B80710',
        }
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(229, 9, 20, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(229, 9, 20, 0.1) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-pattern': '50px 50px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}