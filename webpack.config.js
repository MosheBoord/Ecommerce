const path = require("path");

module.exports = {
	entry: "./app/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.bundle.js",
	},
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							localsConvention: "camelCase",
							sourceMap: true,
						},
					},
				],
			},
		],
	},
};
