const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [ path.resolve('index.web.tsx') ],
    output: { path: path.resolve('dist'), publicPath: '/' },
    resolve: {
        extensions: [ '.web.tsx', '.web.ts', '.tsx', '.ts', '.js', '.json' ],
        alias: {
            '@': path.resolve('source', 'common'),
            '~': path.resolve('source', 'scenes'),
            '%': path.resolve('assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve('source', 'index.html'),
            inject: 'body'
        })
    ]
};