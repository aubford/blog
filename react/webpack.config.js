var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    devtool: 'eval-source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            // 'styles': __dirname + '/src/styles',
            // 'mixins': __dirname + '/src/mixins',
            'components': __dirname + '/src/components/',
            'stores': __dirname + '/src/stores',
            'actions': __dirname + '/src/actions'
            // 'lib': __dirname + '/src/lib'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel?presets[]=react,presets[]=es2015', exclude: /node_modules/},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.css/, loader: 'style!css'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    }
};