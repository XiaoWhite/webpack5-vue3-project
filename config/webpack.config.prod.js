const { merge } = require('webpack-merge'); // 用于合并配置
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取 css 文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 删除旧的打包文件

// 合并配置
const baseWebpackConfig = require('./webpack.config.base.js');
const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      // 处理 css 文件
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      // 处理 scss 文件
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    // 打包时删除旧文件
    new CleanWebpackPlugin(),
    // 抽取 css 文件
    new MiniCssExtractPlugin({
      filename: `css/[name]_[contenthash:8].css` // 指定 css 文件的名称
    })
  ]
});

console.log('prodWebpackConfig --- ', prodWebpackConfig);

module.exports = prodWebpackConfig;
