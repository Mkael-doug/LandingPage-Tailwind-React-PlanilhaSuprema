/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Graphite Black (Slate 900)
        primary: "#4338ca",    // Royal Blue (Indigo 700)
        secondary: "#7e22ce",  // Neon Purple (Purple 700)
        accent: "#38bdf8",     // Sky Blue for glow
        "neon-blue": "#00f3ff",
        "neon-purple": "#bf00ff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
