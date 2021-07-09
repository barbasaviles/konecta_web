'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.config');
const config = require('./webpack.const');
const urlDevServer = `http://localhost:${config.devPort}/`;

module.exports = merge(common, {
    mode: 'development',
    output: {
        publicPath: urlDevServer
    },
    devServer: {
        hot: true,
        overlay: true,
        quiet: true,
        host: '0.0.0.0',
        port: config.devPort,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            USE_SERVICEWORKER: JSON.stringify(false),
            API_ENDPOINT: JSON.stringify(config.dev.api_endpoint),
            KINTO_ENDPOINT: JSON.stringify(config.dev.kinto_endpoint),
            NODE_ENDPOINT: JSON.stringify(config.dev.node_endpoint),
            TOKEN_MAPBOX: JSON.stringify(config.dev.token_mapbox)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`Application running on ${urlDevServer}`],
            },
        })
    ]
});