module.exports = {
    mode: "jit",
    purge: [
        "./src/**/*.html",
        "./src/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF0000",
                secondary: "#00FF00"
            }
        }
    },
    variants: {},
    plugins: []
}