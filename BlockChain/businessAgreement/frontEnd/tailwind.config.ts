import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        explorerFont : ['explorerFont']
        // titleFont : ['titleFont'],
        // headerFont : ['headerFont'],
        // EthereumOverviewFont : ['EthereumOverviewFont'],
        // numberFont : ['numberFont'],
        // gunmetl : ['gunmetl'],
        // number2 : ['Dalgona Candy'],
      },
      animation: {
        "slide-up-fade-in": "slideUpFadeIn 1s ease-out",
        'change-height-zero-to-auto':'changeHeightZeroToAuto 1s ease-out',
        'change-height-to-auto':'changeHeightToAuto 1s ease-out',
        'change-position':'changePosition 1s ease-out',
      },
      keyframes: {
        slideUpFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        changeHeightZeroToAuto: {
          "0%": {
            height: "0px",
            overflow: "hidden",
          },
          "100%": {
            height: "auto",
          },
        },
        changeHeightToAuto: {
          "0%": {
            height: "64px",
            overflow: "hidden",
          },
          "100%": {
            height: "auto",
          },
        },
        changePosition: {
          "0%": {
            positions: "absolute",
            top: "-17px",
          },
          "100%": {
            position: "relative",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: "#e9ecef",
        aqua: "#00FFFF",
        yellow: "#DFFA0F",
        main_background_color: "#091E36",
        main_search_bar: "#0670A6",
        body_border: "#DDEEF7",
        body_time_color: "#A0A0A0",
        body_link_text_color: "#0784C3",
        footer: "#F8F9FA",
        footer_text: "#6C757D",
      },
      textColor: {
        test: {
          gr: "#e9ecef",
        },
        itemDetail: {
          textLabelColor: "#6C757D",
          inventoryKeyColor: "#6c757d",
          txGasInfoColor: "#212529",
        },
      text :{
          mainTextColor:"rgb(163,204,163)"
        }
      },
      borderColor: {
        txDetail: {
          moreDetailBorderRight: "#ADB5BD",
        },
      },
      //
      backgroundColor: {
        modalBackgroundColor: "rgba(0, 0, 0, 0.5);",
        mainBackGroundColor: "#fafbfd",
        searchBarBackGroundColor: "rgb(248,249,250)",
        txDetail: {
          inputData: "#e9ecef",
        },
        datkMode:{
          'wrapBG':'#111'
        }
      },
      minWidth: {
        itemTable: "300px",
      },
      screens: {
        sm: {  max: "768px" },
        md: { min: "768px", max: "990px" },
        lg: { min: "990px" },
      },

    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
