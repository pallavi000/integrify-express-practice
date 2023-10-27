import { z } from "zod";
import { Product, TProductSchema } from "../types/product";

// schema
export const ProductSchema = z.strictObject({
  name: z.string({
    required_error: "Name is required",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  categories: z.array(z.number()).optional(),
  image: z.string().optional(),
});

// Simulating a DataBase
export class ProductRepo {
  products: Product[] = [
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

  generateNewId() {
    if (!this.products.length) return 1;
    const maxId = Math.max(...this.products.map((product) => product.id));
    return maxId + 1;
  }

  findOne(productId: number) {
    const product = this.products.find((product) => product.id === productId);
    return product;
  }

  findIndex(productId: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );
    return productIndex;
  }

  findAll() {
    return this.products;
  }

  createOne(newProduct: TProductSchema) {
    const product = { id: this.generateNewId(), ...newProduct };
    this.products = [...this.products, product];
    return product;
  }

  updateProduct(productIndex: number, updateProductData: TProductSchema) {
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateProductData,
    };
    return this.products[productIndex];
  }

  deleteProduct(productIndex: number) {
    const product = this.products.splice(productIndex, 1);
    return product;
  }
}
