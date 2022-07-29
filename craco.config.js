const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@img': path.resolve(__dirname, 'src/assets/img'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@router': path.resolve(__dirname, 'src/router'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@style': path.resolve(__dirname, 'src/style'),
            '@tests': path.resolve(__dirname, 'src/tests'),
            '@utils': path.resolve(__dirname, 'src/utils')
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