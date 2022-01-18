const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setting = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devServer: {
        static: './build',
    },
    // PLUGIN
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Yeni HTML',
        }),
    ],
    module: {
        rules: [
            // STYLE CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // IMAGE
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // FONT
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            // XML DATA
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
}

module.exports = setting