/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeOut: {
                    "0%, 70%": { opacity: "1" },
                    "100%": { opacity: "0", pointerEvents: "none" },
                },
            },
            animation: {
                "fade-out": "fadeOut 4s ease-in-out forwards",
            },
        },
    },
    plugins: [require("daisyui")],
};
