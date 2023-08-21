import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "sky-600": "#0284c7",
      "sky-300": "#bae6fd",
      "sky-500": "#0ea5e9"
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated')],
});