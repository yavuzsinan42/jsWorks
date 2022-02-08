const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//cleanwebpackplugin dist dizinindeki dosyaları temizler
//htmlwebpackplugin index.html dosyasına hashli dosyayı ekler
module.exports =merge(common, { 
    
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: { 
            collapseWhitespace: true, //boşlukları kaldırır.
            collapseInlineTagWhitespace: true, //inline taglarının boşluklarını kaldırır.
            minifyURLs: true, //url'leri kısa yapar.
            preserveLineBreaks: true, 
            removeComments: true, //yorum satırlarını kaldırır.
            removeAttributeQuote: true, //çift tırnakları kaldırır.
        }
    })],
    module: {
        rules: [
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