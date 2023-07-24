const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './build/**/*.{html,js}'
    ],
    theme: {
        screens: {
            'xs': '375px',
            ...defaultTheme.screens,
        },
        fontFamily: {
            'sans': ['"Helvetica Neue LT W05 55 Roman"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#FFF',
            gray: '#F2F2F2',
            red: '#ED0B0A',
            blue: '#3257DC',
            pink: '#FE98FC',
            blueish: '#87BFFF',
            purple: {
                '400': '#8938D1',
                '500': '#5438D1',
            },
            yellow: '#F9BA43',
            green: '#71CE5A',
            orange: '#FF7544',
            mint: {
                'green': '#D3DABA',
                'purple': '#D8B9DA',
                'blue': '#C7D3DE',
                'pink': '#D8BABC',
            },
        },
        extend: {
            backgroundImage: {
                'blue-gradient': "url('/media/po-cover-bg.png')",
                'purple-gradient': "url('/media/srm-cover-bg.png')",
                'orange-gradient': "url('/media/bor-cover-bg.png')",
                'ocean-blue-gradient': "url('/media/dbp-cover-bg.jpg')",
                'blood-orange-gradient': "url('/media/kettle-hero-bg.png')",
                'green-gradient': "url('/media/oz-cover-bg.png')",
                'sky-gradient': "url('/media/joeni-cover-bg.png')",
                'black-gradient': "url('/media/edl-gradient-black.png')",
                'bubble-gradient': "url('/media/edl-gradient-bubble.png')",
                'radial-yellow': "radial-gradient(41.33% 41.33% at 50% 50%, #ffc738 0%, rgba(248,232,225,0) 100%)",
                'radial-heaven': "radial-gradient(41.33% 41.33% at 50% 50%, rgba(252,164,69,1) 0%, rgba(148,187,233,0) 100%)",
                'radial-green': "radial-gradient(41.33% 41.33% at 50% 50%, #D3DABA 0%, rgba(181,252,70,0) 100%)",
            },
            padding: {
                '26': '6.5rem'
            },
            fontSize: {
                '4.5xl': '2.75rem',
                '7.5xl': '5.25rem',
                '8.5xl': '7rem',
            },
            spacing: {
                '104': '26rem',
                '120': '30rem',
                '160': '40rem',
                '208': '52rem',
                '256': '64rem',
            },
            gridTemplateColumns: {
                'section': 'fit-content(35%) 1fr',
                'contact': 'fit-content(56%) 1fr',
            },
            screens: {
                '3xl': '2000px',
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
                marqueeCopy: 'marqueeCopy 40s linear infinite',
            },
            keyframes: {
                marquee: {
                  '0%': { transform: 'translateX(0%)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
                marqueeCopy: {
                  '0%': { transform: 'translateX(100%)' },
                  '100%': { transform: 'translateX(0%)' },
                },
            },
        },
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('@tailwindcss/forms'),
        
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    
                    '@screen sm': {
                        maxWidth: '96%',
                    },
                    '@screen lg': {
                        maxWidth: '96%',
                    },
                    '@screen 2xl': {
                        maxWidth: '92%',
                    },
                    '@screen 3xl': {
                        maxWidth: '1820px',
                    },
                }
            })
        }
    ],
}