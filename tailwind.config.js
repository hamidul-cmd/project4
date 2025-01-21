/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xll: '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        pro:['Be Vietnam Pro'],
      },
      colors: {
        Orange__50:"#FF9500",
        Orange__70:"#FFBF66",
        Orange__75:"#FFCA80",
        Orange__80:"#FFD499",
        Orange__90:"#FFEACC",
        Orange__95:"#FFF4E5",
        Orange__97:"#FFF9F0",
        Orange__99:"#FFFDFA",
        

        
        white__90:"#E4E4E7",
        white__95:"#F1F1F3",
        white__97:"#F7F7F8",
        white__99:"#FCFCFD",

        

        gray__10:"#191919",
        gray__15:"#262626",
        gray__20:"#333333",
        gray__30:"#4C4C4D",
        gray__35:"#59595A",
        gray__40:"#656567",
        gray__60:"#98989A",
        gray__70:"#B3B3B3",
      },
      spacing: {
        0.5:'2px',
        1.5: '6px',
        1.9: '9px',
        2.5: '10px',
        3.5: '14px',

        4.5: '16px',
        4.8: '18px',
        5.3: '23px',
        6.5: '25px',
        6.6: '26px',
        7.5: '30px',
        8.5: '34px',
        10.5: '42px',
        10.6: '44px',
        40.2: '162px',
        12.5: '50px',
        12.6: '54px',
        14.5: '60px',
        14.7: '62px',
        16.5: '70px',
        24.5: '100px',
        33: '132px',
        36.5: '150px',

      },
      maxWidth: ({ theme, breakpoints }) => ({
        ...theme('spacing'),
        wrapper: '1920px',
        ...breakpoints(theme('screens')),
      }),
      fontSize: {
        fs_22: '1.375rem',
        fs_26: '1.625rem',
        fs_28: '1.75rem',
        fs_38: '2.375rem',
        fs_58: '3.625rem',
        fs_40: '2.5rem',
        fs_50: '3.125rem',
        fs_60: '3.75rem',
        fs_80: '5rem',

      },
      lineHeight: {
        15:'150%',
        7.5:'73%',
        12: '120%',
      },
      boxShadow: {
        ss1: '0px 0px 0px 4px #FFF4E5'
      },
    },
  },
  plugins: [],
}

