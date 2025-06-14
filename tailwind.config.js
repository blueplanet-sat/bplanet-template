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
            },
            fontFamily: {
                sans: ['"Readex Pro"', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}