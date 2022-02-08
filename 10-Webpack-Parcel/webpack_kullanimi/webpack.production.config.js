const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

//cleanwebpackplugin dist dizinindeki dosyaları temizler
//htmlwebpackplugin index.html dosyasına hashli dosyayı ekler
module.exports = merge(common, {

    //cotenthash cache'den kaçınmak için kullanılır.
    mode: 'production',
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                
                terserOptions: {
                    compress: {
                        drop_console: true,//console.logları siler
                    },
                },
            }),
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),//webpack işlemlerinin durumunu gösterir
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),//dist dizinindeki dosyaları temizler

        new MiniCssExtractPlugin({ //css dosyalarının çıktısının başka bir dosyaya aktarılmasını sağlar
            filename: '[name].[hash:4].css'
        })],
    module: {
        rules: [
            {
                test: /\m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']

                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  //"style-loader",
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    }

});
//style-loader css dosyasının içindeki css kodlarının html içinde görünmesini sağlar.
//css-loader css dosyasının içindeki css kodlarının js içinde görünmesini sağlar.