const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        preview: ['babel-polyfill', './preview.js']
    },
    output: {
        filename: ((env = 'develop') => {
            let assignFilename = {
                'develop': '[name].bundle.js',
                'release': '[name].bundle.js'
            };
            return assignFilename[env];
        })(process.env.NODE_ENV),
        path: path.resolve(__dirname, './dist'),
        // 靜態資源 EX: .scss 要import圖片時跟路徑從哪開始，會自動加在最前方
        // 靜態資源透過 loader 複製到 publicPath 裡
        publicPath: 'http://localhost:8000/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        alias: {
            '~': path.join(__dirname, './')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$|\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.js?$|\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|otf|eot|svg|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/i,
                loader: 'url-loader?limit=1024&name=[sha512:hash:base64:7].[ext]'
            },
            {
                test: /\.(json|JSON)$/i,
                loader: 'file-loader?name=[sha512:hash:base64:7].[ext]'
            }
            // {
            //     test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            //     loader: 'file-loader?name=fonts/[name].[ext]'
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         'url-loader?limit=10000',
            //         'img-loader'
            //     ]
            // }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: false,
        port: 8000,
        index: 'preview.html',
        overlay: {
            error: true
        }
    },
    devtool: process.env.NODE_ENV === 'develop' ? 'cheap-module-eval-source-map' : '',
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './preview.html',
            filename: 'preview.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};