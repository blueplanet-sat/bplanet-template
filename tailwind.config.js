/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#007BFF',
                secondary: '#0056B3',
                accent: '#1E90FF',
                lightBlue: '#E6F0FF',
                darkBlue: '#001F3F',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}