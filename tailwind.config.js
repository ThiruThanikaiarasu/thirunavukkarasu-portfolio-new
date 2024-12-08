/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", 
      ],
    theme: {
        extend: {
            boxShadow: {
                'custom-shadow': '0px 7px 29px rgba(100, 100, 111, 0.02)', 
              },
              textAlign: {
                justify: 'justify'
              }
        },
    },
    plugins: [],
}

