var createPath = function (route, parameters) {
    return route.replace(/:[a-z0-9-]+/gi, function (parameterKey) { return parameters[parameterKey.substr(1)]; });
};
export default createPath;
