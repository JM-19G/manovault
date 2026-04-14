/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Used throughout the UI via bg-accent/text-accent/border-accent.
        // Matches Tailwind's cyan-400 vibe used elsewhere in the app.
        accent: "#22d3ee",
      },
    },
  },
  plugins: [],
}
