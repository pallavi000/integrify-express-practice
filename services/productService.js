"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const productsRepo = new product_1.ProductRepo();
function findAll() {
    const products = productsRepo.findAll();
    return products;
}
function findOne(productId) {
    const product = productsRepo.findOne(productId);
    return product;
}
function findIndex(productId) {
    const productIndex = productsRepo.findIndex(productId);
    return productIndex;
}
function createOne(product) {
    const newProduct = productsRepo.createOne(product);
    return newProduct;
}
function updateProduct(productIndex, product) {
    const updateProduct = productsRepo.updateProduct(productIndex, product);
    return updateProduct;
}
function deleteProduct(productIndex) {
    const product = productsRepo.deleteProduct(productIndex);
    return product;
}
exports.default = {
    findOne,
    findAll,
    createOne,
    findIndex,
    updateProduct,
    deleteProduct,
};
