module.exports = {
    content: ["*.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
            icon: ['Podkova'],
            roboto: ['Roboto Condensed'],
            comfortaa: ['Comfortaa'],
            Ubuntu: ['Ubuntu'],
            Poppins: ['Poppins']

        },
        backgroundImage: {
            banner: "url('./images/banner 1.png')",
            bg: "url('./images/bg.svg')",
            gradient1: "linear-gradient(to top, #e5faf2 0%, #fff 100%)"
        },
        animation: {
            wiggle: 'wiggle 0.5s ease-in-out',
        },
        keyframes: {
            wiggle: {
                '0%': { transform: 'translateY(-50px)' },
                '100%': { transform: 'translateY(0)' },
            }
        },
        plugins: [],
    }
}