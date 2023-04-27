/* eslint-disable @typescript-eslint/naming-convention */
const glob = require("glob");
const path = require("path");
const webpack = require("webpack");

const distdir = path.join(__dirname, "dist");

module.exports = [
  {
    target: "web",
    entry: glob.sync("./build/**/*.js"),
    output: {
      path: distdir,
      filename: "index.min.js",
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        SIMAPP42_ENABLED: "",
        SLOW_SIMAPP42_ENABLED: "",
        SIMAPP44_ENABLED: "",
        SLOW_SIMAPP44_ENABLED: "",
      }),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        buffer: false,
        crypto: false,
        events: false,
        path: false,
        stream: false,
        string_decoder: false,
      },
    },
  },
];
