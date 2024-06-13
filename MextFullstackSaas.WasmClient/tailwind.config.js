/** @type {import('tailwindcss').Config} */
module.exports = {
    //Projede hangi dosyalarda tailwind kulland���m�z� kontrol etmesi i�in yaz�yoruz
    content: ['./**/*.{razor,html,cshtml}'],
  theme: {
      extend: {
          fontFamily: {
              poppins: ['Poppins', 'sans-serif'],
              // You can add other font families if needed
          },
      },
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

