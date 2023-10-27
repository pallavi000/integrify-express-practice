"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
function isNumber(param) {
    return !isNaN(parseFloat(param)) && isFinite(param);
}
exports.isNumber = isNumber;
