import express from "express";

// middlewares
import { loggingMiddleware } from "./middlewares/logging";
import { errorLoggingMiddleware } from "./middlewares/error";
import { routeNotFound } from "./middlewares/routeNotFound";

// routes
import itemsRoute from "./routes/itemsRoute";
import productsRoute from "./routes/productsRoute";
import categoriesRoute from "./routes/categoriesRoute";

// app config
const app = express();
const PORT = 8050;

// middleware connections
app.use(express.json());
app.use(loggingMiddleware);

// define routes
app.use("/`api`/v1/items", itemsRoute);
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/categories", categoriesRoute);
app.use(errorLoggingMiddleware);
// catch-all route for non-existing routes
app.use("*", routeNotFound);

// run server
app.listen(PORT, () => {
  console.log(`app is running at localhost:${PORT}`);
});
