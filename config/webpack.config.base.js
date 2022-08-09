const path = require('path');
const { resolve } = path;

const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 用于生成 html 文件

const config = {
  entry: {
    main: resolve(__dirname, '../src/main.js')
  },
  output: {
    path: resolve(__dirname, '../dist'), // 打包后的文件输出的目录
    filename: `js/[name]_[chunkhash:8].js` // 设置打包后的 js 文件名，如果在文件名前增加文件路径，会将打包后的 js 文件放在指定的文件夹下
  },
  module: {
    rules: [
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [
          /node_modules/,
          // \\ for Windows, / for macOS and Linux
          /node_modules[\\/]core-js/
        ]
      },
      // 处理 .vue 文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 使用 webpack 内置的资源模块，对图片资源的处理
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        type: 'asset',
        generator: {
          // 设置图片被处理之后的名称，可以通过在名字前面加路径，将图片都放置在一个文件夹下
          // 注意这里的 [ext]，它已经包含了 . ，所以不能再在[has:8] 和 [ext] 之间加上点了
          filename: 'img/[name]_[hash:8][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb，设置阈值，小于这个大小的，会被处理成 base 64 的字符串，默认是8kb
          }
        }
      },
      // 参考上面图片的处理方式，可以设置其它资源的处理方式
      // 视频、音频等
      {
        test: /\.(mp3|mp4|mov)$/,
        type: 'asset',
        generator: {
          filename: 'media/[name]_[hash:8][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb，设置阈值，小于这个大小的，会被处理成 base 64 的字符串，默认是8kb
          }
        }
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    // 生成 html 文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'), // 以根目录下的 index.html 文件为模板，生成项目的入口文件
      filename: 'index.html', // 生成的入口文件名
      chunks: ['main'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    })
  ]
};

module.exports = config;
