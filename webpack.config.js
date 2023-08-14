const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

/** @type {import('webpack').Configuration} */
module.exports = {
    target: "node",
    mode: "development",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: {
            name: {
                root: 'tsGen',
                commonjs: 'tsGen',
                amd: 'tsGen',
            },
            type: "umd",
        },
        globalObject: "globalThis"
    },
    plugins: [
        new NodePolyfillPlugin()
    ]
}