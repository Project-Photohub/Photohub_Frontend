/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            "text": {
                "black": "#000000",
                "white": "#EEEEEE",
                "subtext2": "#A1A1A1",
                "subtext3": "#898989"
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
        },
        fontFamily: {
            'pretendard': ['Pretendard'],
            'p-extra-light': ['Pretendard ExtraLight'],
            'p-light': ['Pretendard Light'],
            'p-thin': ['Pretendard Thin'],
            'p-medium': ['Pretendard Medium'],
            'p-regular': ['Pretendard'],
            'p-semi-bold': ['Pretendard SemiBold'],
            'p-extra-bold': ['Pretendard ExtraBold'],
            'p-black': ['Pretendard Black'],

            'preahvihear': ['Preahvihear', 'Pretendard']
        }
    },
    plugins: [],
}

