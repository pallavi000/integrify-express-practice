"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepo = exports.CategorySchema = void 0;
const zod_1 = require("zod");
// schema
exports.CategorySchema = zod_1.z.strictObject({
    name: zod_1.z.string({
        required_error: "Name is required",
    }),
    image: zod_1.z.string().optional(),
});
// Simulating a DataBase
class CategoryRepo {
    constructor() {
        this.categories = [
            {
                id: 1,
                name: "Clothes",
                image: "https://i.imgur.com/s8WRA2O.jpeg",
            },
            {
                id: 2,
                name: "Electronics",
                image: "https://i.imgur.com/x0K3SKA.jpeg",
            },
            {
                id: 3,
                name: "Furniture",
                image: "https://i.imgur.com/00qWleT.jpeg",
            },
        ];
    }
    generateNewId() {
        if (!this.categories.length)
            return 1;
        const maxId = Math.max(...this.categories.map((category) => category.id));
        return maxId + 1;
    }
    findOne(categoryId) {
        const category = this.categories.find((category) => category.id === categoryId);
        return category;
    }
    findIndex(categoryId) {
        return this.categories.findIndex((category) => category.id === categoryId);
    }
    findAll() {
        return this.categories;
    }
    createOne(newCategory) {
        const id = this.generateNewId();
        const categoryWithId = Object.assign(Object.assign({}, newCategory), { id });
        this.categories = [...this.categories, categoryWithId];
        return categoryWithId;
    }
    updateCategory(categoryIndex, updateCategoryData) {
        if (categoryIndex !== -1) {
            this.categories[categoryIndex] = Object.assign(Object.assign({}, this.categories[categoryIndex]), updateCategoryData);
            return this.categories[categoryIndex];
        }
        return null;
    }
    deleteCategory(categoryIndex) {
        if (categoryIndex !== -1) {
            return this.categories.splice(categoryIndex, 1)[0];
        }
        return null;
    }
}
exports.CategoryRepo = CategoryRepo;
