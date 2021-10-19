// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        'src/*.html',
        'build/**/*.html',
    ],
    theme: {
        fontFamily: {
            'sans': ['"Helvetica Neue LT W05 55 Roman"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
            'serif': ['"EB Garamond"', 'Times', 'serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: '#E8EBE8',
            red: '#ED0B0A',
            blue: '#3257DC',
            purple: '#FB428A',
            yellow: '#F9BA43',
            green: '#71CE5A',
            mint: {
                'green': '#D3DABA',
                'purple': '#D8B9DA',
                'blue': '#C7D3DE',
                'pink': '#D8BABC',
            },
        },
        minHeight: {
            '104': '26rem',
            '160': '40rem',
        },
        extend: {
            padding: {
                '26': '6.5rem'
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                marquee: 'marquee 50s linear infinite',
                'spin-slow': 'spin 10s linear infinite',
            },
            spacing: {
                '104': '26rem',
                '120': '30rem',
                '160': '40rem',
                '208': '52rem',
                '256': '64rem',
            },
        },
    },
    variants: {
        scrollSnapType: ['responsive'],
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-scroll-snap'),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '96%',
                    },
                    '@screen 2xl': {
                        maxWidth: '1536px',
                    },
                }
            })
        }
    ],
}