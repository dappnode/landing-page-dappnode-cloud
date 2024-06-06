/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' based on media query
  theme: {
    extend: {
      colors: {
        dappnodeBlue1: "#06D4E7",
        dappnodeBlue2: "#00B1F4",
        dappnodeBlue3: "#007DFC",
        dappnodeYellow: "#FFB900",
        dappnodeOrange: "#FC9E22",
        dappnodePink: "#E60AF6",
        dappnodePurple: "#9333ea",
        dappnodeNavy: "#002C41",
        dappnodeGrey1: "#DDDDDD",
        dappnodeGrey2: "#FC9E22",
        dappnodeGrey3: "#C2C2C2",
        dappnodeGrey4: "#E60AF6",
        dappnodeGrey5: "#3D3D3D",
        dappnodeDarkText: "#F8F8F8",
        dappnodeDarkPrimary: "#7A27D3",
        dappnodeBgLight: "#F8F8F8",
        dappnodeBgDark: "#1A1A1A",
        dappnodeBgDarkHeaderFooter: "#282828",
        dappnodeBgLightHeaderFooter: "#FFFFFF",
        dappnodeBgDarkLayout: "#121212",
        dappnodeBgLightLayout: "#F8F8F8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        modeg: ["modeg", "sans-serif"],
      },
      keyframes: {
        moveInitial: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        moveLeftToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "cloud-initial": "moveInitial 150s  linear ",
        "cloud-slow": "moveLeftToRight 250s  linear infinite",
        "cloud-mid": "moveLeftToRight 200s  linear infinite",
        "cloud-fast": "moveLeftToRight 150s  linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
