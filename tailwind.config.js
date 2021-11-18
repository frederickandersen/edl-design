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
            backgroundImage: {
                'blue-gradient': "url('/media/po-cover-bg.png')",
                'purple-gradient': "url('/media/srm-cover-bg.png')",
                'orange-gradient': "url('/media/bor-cover-bg.png')",
                'green-gradient': "url('/media/oz-cover-bg.png')",
                'radial-yellow': "radial-gradient(41.33% 41.33% at 50% 50%, #ffc738 0%, rgba(248,232,225,0) 100%)",
                'radial-heaven': "radial-gradient(41.33% 41.33% at 50% 50%, rgba(252,164,69,1) 0%, rgba(148,187,233,0) 100%)",
                'radial-green': "radial-gradient(41.33% 41.33% at 50% 50%, #D3DABA 0%, rgba(181,252,70,0) 100%)",
            },
            padding: {
                '26': '6.5rem'
            },
            fontSize: {
                '4.5xl': '2.75rem',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                'marquee': 'marquee 50s linear infinite',
                'spin-slow': 'spin 10s linear infinite',
            },
            spacing: {
                '104': '26rem',
                '120': '30rem',
                '160': '40rem',
                '208': '52rem',
                '256': '64rem',
            },
            zIndex: {
                '-1': '-1',
            },
            gridTemplateColumns: {
                'section': 'fit-content(35%) 1fr',
                'contact': 'auto 1fr',
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
                        maxWidth: '88%',
                    },
                }
            })
        }
    ],
}