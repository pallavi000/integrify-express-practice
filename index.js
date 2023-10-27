"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// middlewares
const logging_1 = require("./middlewares/logging");
const error_1 = require("./middlewares/error");
const routeNotFound_1 = require("./middlewares/routeNotFound");
// routes
const itemsRoute_1 = __importDefault(require("./routes/itemsRoute"));
const productsRoute_1 = __importDefault(require("./routes/productsRoute"));
const categoriesRoute_1 = __importDefault(require("./routes/categoriesRoute"));
// app config
const app = (0, express_1.default)();
const PORT = 8050;
// middleware connections
app.use(express_1.default.json());
app.use(logging_1.loggingMiddleware);
// define routes
app.use("/`api`/v1/items", itemsRoute_1.default);
app.use("/api/v1/products", productsRoute_1.default);
app.use("/api/v1/categories", categoriesRoute_1.default);
app.use(error_1.errorLoggingMiddleware);
// catch-all route for non-existing routes
app.use("*", routeNotFound_1.routeNotFound);
// run server
app.listen(PORT, () => {
    console.log(`app is running at localhost:${PORT}`);
});
