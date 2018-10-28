const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval',
  output: {
      path: path.join(__dirname, './dist'),
      filename: 'apollooks.js',
      library: 'apollooks',
      libraryTarget: 'umd',
      publicPath: '/dist/',
      umdNamedDefine: true
  },
  module: {
    rules : [
      {
          test: /\.js$/,
          use: ["babel-loader"],
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    }
  }
}
