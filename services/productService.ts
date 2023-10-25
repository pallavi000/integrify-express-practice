import { ProductRepo } from "../models/product";
import { Product } from "../types/product.js";

const productsRepo = new ProductRepo();

function findAll() {
  const products = productsRepo.findAll();
  return products;
}

function findOne(productId: number) {
  const product = productsRepo.findOne(productId);
  return product;
}

function findIndex(productId: number) {
  const productIndex = productsRepo.findIndex(productId);
  return productIndex;
}

function createOne(product: Product) {
  const newProduct = productsRepo.createOne(product);
  return newProduct;
}

function updateProduct(productIndex: number, product: Product) {
  const updateProduct = productsRepo.updateProduct(productIndex, product);
  return updateProduct;
}

function deleteProduct(productIndex: number) {
  const product = productsRepo.deleteProduct(productIndex);
  return product;
}

export default {
  findOne,
  findAll,
  createOne,
  findIndex,
  updateProduct,
  deleteProduct,
};
