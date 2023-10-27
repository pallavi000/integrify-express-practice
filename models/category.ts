import { Category, categoryWithId } from "../types/category";
import { z } from "zod";

// schema
export const CategorySchema = z.strictObject({
  name: z.string({
    required_error: "Name is required",
  }),
  image: z.string().optional(),
});

// Simulating a DataBase
export class CategoryRepo {
  categories: categoryWithId[] = [
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

  createOne(newCategory: Category) {
    const id = this.generateNewId();
    const categoryWithId = { ...newCategory, id };
    this.categories = [...this.categories, categoryWithId];
    return categoryWithId;
  }

  updateCategory(categoryIndex: number, updateCategoryData: Category) {
    if (categoryIndex !== -1) {
      this.categories[categoryIndex] = {
        ...this.categories[categoryIndex],
        ...updateCategoryData,
      };
      return this.categories[categoryIndex];
    }
    return null;
  }

  deleteCategory(categoryIndex: number) {
    if (categoryIndex !== -1) {
      return this.categories.splice(categoryIndex, 1)[0];
    }
    return null;
  }
}
