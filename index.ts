import express from "express";

import itemsRoute from "./routes/itemsRoute";
import productsRoute from "./routes/productsRoute";
import { loggingMiddleware } from "./middlewares/logging";
import categoriesRoute from "./routes/categoriesRoute";
import { errorLoggingMiddleware } from "./middlewares/error";

const PORT = 8080;
const app = express();
app.use(express.json());

app.use("/api/v1/items", itemsRoute);
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/categories", categoriesRoute);
app.use(errorLoggingMiddleware);

app.listen(PORT, () => {
  console.log(`app is running at localhost:${PORT}`);
});
