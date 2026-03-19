import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Finance-style color palette
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          950: '#020617',
        },
        accent: {
          DEFAULT: '#0ea5e9', // Sky blue
          dark: '#0284c7',
          light: '#38bdf8',
        },
        success: '#10b981', // Emerald for positive
        warning: '#f59e0b', // Amber for cautionary
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
