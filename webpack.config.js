import path from 'fs'
module.exports = {
    entry: './src/index',
    output: {
        path: `${_dirname}/public`
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
          ]    
    },
    devtool : 'source-map'
}