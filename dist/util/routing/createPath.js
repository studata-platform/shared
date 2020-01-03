"use strict";
exports.__esModule = true;
var createPath = function (route, parameters) {
    return route.replace(/:[a-z]+/gi, function (parameterKey) { return parameters[parameterKey.substr(1)]; });
};
exports["default"] = createPath;