"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotFound = void 0;
const ApiError_1 = require("../errors/ApiError");
function routeNotFound(_, res) {
    const error = ApiError_1.ApiError.resourceNotFound("Route not found.");
    res.status(error.code).json({ code: error.code, msg: error.message });
}
exports.routeNotFound = routeNotFound;
