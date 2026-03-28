/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#1A1A2E',
          surface: '#16213E',
          card: '#0F3460',
          red: '#D32F2F',
          redHover: '#B71C1C',
          muted: '#8892A4',
          text: '#E8EAF0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  },
  plugins: []
}
