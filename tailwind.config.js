/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6', // Blue
        'secondary': '#10B981', // Green
        'accent': '#8B5CF6', // Purple
        'light': '#F3F4F6', // Light gray
        'dark': '#1F2937', // Dark gray/blue
        'danger': '#EF4444', // Red
        'warning': '#F59E0B', // Amber
        'info': '#3B82F6', // Blue
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3B82F6",
          secondary: "#10B981",
          accent: "#8B5CF6",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          info: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
} 