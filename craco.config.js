const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@img': path.resolve(__dirname, 'src/assets/img'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@router': path.resolve(__dirname, 'src/router'),
            '@style': path.resolve(__dirname, 'src/style')
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    },
};