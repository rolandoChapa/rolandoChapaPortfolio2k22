module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
        screens: {
            'sm': '667px',
            // => @media (min-width: 640px) { ... }

            'md': '750px',
            // => @media (min-width: 768px) { ... }

            'lg': '1280px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1536px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '2160px',
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'charcoal': '#36454F',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
            'ghost': '#f8f8ff',
        },
        extend: {},
    },
  plugins: [require("daisyui")],
}
