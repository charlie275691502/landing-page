import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'bauhaus': ['Bauhaus Chez Display', 'Bauhaus 93', 'sans-serif'],
        'dot-gothic': ['var(--font-dot-gothic)', 'monospace'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'asap': ['var(--font-asap)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;