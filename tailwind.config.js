/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens:{
    //   sm:'480px',
    //   md:'368px',
    //   lg:'476px',
    //   xl:'1440px',
    // },
    
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    // },
    extend: {
      fontSize:{
        xs:'12px',
        sm:'15',
        base:'18px',
      },
      colors:{
        vuejs:"#49e659"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
