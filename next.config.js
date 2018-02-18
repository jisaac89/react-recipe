// next.config.js
const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');

module.exports = withTypescript({
    webpack(config, options) {
        if (config.resolve.alias) {
            delete config.resolve.alias.react;
            delete config.resolve.alias['react-dom'];
        }
        return config;
    }
});