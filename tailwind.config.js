/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#4FB6F4", // The cerulean blue from the scooter
                navy: "#1e3a5f",
                "background-light": "#F8FAFC",
                "background-dark": "#0F172A",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Lexend", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                'xl': "1.25rem",
            },
        },
    },
    plugins: [],
}
