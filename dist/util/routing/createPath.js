"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createPath = (route, parameters) => route.replace(/:[a-z0-9-]+/gi, (parameterKey) => parameters[parameterKey.substr(1)]);
exports.default = createPath;
