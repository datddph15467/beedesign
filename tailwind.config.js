module.exports = {
    content: ["*.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
            icon: ['Podkova'],
            roboto: ['Roboto Condensed'],
            comfortaa: ['Comfortaa']
        },
        backgroundImage: {
            banner: "url('./images/banner 1.png')",
            bg: "url('./images/bg.svg')",
            gradient1: "linear-gradient(to top, #e5faf2 0%, #fff 100%)"
        },
        plugins: [],
    }
}