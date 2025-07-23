/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0a2540',
                secondary: '#3a4e7a',
                accent: '#5e83ba',
                lightBlue: '#c2d2e9',
                lightwhite: '#f1f1f0',
                navyDark: '#0a1325',
            },
            fontFamily: {
                sans: ['"Readex Pro"', 'Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif']
            },
            keyframes: {
               slideInFromLeft: {
                '0%':   { opacity: '0', transform: 'translateX(-100px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInFromRight: {
                '0%':   { opacity: '0', transform: 'translateX(100px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            animation: {
                'slide-in-left':  'slideInFromLeft 0.7s ease-out forwards',
                'slide-in-right': 'slideInFromRight 0.7s ease-out forwards',
            },
        },
    },
    plugins: [],
}