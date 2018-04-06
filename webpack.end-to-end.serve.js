/* global module, __dirname, process */
var path    = require("path");
var webpack = require("webpack");

// plugin
var HtmlWebpackPlugin   = require("html-webpack-plugin");
var DefineWebpackPlugin = webpack.DefinePlugin;

module.exports = {
    entry : {
        tests : path.join(__dirname, "test", "index-end-to-end.js")
    },
    output : {
        path : path.join(__dirname, "test"),
        filename : "test_end-to-end_bundle.js",
        libraryTarget : "umd"
    },
    externals : ["request", "xmldom"],
    devtool : "source-map",
    devServer : {
        stats : "errors-only",
        host : "localhost",
        port : 9001,
        hot : true,
        open : "google-chrome",
        watchOptions : {
            watch : true,
            poll : true
        },
        overlay : {
            errors : true,
            warnings : false
        }
    },
    plugins : [
        // on veut les logs !
        new DefineWebpackPlugin({
            __PRODUCTION__ : JSON.stringify(false)
        }),
        new HtmlWebpackPlugin({
            title : "Mocha Tests Functionnals",
            filename : "index.html",
            template : require.resolve(
                "html-webpack-plugin/default_index.ejs"
            )
        })
    ]
};
