import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4f46e5',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          slate: '#64748b',
          light: '#f8fafc',
          dark: '#0f172a'
        }
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.08)',
        medium: '0 10px 25px rgba(0, 0, 0, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'lg-soft': '0 20px 45px rgba(0, 0, 0, 0.08)'
      },
      backgroundImage: {
        'subtle-gradient': 'linear-gradient(135deg, rgba(79, 70, 229, 0.02), rgba(139, 92, 246, 0.02))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
