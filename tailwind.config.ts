import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { // 7c2d12, 431407, ea580c, red: 991b1b
        "xp-taskbar" : "",
        "w7-taskbar": "",
        "w2000-taskbar": "",
      },
      backgroundImage: {
        'xp': "url('/windowsXP.webp')",
        'w7': "url('/windows7.webp')",
        'w2000': "url('/windows2000.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
