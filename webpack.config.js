var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'client/Router.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'index.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                'presets': ['react', 'es2015']
            }
        }, {
            test:/\.s?css$/,
            loaders: ['style', 'css', 'sass'],
            include: path.join(__dirname, 'client'),
            exclude: /node_modules/
        }]
    }
};
