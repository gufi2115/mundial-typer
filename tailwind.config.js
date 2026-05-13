module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#111827',
        'darker': '#0f172a',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
