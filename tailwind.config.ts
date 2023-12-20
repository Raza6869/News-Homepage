import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Soft-orange": "hsl(35, 77%, 62%)",
        "Soft-red": "hsl(5, 85%, 63%)",
        "Off-white": "hsl(36, 100%, 99%)",
        "Grayish-blue": "hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
export default config;
