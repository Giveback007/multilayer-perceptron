const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: __dirname + '/dist/index.html',
        hot: true,
        port: 9000
    },
    entry: {
        app:"./src/app.ts",
    },
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
                test: /\.ts?$/, 
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
            }
        ],
        rules: [
            { 
                test: /\.tsx?$/, 
                use: [
                /* npm install babel-loader react-hot-loader -D */
                // {
                //     loader: 'babel-loader',
                //     options: { plugins: ['react-hot-loader/babel'] }
                // },
                {
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
            }, 
            /* npm install url-loader -D */
            // {
            //     test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 100000
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html',
            filename: 'index.html',
            favicon: 'src/favicon.ico'
        }),
        // For HMR, makes it easier to see which dependencies are being patched
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        //
    }
}
