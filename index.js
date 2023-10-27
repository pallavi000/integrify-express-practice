"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var itemsRoute_js_1 = require("./routes/itemsRoute.js");
var productsRoute_js_1 = require("./routes/productsRoute.js");
var usersRoute_js_1 = require("./routes/usersRoute.js");
var logging_js_1 = require("./middlewares/logging.js");
var error_js_1 = require("./middlewares/error.js");
var routeNotFound_js_1 = require("./middlewares/routeNotFound.js");
var PORT = 8000;
var path = '/api/v1/';
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/hello", logging_js_1.loggingMiddleware, function (_, res) {
    res.json({ msg: "hello, from Express.js!" });
});
app.use("/api/v1/items", itemsRoute_js_1.default);
//PRODUCTS
app.use("/api/v1/products", productsRoute_js_1.default);
//USERS
app.use("/api/v1/users", usersRoute_js_1.default);
//ERROR HANDLING
app.use(error_js_1.apiErrorHandler);
app.use(routeNotFound_js_1.routeNotFound);
app.listen(PORT, function () {
    console.log("App is running at localhost:".concat(PORT));
});
