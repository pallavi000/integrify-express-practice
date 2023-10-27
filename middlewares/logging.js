"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingMiddleware = void 0;
function loggingMiddleware(req, res, next) {
    const currentTime = new Date();
    const formattedDate = currentTime.toISOString();
    console.log(`${req.method} ${req.url} ${formattedDate}`);
    res.once("finish", () => {
        console.log(`${res.statusCode} ${res.statusMessage}`);
    });
    next();
}
exports.loggingMiddleware = loggingMiddleware;
