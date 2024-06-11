/** @type {import('tailwindcss').Config} */
module.exports = {
    //Projede hangi dosyalarda tailwind kulland���m�z� kontrol etmesi i�in yaz�yoruz
    content: ['./**/*.{razor,html,cshtml}'],
  theme: {
    extend: {},
  },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            "dark",
            "black",
            "night",
            "sunset",
        ],
    },
}

