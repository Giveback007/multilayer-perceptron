const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: __dirname + '/dist/index.html',
        hot: true,
        port: 9000
    },
    entry: { app:"./src/index.tsx", },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: { transpileOnly: true }
                }],
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: { sourceMaps: true }
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: { sourceMaps: true }
                }]
            }, {  // png files don't load, need fix
                test: /\.(jpg|png||woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }]
            },
            // Alternatively use file-loader
            // {
            //     test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: "assets/[name].[ext]",
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Neural Network',
            template: './src/index.html',
            filename: 'index.html',
            favicon: 'src/favicon.png'
        }),
        // For HMR, makes it easier to see which dependencies are being patched
        new webpack.NamedModulesPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
        // new webpack.EnvironmentPlugin({ dev: true })
    ],
    externals: { }
}
