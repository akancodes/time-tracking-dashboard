module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "hsl(246, 80%, 60%)",
        "light-red-work": "hsl(15, 100%, 70%)",
        "soft-blue-play": "hsl(195, 74%, 62%)",
        "light-red-study": "hsl(348, 100%, 68%)",
        "lime-green-exercise": "hsl(145, 58%, 55%)",
        "violet-social": "hsl(264, 64%, 52%)",
        "soft-orange": "hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
