/** @type {import('tailwindcss').Config} */
module.exports = {
    //Projede hangi dosyalarda tailwind kullandýðýmýzý kontrol etmesi için yazýyoruz
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

