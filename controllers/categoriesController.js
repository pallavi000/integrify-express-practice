"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createOneCategory = exports.findOneCategory = exports.findAllCategory = void 0;
// services
const categoryService_1 = __importDefault(require("../services/categoryService"));
// error builder
const ApiError_js_1 = require("../errors/ApiError.js");
function findAllCategory(_, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categories = categoryService_1.default.findAll();
            res.json({ categories });
        }
        catch (error) {
            next(ApiError_js_1.ApiError.internal("Internal server error"));
        }
    });
}
exports.findAllCategory = findAllCategory;
function findOneCategory(req, res, next) {
    try {
        const categoryId = Number(req.params.id);
        const category = categoryService_1.default.findOne(categoryId);
        if (!category) {
            const notFoundError = ApiError_js_1.ApiError.resourceNotFound("Category not found.");
            return next(notFoundError);
        }
        res.status(200).json({ category });
    }
    catch (error) {
        const internalServerError = ApiError_js_1.ApiError.internal("Internal server error.");
        next(internalServerError);
    }
}
exports.findOneCategory = findOneCategory;
function createOneCategory(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCategory = req.body;
            const category = categoryService_1.default.createOne(newCategory);
            res.status(201).json({ category });
        }
        catch (error) {
            next(ApiError_js_1.ApiError.internal("Internal server error"));
        }
    });
}
exports.createOneCategory = createOneCategory;
function updateCategory(req, res, next) {
    try {
        const categoryId = Number(req.params.id);
        const updateCategoryData = req.body;
        const categoryIndex = categoryService_1.default.findIndex(categoryId);
        if (categoryIndex === -1) {
            return next(ApiError_js_1.ApiError.resourceNotFound("Category not found."));
        }
        const updatedProduct = categoryService_1.default.updateCategory(categoryIndex, updateCategoryData);
        res.status(201).json({ updatedProduct });
    }
    catch (error) {
        next(ApiError_js_1.ApiError.internal("Internal server error"));
    }
}
exports.updateCategory = updateCategory;
function deleteCategory(req, res, next) {
    try {
        const categoryId = Number(req.params.id);
        const categoryIndex = categoryService_1.default.findIndex(categoryId);
        if (categoryIndex === -1) {
            next(ApiError_js_1.ApiError.resourceNotFound("Category not found."));
            return;
        }
        categoryService_1.default.deleteCategory(categoryIndex);
        res.status(201).json({ msg: "Category Delete successfully" });
    }
    catch (error) {
        next(ApiError_js_1.ApiError.internal("Internal server error"));
    }
}
exports.deleteCategory = deleteCategory;
