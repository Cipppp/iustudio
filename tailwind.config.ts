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
        "bg-main-color": "#fff"
      },
      screens: {
        'xss': '240px',   // Extra small devices
        'xs': '480px',   // Extra small devices
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1536px', // 2x large devices
        '3xl': '1792px', // 3x large devices
        '4xl': '1920px', // 4x large devices
        '5xl': '2560px',
      },
    },
  },
  plugins: [],
};
export default config;
