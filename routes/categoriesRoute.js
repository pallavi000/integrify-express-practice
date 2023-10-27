"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// controllers
const categoriesController_1 = require("../controllers/categoriesController");
// middlewares
const schemaValidate_1 = require("../middlewares/schemaValidate");
const paramsValidate_1 = require("../middlewares/paramsValidate");
// schema
const category_1 = require("../models/category");
const router = express_1.default.Router();
// routes
router.get("/", categoriesController_1.findAllCategory);
router.get("/:id", paramsValidate_1.validateParams, categoriesController_1.findOneCategory);
router.post("/", (0, schemaValidate_1.validateSchema)(category_1.CategorySchema), categoriesController_1.createOneCategory);
router.put("/:id", paramsValidate_1.validateParams, (0, schemaValidate_1.validateSchema)(category_1.CategorySchema), categoriesController_1.updateCategory);
router.delete("/:id", paramsValidate_1.validateParams, categoriesController_1.deleteCategory);
exports.default = router;
