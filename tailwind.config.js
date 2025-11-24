/*****************
 * Tailwind Config for Design Arena
 *****************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0b0b11",
        neon: {
          purple: "#9a6cff",
          magenta: "#ff66c4",
          cyan: "#66e0ff",
        },
      },
      boxShadow: {
        neon: "0 0 30px rgba(154,108,255,0.35), 0 0 60px rgba(102,224,255,0.2)",
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 0px rgba(154,108,255,0.0))' },
          '50%': { filter: 'drop-shadow(0 0 12px rgba(154,108,255,0.55))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(154,108,255, 0.45)' },
          '70%': { boxShadow: '0 0 0 15px rgba(154,108,255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(154,108,255, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2.5s ease-out infinite',
        shimmer: 'shimmer 2.2s linear infinite',
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 50% 0%, rgba(154,108,255,0.25), transparent 40%), radial-gradient(circle at 10% 80%, rgba(102,224,255,0.15), transparent 35%), radial-gradient(circle at 90% 20%, rgba(255,102,196,0.15), transparent 35%)',
      }
    },
  },
  plugins: [],
};
