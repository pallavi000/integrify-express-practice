import { z } from "zod";

// types
import { TCategory, TCategorySchema } from "../types/category";

// schema
export const CategorySchema = z.strictObject({
  name: z.string({
    required_error: "Name is required",
  }),
  image: z.string().optional(),
});

// Simulating a DataBase
export class CategoryRepo {
  categories: TCategory[] = [
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

  generateNewId() {
    if (!this.categories.length) return 1;
    const maxId = Math.max(...this.categories.map((category) => category.id));
    return maxId + 1;
  }

  findOne(categoryId: number) {
    const category = this.categories.find(
      (category) => category.id === categoryId
    );
    return category;
  }

  findIndex(categoryId: number) {
    return this.categories.findIndex((category) => category.id === categoryId);
  }

  findAll() {
    return this.categories;
  }

  createOne(newCategory: TCategorySchema) {
    const id = this.generateNewId();
    const categoryWithId = { ...newCategory, id };
    this.categories = [...this.categories, categoryWithId];
    return categoryWithId;
  }

  updateCategory(categoryId: number, updateCategoryData: TCategorySchema) {
    const categoryIndex = this.findIndex(categoryId);
    if (categoryIndex !== -1) {
      this.categories[categoryIndex] = {
        ...this.categories[categoryIndex],
        ...updateCategoryData,
      };
      return this.categories[categoryIndex];
    }
    return null;
  }

  deleteCategory(categoryId: number) {
    this.categories = this.categories.filter(
      (category) => category.id !== categoryId
    );
    return;
  }
}
