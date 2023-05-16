/* eslint-disable @typescript-eslint/naming-convention */
const path = require("path");

module.exports = [
  {
    entry: "./build/index.js",
    output: {
      filename: "index.min.js",
      path: path.join(__dirname, "dist"),
      library: "fxsdk",
      libraryTarget: "umd",
    },
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer"),
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
  },
];
