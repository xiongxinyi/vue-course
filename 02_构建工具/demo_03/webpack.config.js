const path = require("path")
module.exports = {
    mode: "production",
    // entry: "./hello/hello.js",
    // entry: ["./src/a.js", "./src/b.js"],
    entry: {
        a: "./src/a.js",
        b: "./src/b.js"
    },
    // entry: "./src/a.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[id]-[hash].js",
        clean: true,
    }
}