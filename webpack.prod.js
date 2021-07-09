'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const common = require('./webpack.config');
const config = require('./webpack.const');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        publicPath: config.prod.public_path
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            }
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '.'
        },
        minimizer: [
            new TerserPlugin({
                parallel: true,
                cache: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            USE_SERVICEWORKER: JSON.stringify(true),
            API_ENDPOINT: JSON.stringify(config.prod.api_endpoint),
            KINTO_ENDPOINT: JSON.stringify(config.prod.kinto_endpoint),
            NODE_ENDPOINT: JSON.stringify(config.prod.node_endpoint),
            TOKEN_MAPBOX: JSON.stringify(config.prod.token_mapbox)
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackPwaManifest({
            name: config.app.name,
            short_name: config.app.name,
            start_url: '/',
            description: config.app.description,
            background_color: config.pwa.color.background,
            theme_color: config.pwa.color.theme,
            icons: [
                {
                    src: path.resolve(`${config.sourceDir}/${config.pwa.icon}`),
                    sizes: [96, 128, 192, 256, 384, 512]
                }
            ]
        }),
        new OfflinePlugin({
            autoUpdate: 1000 * 60 * 60,
            version: '[hash]',
            AppCache: false,
            ServiceWorker: {
                events: true
            },
            caches: {
                main: [':rest:']
            }
        }),
        new CleanWebpackPlugin([config.publicDir], {
            beforeEmit: true,
            exclude: ['index.php', '.htaccess']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        })
    ]
});