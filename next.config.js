const withTypescript = require('@zeit/next-typescript');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = withCSS(withLess(withTypescript({
    distDir: '/.next',
    webpack: (config) => {

        config.plugins.push(new ExtractTextPlugin({
            filename: '/_next/static/style.css',
            allChunks: true,
        }));

        return config;
    }
})));