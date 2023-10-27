"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../models/category");
const categoriesRepo = new category_1.CategoryRepo();
function findAll() {
    const categories = categoriesRepo.findAll();
    return categories;
}
function findOne(categoryId) {
    const category = categoriesRepo.findOne(categoryId);
    return category;
}
function findIndex(categoryId) {
    const categoryIndex = categoriesRepo.findIndex(categoryId);
    return categoryIndex;
}
function createOne(category) {
    const newCategory = categoriesRepo.createOne(category);
    return newCategory;
}
function updateCategory(categoryIndex, category) {
    const updateCategory = categoriesRepo.updateCategory(categoryIndex, category);
    return updateCategory;
}
function deleteCategory(categoryIndex) {
    const category = categoriesRepo.deleteCategory(categoryIndex);
    return category;
}
exports.default = {
    findOne,
    findAll,
    createOne,
    findIndex,
    updateCategory,
    deleteCategory,
};
