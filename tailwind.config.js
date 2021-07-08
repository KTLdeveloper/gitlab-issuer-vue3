module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.vue'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                black: {
                    600: '#666666',
                    650: '#4d4d4d',
                    700: '#404040',
                    750: '#333333',
                    800: '#262626',
                    850: '#2c2c24',
                    900: '#1f1f1f',
                    950: '#191919',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
