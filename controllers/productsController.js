"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createOneProduct = exports.findOneProduct = exports.findAllProduct = void 0;
// services
const productService_1 = __importDefault(require("../services/productService"));
// error builder
const ApiError_js_1 = require("../errors/ApiError.js");
function findAllProduct(_, res, next) {
    try {
        const products = productService_1.default.findAll();
        res.json({ products });
    }
    catch (error) {
        next(ApiError_js_1.ApiError.internal("Internal server error"));
    }
}
exports.findAllProduct = findAllProduct;
function findOneProduct(req, res, next) {
    try {
        const productId = Number(req.params.id);
        const product = productService_1.default.findOne(productId);
        if (!product) {
            next(ApiError_js_1.ApiError.resourceNotFound("Product not found."));
            return;
        }
        res.json({ product });
    }
    catch (error) {
        next(ApiError_js_1.ApiError.internal("Internal server error"));
    }
}
exports.findOneProduct = findOneProduct;
function createOneProduct(req, res, next) {
    try {
        const newProduct = req.body;
        const product = productService_1.default.createOne(newProduct);
        res.status(201).json({ product });
    }
    catch (error) {
        next(ApiError_js_1.ApiError.internal("Internal server error"));
    }
}
exports.createOneProduct = createOneProduct;
function updateProduct(req, res, next) {
    try {
        const productId = Number(req.params.id);
        const updateProductData = req.body;
        const productIndex = productService_1.default.findIndex(productId);
        if (productIndex === -1) {
            next(ApiError_js_1.ApiError.resourceNotFound("Product not found."));
            return;
        }
        const updatedProduct = productService_1.default.updateProduct(productIndex, updateProductData);
        res.status(201).json({ updatedProduct });
    }
    catch (error) {
        next(ApiError_js_1.ApiError.internal("Internal server error"));
    }
}
exports.updateProduct = updateProduct;
function deleteProduct(req, res, next) {
    try {
        const productId = Number(req.params.id);
        const productIndex = productService_1.default.findIndex(productId);
        if (productIndex === -1) {
            next(ApiError_js_1.ApiError.resourceNotFound("Product not found."));
            return;
        }
        productService_1.default.deleteProduct(productIndex);
        res.status(201).json({ msg: "Product Delete successfully" });
    }
    catch (error) {
        next(ApiError_js_1.ApiError.internal("Internal server error"));
    }
}
exports.deleteProduct = deleteProduct;
