/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Our Custom Brand Palette
                primary: '#0F5132',   // Deep Solar Green (Trust)
                secondary: '#198754', // Lighter Green (Growth)
                accent: '#FFC107',    // Sun Yellow (Energy/Joy)
                dark: '#212529',      // Dark text
                light: '#F8F9FA',     // Light background
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}