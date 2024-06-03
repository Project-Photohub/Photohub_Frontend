/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            "text": {
                "black": "#000000",
                "text-white": "#EEEEEE"
            },
            "header": {
                "default": "#323232",
                "hover": "#383838"
            },
            "background": {
                "default": "#2C2C2C",
                "hover": "#303030",
                "highlight": "#3A3A3A"
            },
            "textfield": {
                "line": "#4B4B4B"
            },
            "photocard": {
                "stroke": "#575757",
                "addicon": "#434343"
            },
            "blur": {
                "default": "rgba(51,51,51,0.5)",
                "invisible": "rgba(255,255,255,0)",
            }
        }
    },
    plugins: [],
}

