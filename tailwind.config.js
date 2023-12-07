/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
     sm: '480px',
      },
    colors:{
      mainTextColor: '#212121',
      primaryTextColor: '#757575',
      mainIconColor:'#afb1b8',
      hoverIconColor: '#2196f3',
      mainButtonColor: '#2196f3',
      hoverButtonColor: '#188ce8',
      footerBackgroundColor:'2f303a',
      footerMainTextColor: '#fff',
      footerPrimaryTextColor: 'rgba(255, 255, 255, 0.60)',
      logoDesignColor: '#2196f3',
      whiteTextColor:'#fff',
      
    },
    boxShadow:{
      buttonShadow: 'rgba(0, 0, 0, 0.15)'
    },
    extend: {
      backgroundImage: {
        'mob-hero-bg': "url('../public/mob-hero-bg.jpg')" ,
        'tab-hero-bg': "url('../public/tab-hero-bg.jpg')" ,
        'desk-hero-bg': "url('../public/desk-hero-bg.jpg')" ,
      },
      backgroundColor:{
       'main-bg-color': '#f5f4fa',
        'hero-bg': "rgba(47, 48, 58, 0.40)"
      }
    },
  },
  plugins: [],
}
