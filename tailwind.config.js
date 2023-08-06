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
        extend: {
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