import express from "express";

// controllers
import {
  createOneProduct,
  deleteProduct,
  findAllProduct,
  findOneProduct,
  updateProduct,
} from "../controllers/productsController";

// middlewares
import { validateParams } from "../middlewares/paramsValidate";
import { validateSchema } from "../middlewares/schemaValidate";

// schema
import { ProductSchema } from "../models/product";

const router = express.Router();

// routes
router.get("/", findAllProduct);
router.get("/:id", validateParams, findOneProduct);
router.post("/", validateSchema(ProductSchema), createOneProduct);
router.put(
  "/:id",
  validateParams,
  validateSchema(ProductSchema),
  updateProduct
);
router.delete("/:id", validateParams, deleteProduct);

export default router;
