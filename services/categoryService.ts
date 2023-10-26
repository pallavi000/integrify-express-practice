import { CategoryRepo } from "../models/category";
import { Category } from "../types/category";

const categoriesRepo = new CategoryRepo();

function findAll() {
  const categories = categoriesRepo.findAll();
  return categories;
}

function findOne(categoryId: number) {
  const category = categoriesRepo.findOne(categoryId);
  return category;
}

function findIndex(categoryId: number) {
  const categoryIndex = categoriesRepo.findIndex(categoryId);
  return categoryIndex;
}

function createOne(category: Category) {
  const newCategory = categoriesRepo.createOne(category);
  return newCategory;
}

function updateCategory(categoryIndex: number, category: Category) {
  const updateCategory = categoriesRepo.updateCategory(categoryIndex, category);
  return updateCategory;
}

function deleteCategory(categoryIndex: number) {
  const category = categoriesRepo.deleteCategory(categoryIndex);
  return category;
}

export default {
  findOne,
  findAll,
  createOne,
  findIndex,
  updateCategory,
  deleteCategory,
};
