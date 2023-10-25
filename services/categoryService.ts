import { CategoryRepo } from "../models/category";

const categoriesRepo = new CategoryRepo();

function findAll() {
  const categories = categoriesRepo.findAll();
  return categories;
}

function findOne(categoryId: number) {
  const category = categoriesRepo.findOne(categoryId);
  return category;
}

// function findIndex(productId: number) {
//   const productIndex = productsRepo.findIndex(productId);
//   return productIndex;
// }

// function createOne(product: Product) {
//   const newProduct = productsRepo.createOne(product);
//   return newProduct;
// }

// function updateProduct(productIndex: number, product: Product) {
//   const updateProduct = productsRepo.updateProduct(productIndex, product);
//   return updateProduct;
// }

// function deleteProduct(productIndex: number) {
//   const product = productsRepo.deleteProduct(productIndex);
//   return product;
// }

export default {
  findOne,
  findAll,
  // createOne,
  // findIndex,
  // updateProduct,
  // deleteProduct,
};
