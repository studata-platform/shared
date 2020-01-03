import isFlagged from "./isFlagged";
export default (function (flags, bit) {
    return Object.values(flags).filter(function (flag) { return isFlagged(flag, bit); });
});
