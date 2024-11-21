const { ModuleFederationPlugin } = require('webpack').container;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    publicPath: 'auto',
    uniqueName: "mfe4"

  },
  resolve: {
    extensions: ['.js', '.jsx'],  // This ensures Webpack resolves JSX files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react',
      filename: 'remoteEntry.js',
      exposes: {
        './react-app': './src/App.js', // Ensure App.jsx is exposed
      },
      shared: ['react', 'react-dom'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/index.html',
          to: 'index.html',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Add .jsx here to resolve JSX files
  },
  devServer: {
    port: 3000,
  },
};

