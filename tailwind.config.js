/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50:  '#fff0f0',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff7b7b',
          400: '#e63946',
          500: '#c1121f',
          600: '#a00d18',
          700: '#8b0000',
          800: '#6b0000',
          900: '#450000',
        },
        dark: {
          50:  '#2a0000',
          100: '#1e0000',
          200: '#160000',
          300: '#100000',
          400: '#0a0000',
          500: '#060000',
          600: '#030000',
          700: '#010000',
        },
        cream: {
          50:  '#fff5f5',
          100: '#ffe8e8',
          200: '#ffc8c8',
          300: '#ff9999',
        },
      },
      fontFamily: {
        serif:   ['Playfair Display', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':       'fadeIn 1s ease-out forwards',
        'fade-in-up':    'fadeInUp 0.8s ease-out forwards',
        'fade-in-left':  'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in':      'scaleIn 0.6s ease-out forwards',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':     'spin 20s linear infinite',
        'gradient-shift':'gradientShift 8s ease infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(193,18,31,0.4)' },
          '50%':      { boxShadow: '0 0 50px rgba(193,18,31,0.8), 0 0 80px rgba(139,0,0,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
