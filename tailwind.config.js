/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        // xs:'12px',
        // sm:'16px',
        // base:'18px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
