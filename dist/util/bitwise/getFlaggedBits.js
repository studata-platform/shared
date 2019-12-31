"use strict";
exports.__esModule = true;
var isFlagged_1 = require("./isFlagged");
exports["default"] = (function (flags, bit) {
    return Object.values(flags).filter(function (flag) { return isFlagged_1["default"](flag, bit); });
});
