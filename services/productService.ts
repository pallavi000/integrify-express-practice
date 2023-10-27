import { ProductRepo } from "../models/product";

// types
import { TProduct } from "../types/product.js";

const productsRepo = new ProductRepo();

function findAll() {
  return productsRepo.findAll();
}

function findOne(productId: number) {
  return productsRepo.findOne(productId);
}

function findIndex(productId: number) {
  return productsRepo.findIndex(productId);
}

function createOne(product: TProduct) {
  return productsRepo.createOne(product);
}

function updateProduct(productId: number, product: TProduct) {
  return productsRepo.updateProduct(productId, product);
}

function deleteProduct(productId: number) {
  return productsRepo.deleteProduct(productId);
}

export default {
  findOne,
  findAll,
  createOne,
  findIndex,
  updateProduct,
  deleteProduct,
};
