import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Sora', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050816',
          900: '#0b1020',
          800: '#111827',
        },
        electric: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        aurora: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(52, 211, 153, 0.12), 0 20px 60px rgba(5, 8, 22, 0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config;
