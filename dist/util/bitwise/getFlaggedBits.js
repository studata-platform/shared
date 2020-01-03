"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isFlagged_1 = __importDefault(require("./isFlagged"));
exports.default = (flags, bit) => Object.values(flags).filter(flag => isFlagged_1.default(flag, bit));
