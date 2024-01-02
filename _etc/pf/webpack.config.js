const { TailwindWebpackPlugin } = require('tailwind-cra-webpack-plugin')

module.exports = {
    webpack: {
        plugins: [new TailwindWebpackPlugin(require.resolve('./src/index.css'))],
    },
}
