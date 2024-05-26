import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'xp-taskbar': '#225DDA',
                'xp-taskbar_setting': '#1390e9',
                'xp-app-select': "#2951f0",
                'xp-right-click-menu': "#F5F3F8",
                'w7-taskbar': '',
                'w2000-taskbar': '',
            },
            backgroundImage: {
                xp: "url('/windowsXP.webp')",
                w7: "url('/windows7.webp')",
                w2000: "url('/windows2000.webp')",
            },
            keyframes: {
                rainbow: {
                    '0%': { color: 'red' },
                    '16%': { color: 'orange' },
                    '33%': { color: 'yellow' },
                    '50%': { color: 'green' },
                    '66%': { color: 'blue' },
                    '83%': { color: 'indigo' },
                    '100%': { color: 'red' },
                },
            },
            animation: {
                rainbow: 'rainbow 0.7s linear infinite',
            },
            rotate: {
                '90': '90deg'
            }
        },
    },
    plugins: [],
};
export default config;
