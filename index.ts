import express from "express";

// middlewares
import { loggingMiddleware } from "./middlewares/logging";
import { errorLoggingMiddleware } from "./middlewares/error";
import { routeNotFound } from "./middlewares/routeNotFound";

// routes
import productsRoute from "./routes/productsRoute";
import categoriesRoute from "./routes/categoriesRoute";
import usersRoute from "./routes/usersRoute";

// app config
const app = express();
const PORT = 8080;

// middleware connections
app.use(express.json());
app.use(loggingMiddleware);

// define routes
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/users", usersRoute);
app.use(errorLoggingMiddleware);
// catch-all route for non-existing routes
app.use("*", routeNotFound);

// run server
app.listen(PORT, () => {
  console.log(`app is running at localhost:${PORT}`);
});
