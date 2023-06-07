/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        voteButton: 'hsl(223, 19%, 93%)',
        button: 'hsl(239, 57%, 85%)',
        vote: 'hsl(212, 24%, 26%)',
        username: 'hsl(212, 24%, 26%)',
        createdAt: 'hsl(211, 10%, 45%)',
        replyTo: 'hsl(238, 40%, 52%)',
        delete: "hsl(358, 79%, 66%)",
        edit: 'hsl(238, 40%, 52%)',
        cancel: 'hsl(212, 24%, 26%)',
      }
    },
  },
  plugins: [],
}
