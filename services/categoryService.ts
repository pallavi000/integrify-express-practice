import { CategoryRepo } from "../models/category";

// types
import { TCategory } from "../types/category";

const categoriesRepo = new CategoryRepo();

function findAll() {
  return categoriesRepo.findAll();
}

function findOne(categoryId: number) {
  return categoriesRepo.findOne(categoryId);
}

function findIndex(categoryId: number) {
  return categoriesRepo.findIndex(categoryId);
}

function createOne(category: TCategory) {
  return categoriesRepo.createOne(category);
}

function updateCategory(categoryId: number, category: TCategory) {
  return categoriesRepo.updateCategory(categoryId, category);
}

function deleteCategory(categoryId: number) {
  return categoriesRepo.deleteCategory(categoryId);
}

export default {
  findOne,
  findAll,
  createOne,
  findIndex,
  updateCategory,
  deleteCategory,
};
