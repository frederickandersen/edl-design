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
            'sans': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
            'serif': ['"EB Garamond"', 'Times', 'serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: '#E8EBE8',
            blackish: '#1B1A19',
            red: '#ED0B0A',
            blue: '#3257DC',
            purple: '#FB428A',
            yellow: '#F9BA43',
            green: '#B3D46A',
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
            backgroundImage: theme => ({
                'gradient-red': "url('/media/gradient-1.png')",
                'gradient-pink': "url('/media/gradient-2.png')",
                'gradient-orange': "url('/media/gradient-3.png')",
            }),
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                marquee: 'marquee 30s linear infinite',
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