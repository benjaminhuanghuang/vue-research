 const path = require('path');


 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     publicPath: 'xuni'
   },
   devServer: {
     contentBase:"www",
     compress: false,
     port: 8080
   }
 }     