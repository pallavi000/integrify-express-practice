"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLoggingMiddleware = void 0;
const ApiError_1 = require("../errors/ApiError");
function errorLoggingMiddleware(error, req, res, next) {
    console.log("👀 ERRROOOR!!");
    if (error instanceof ApiError_1.ApiError) {
        res.status(error.code).json(error);
    }
    else {
        res.status(500).json({ code: 500, msg: "👀 ERRROOOR!!" });
    }
}
exports.errorLoggingMiddleware = errorLoggingMiddleware;
