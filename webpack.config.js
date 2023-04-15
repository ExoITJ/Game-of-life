const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][hash].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            types: path.resolve(__dirname, "src/types"),
            components: path.resolve(__dirname, "src/features"),
            "@": path.resolve(__dirname, "src"),
        },
    },
    devServer: {
        port: 3000,
    },
    plugins: [new HTMLWebpackPlugin({ template: "./public/index.html" }), new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"],
            },
            {
                test: /\.(ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
