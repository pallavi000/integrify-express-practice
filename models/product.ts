import { Product } from "../types/product";

// Simulating a DataBase
export class ProductRepo {
  products = [
    {
      id: 1,
      name: "Laptop",
      image: "https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg",
      description: "High-performance laptop for all your needs.",
      categories: [1, 2],
    },
    {
      id: 2,
      name: "Smartphone",
      image: "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg",
      description: "Latest smartphone with advanced features.",
      categories: [1, 3],
    },
  ];

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

  createOne(newProduct: Product) {
    this.products = [...this.products, newProduct];
    return newProduct;
  }

  updateProduct(productIndex: number, updateProductData: Product) {
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
