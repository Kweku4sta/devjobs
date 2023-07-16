/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myVioletColor: "var(--myVioletColor)",
        myLightVioletColor: "var(--myLightVioletColor)",
        myVeryDarkBlueColor: "var(--myVeryDarkBlueColor)",
        myMidnightColor: "var(--myMidnightColor)",
        myWhiteColor: "var(--myWhiteColor)",
        myLightGreyColor: "var(--myLightGreyColor)",
        myGrayColor: "var(--myGrayColor)",
        myDarkGrayColor: "var(--myDarkGrayColor)",
        myDayLightColor: "var(--myDayLightColor)",
      },
    },
  },
  plugins: [],
};
