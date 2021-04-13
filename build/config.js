/* webpack config */
var path = require("path");

let externals = {
    vue: {
        root: "Vue",
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
    },
};

exports.externals = externals;
