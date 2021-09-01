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
            red: '#FD2A29',
            blue: '#3257DC',
            purple: '#FB428A',
            yellow: '#C8A9B5',
            mint: {
                'green': '#D3DABA',
                'purple': '#D8B9DA',
                'blue': '#C7D3DE',
                'pink': '#D8BABC',
            },
        },
        extend: {
            padding: {
                '26': '6.5rem'
            },
            backgroundImage: theme => ({
                'gradient-red': "url('/media/gradient-1.png')",
                'gradient-pink': "url('/media/gradient-2.png')",
                'gradient-orange': "url('/media/gradient-3.png')",
            })
        }
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