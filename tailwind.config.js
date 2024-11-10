/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
    colors: {
      darkBlue: '#07161E',
      blue: '#13222A',
      lightBlue: '#336D8B',
      primaryFont: 'white',
      secondaryFont: '#B8B8B8',
      gray: '#4A6D7C',
    },
    container: {
      center: 'true',
      screens: {
        sm: '90vw',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        xxl: '1600px',
        xxxl: '1800px',
      },
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
