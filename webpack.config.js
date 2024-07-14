const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  mode: "production",
  resolve: {
    fallback: {
      url: require.resolve("url/"),
      util: require.resolve("util/"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      fs: false,
      dns: false,
      net: false,
      tls: false,
      zlib: require.resolve("browserify-zlib"),
      path: require.resolve("path-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      assert: require.resolve("assert"),
      vm: require.resolve("vm-browserify"),
      querystring: require.resolve("querystring-es3"),
      process: require.resolve("process/browser"),
      buffer: require.resolve("buffer/"),
      child_process: false, // Add this line
      async_hooks: false, // Add this line
      "node-gyp": false, // Add this line
      "aws-sdk": false, // Add this line
      "mock-aws-s3": false, // Add this line
      nock: false, // Add this line
    },
  },
  plugins: [],
};
