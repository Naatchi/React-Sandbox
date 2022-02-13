const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
        screens: {
            xs: '320px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blurple: '#5865F2',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
