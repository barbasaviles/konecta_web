'use strict';
const webpack = require('webpack');
const path = require('path');

const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.const');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: `./${config.sourceDir}/app.js`,
    output: {
        path: path.resolve(__dirname, config.publicDir)
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                include: [path.resolve(__dirname, `${config.sourceDir}/views`)],
                loader: 'vue-template-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {limit: 8192, name: 'img/[name].[hash:8].[ext]'}
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {limit: 8192, name: 'media/[name].[hash:8].[ext]'}
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {limit: 8192, name: 'fonts/[name].[hash:8].[ext]'}
            }
        ]
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, `${config.sourceDir}/`),
            '@assets': path.resolve(__dirname, `${config.sourceDir}/assets`),
            '@views': path.resolve(__dirname, `${config.sourceDir}/views`),
            '@components': path.resolve(__dirname, `${config.sourceDir}/components`),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    node: false,
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.EnvironmentPlugin({BUILD: 'web'}),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: `${config.sourceDir}/assets/html/index.html`,
        }),
        new CopyWebpackPlugin([{
            from: `${config.sourceDir}/assets/html`
        }])
    ]
};