/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#4F46E5', // Indigo-600
            secondary: '#6366F1', // Indigo-500
            accent: '#EC4899', // Pink-500
            dark: '#1F2937', // Gray-800
            light: '#F9FAFB', // Gray-50
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideInLeft: {
              '0%': { opacity: '0', transform: 'translateX(-20px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            slideInRight: {
              '0%': { opacity: '0', transform: 'translateX(20px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            pulseOnce: {
              '0%, 100%': { opacity: '1', transform: 'scale(1)' },
              '50%': { opacity: '0.7', transform: 'scale(1.05)' },
            },
            menuOpen: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(0)' },
            },
            menuClose: {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(100%)' },
            },
            hamburgerTop: {
              '0%': { transform: 'translateY(0) rotate(0)' },
              '50%': { transform: 'translateY(8px) rotate(0)' },
              '100%': { transform: 'translateY(8px) rotate(45deg)' },
            },
            hamburgerMiddle: {
              '0%': { opacity: '1' },
              '100%': { opacity: '0' },
            },
            hamburgerBottom: {
              '0%': { transform: 'translateY(0) rotate(0)' },
              '50%': { transform: 'translateY(-8px) rotate(0)' },
              '100%': { transform: 'translateY(-8px) rotate(-45deg)' },
            },
            hamburgerTopReverse: {
              '0%': { transform: 'translateY(8px) rotate(45deg)' },
              '50%': { transform: 'translateY(8px) rotate(0)' },
              '100%': { transform: 'translateY(0) rotate(0)' },
            },
            hamburgerMiddleReverse: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            hamburgerBottomReverse: {
              '0%': { transform: 'translateY(-8px) rotate(-45deg)' },
              '50%': { transform: 'translateY(-8px) rotate(0)' },
              '100%': { transform: 'translateY(0) rotate(0)' },
            },
          },
          animation: {
            fadeInUp: 'fadeInUp 0.8s ease-out forwards',
            slideInLeft: 'slideInLeft 0.8s ease-out forwards',
            slideInRight: 'slideInRight 0.8s ease-out forwards',
            pulseOnce: 'pulseOnce 1s ease-in-out',
            menuOpen: 'menuOpen 0.3s ease-out forwards',
            menuClose: 'menuClose 0.3s ease-in forwards',
            hamburgerTop: 'hamburgerTop 0.3s ease-out forwards',
            hamburgerMiddle: 'hamburgerMiddle 0.3s ease-out forwards',
            hamburgerBottom: 'hamburgerBottom 0.3s ease-out forwards',
            hamburgerTopReverse: 'hamburgerTopReverse 0.3s ease-in forwards',
            hamburgerMiddleReverse: 'hamburgerMiddleReverse 0.3s ease-in forwards',
            hamburgerBottomReverse: 'hamburgerBottomReverse 0.3s ease-in forwards',
          },
        },
      },
      plugins: [],
    };
