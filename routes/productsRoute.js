"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// controllers
const productsController_1 = require("../controllers/productsController");
// middlewares
const paramsValidate_1 = require("../middlewares/paramsValidate");
const schemaValidate_1 = require("../middlewares/schemaValidate");
// schema
const product_1 = require("../models/product");
const router = express_1.default.Router();
// routes
router.get("/", productsController_1.findAllProduct);
router.get("/:id", paramsValidate_1.validateParams, productsController_1.findOneProduct);
router.post("/", (0, schemaValidate_1.validateSchema)(product_1.ProductSchema), productsController_1.createOneProduct);
router.put("/:id", paramsValidate_1.validateParams, (0, schemaValidate_1.validateSchema)(product_1.ProductSchema), productsController_1.updateProduct);
router.delete("/:id", paramsValidate_1.validateParams, productsController_1.deleteProduct);
exports.default = router;
