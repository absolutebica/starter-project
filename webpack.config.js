const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/js/index.js",
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.(scss|css)$/,
            use: [
                {
                    // creates style nodes from JS strings
                    loader: "style-loader",
                    options: {
                        injectType: "styleTag"
                    }
                },
                {
                    // translates CSS into CommonJS
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    // compiles Sass to CSS
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};