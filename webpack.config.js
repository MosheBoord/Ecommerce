const path = require("path");

module.exports = {
	entry: "./app/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.bundle.js",
	},
	mode: "development",
	devtool: "source-map",
};
