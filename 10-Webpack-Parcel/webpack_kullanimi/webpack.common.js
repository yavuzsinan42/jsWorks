

//cleanwebpackplugin dist dizinindeki dosyaları temizler
//htmlwebpackplugin index.html dosyasına hashli dosyayı ekler
module.exports = { 
    entry: './src/index.js',
    
    //cotenthash cache'den kaçınmak için kullanılır.
    
    
    module: {
        rules: [
            
              {
                test: /\.html$/i,
                loader: 'html-loader',
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:4].[ext]',
                        outputPath: 'images',
                        publicPath: 'images',
                      },
                  },
                ],
              },
        ],
    }
};
//style-loader css dosyasının içindeki css kodlarının html içinde görünmesini sağlar.
//css-loader css dosyasının içindeki css kodlarının js içinde görünmesini sağlar.