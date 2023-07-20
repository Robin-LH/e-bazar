/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        dark: "#252C32",
        white: "#F8FBFF",
        light: "#F7F7F7",
        darkGray: "#777777",
        lightGray: "#E5E9EB",
      },
    },
  },
  plugins: [],
};
