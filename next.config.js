// next.config.js
const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');
const withLess = require('@zeit/next-less');

module.exports = withLess(withTypescript({
    webpack(config, options) {
        if (config.resolve.alias) {
            delete config.resolve.alias.react;
            delete config.resolve.alias['react-dom'];
        }
        config.module.rules.push({
            test: /\.less$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader'
            ]
        })
        return config;
    }
}));