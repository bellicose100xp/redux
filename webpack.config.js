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
                loader: "style-loader!css-loader"
            }
        ]
    }
}