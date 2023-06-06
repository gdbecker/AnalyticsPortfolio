/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: { 
      "white": "hsl(0, 0%, 100%)",
      "gray": "#48494d",
      "lightBlue": "#79d9ff",
      "darkBlue": "#37bae8",
      "lightYellow": "hsl(49, 90%, 70%)",
      "lightYellowTransparent": "hsla(49, 90%, 70%, 0.7)",
      "mediumYellow": "hsl(44, 87%, 48%)",
      "mediumYellowTransparent": "hsla(44, 87%, 48%, 0.7)",
      "darkYellow": "#b27c00",
      "lightGray": "hsl(0, 0%, 81%)",
    },
    extend: {
      fontFamily: {
        interRegular: "Inter-Regular",
        interBold: "Inter-Bold",
        interMedium: "Inter-Medium",
      },
    },
  },
  plugins: [],
}
