"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepo = exports.ProductSchema = void 0;
const zod_1 = require("zod");
// schema
exports.ProductSchema = zod_1.z.strictObject({
    name: zod_1.z.string({
        required_error: "Name is required",
    }),
    price: zod_1.z.number({
        required_error: "Price is required",
    }),
    description: zod_1.z.string({
        required_error: "Description is required",
    }),
    categories: zod_1.z.array(zod_1.z.number()).optional(),
    image: zod_1.z.string().optional(),
});
// Simulating a DataBase
class ProductRepo {
    constructor() {
        this.products = [
            {
                id: 1,
                price: 100,
                name: "Laptop",
                image: "https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg",
                description: "High-performance laptop for all your needs.",
                categories: [1, 2],
            },
            {
                id: 2,
                price: 100,
                name: "Smartphone",
                image: "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg",
                description: "Latest smartphone with advanced features.",
                categories: [1, 3],
            },
        ];
    }
    generateNewId() {
        if (!this.products.length)
            return 1;
        const maxId = Math.max(...this.products.map((product) => product.id));
        return maxId + 1;
    }
    findOne(productId) {
        const product = this.products.find((product) => product.id === productId);
        return product;
    }
    findIndex(productId) {
        const productIndex = this.products.findIndex((product) => product.id === productId);
        return productIndex;
    }
    findAll() {
        return this.products;
    }
    createOne(newProduct) {
        const product = Object.assign({ id: this.generateNewId() }, newProduct);
        this.products = [...this.products, product];
        return product;
    }
    updateProduct(productIndex, updateProductData) {
        this.products[productIndex] = Object.assign(Object.assign({}, this.products[productIndex]), updateProductData);
        return this.products[productIndex];
    }
    deleteProduct(productIndex) {
        const product = this.products.splice(productIndex, 1);
        return product;
    }
}
exports.ProductRepo = ProductRepo;
