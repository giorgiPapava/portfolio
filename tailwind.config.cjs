/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffb400',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'profile-picture': 'url(/profile_picture.jpg)',
        'profile-picture-small': 'url(/profile_picture_small.jpg)',
      },
    },
  },
  plugins: [require('daisyui')],
};
