import express from "express";

import itemsRoute from "./routes/itemsRoute";
import productsRoute from "./routes/productsRoute";
import { loggingMiddleware } from "./middlewares/logging";
import { errorLoggingMiddleware } from "./middlewares/error";

const PORT = 8080;
const app = express();
app.use(express.json());

app.use("/items", itemsRoute);
app.use("/products", productsRoute);
app.use(errorLoggingMiddleware);

app.listen(PORT, () => {
  console.log(`app is running at localhost:${PORT}`);
});
