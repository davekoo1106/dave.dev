import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#2B77E7',
        secondary: '#222f3e',
        background: '#fcfcfc',
        text: '#32302f',
        header: '#3182CE',
        paragraph: '#4A5568'
      },
      fontFamily: {
        worksans: ['WorkSans-Regular', 'sans-serif'],
        worksansmedium: ['WorkSans-Medium', 'sans-serif'],
        worksanssemibold: ['WorkSans-SemiBold', 'sans-serif'],
        worksansbold: ['WorkSans-Bold', 'sans-serif'],
        worksansitalic: ['WorkSans-Italic','sans-serif'],
        worksansbolditalic: ['WorkSans-BoldItalic','sans-serif'],
        worksanslight: ['WorkSans-Light','sans-serif'],
        worksanslightitalic: ['WorkSans-LightItalic','sans-serif']
      },
      animation: {
        text: 'text 4s ease-in-out infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position':'right center'
          }
        },
      }
    },
  },
  plugins: [],
};
export default config;
