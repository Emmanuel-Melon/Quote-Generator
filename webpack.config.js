const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/main.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [
                { loader: "babel-loader" }
            ]
        }]
    }
};


/**
 *
 *         loader: "babel-loader",
 query: {
            presets: ["env"]
        }
 */
// cannot find module `webpack`
// possible reason: mismatch between webpack versions
// global version is 4.25.1
// local version is 4.30.0
// explicit specification of path