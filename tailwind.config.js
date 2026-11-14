/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F1E8',
          light: '#FAF7F2',
          dark: '#EAE4D8',
        },
        cream: {
          DEFAULT: '#EAE4D8',
          light: '#F2EDE4',
          dark: '#DDD5C7',
        },
        navy: {
          DEFAULT: '#172B45',
          dark: '#102238',
          midnight: '#0D1B2D',
          light: '#233E60',
        },
        mutedBlue: {
          DEFAULT: '#526B87',
          light: '#6B85A4',
          dark: '#3D526C',
        },
        champagne: {
          DEFAULT: '#C6B596',
          light: '#D6C8AF',
          dark: '#B09D7B',
        },
        slateGrey: {
          DEFAULT: '#697586',
          light: '#8E9AA8',
          dark: '#4B5565',
        },
        beigeGrey: {
          DEFAULT: '#DED8CD',
          light: '#E9E4DC',
          dark: '#CBC3B5',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

