const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = withTypescript(withCSS(withLess({
    webpack(config, options) {
        if (config.resolve.alias) {
            delete config.resolve.alias.react;
            delete config.resolve.alias['react-dom'];
        }
        return config;
    }
})));