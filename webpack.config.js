const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './js/index.js',
    output: {
        filename: 'js/[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: isDev ? 'source-map' : false,
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        hot: false,
        liveReload: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss/,
                use: [
                    isDev ? 'style-loader' :
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp3|ogg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug/,
                loader: 'pug-loader',
                options: {
                    pretty: isDev ? true : false,
                },
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: './pages/index.pug',
            filename: 'index.html',
            favicon: './assets/img/vaporwave.ico',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
    ]
};