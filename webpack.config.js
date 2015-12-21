var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './dist'
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
            //   loader: "style!css"
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.sass$/,
                exclude: /(node_modules|bower_components)/,
               // loader: "style!css!sass?indentedSyntax"
                loader: ExtractTextPlugin.extract("style", "css!sass?indentedSyntax")
            }
        ]
    }
};