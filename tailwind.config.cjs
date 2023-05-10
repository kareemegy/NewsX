

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "dark-md": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        dark: "0px 4px 14px rgba(45, 45, 45, 0.08)",
        light: "0px 4px 14px rgba(245, 245, 245, 0.08)",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
        info: "var(--info)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        background: "var(--background)",
        blue: "#7795f8",
        wizardBlue: "#f8fafc",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/line-clamp")],
};
