const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, '/src/index.js')
  ],
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      "node_modules",  //MUST BE FIRST
      "./containers"
    ],
    alias: {
    },
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles SASS to CSS
        }]
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/public',
    historyApiFallback: true
  }
}
