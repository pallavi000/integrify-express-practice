import { NextFunction, Request, Response } from "express";

import CategoryService from "../services/categoryService";
import { ApiError } from "../errors/ApiError.js";

export function findAllCategory(_: Request, res: Response) {
  const categories = CategoryService.findAll();
  res.json({ categories });
}

export function findOneCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categoryId = Number(req.params.categoryId);
    if (isNaN(categoryId) || categoryId <= 0) {
      const badRequestError = ApiError.badRequest("Invalid category ID.");
      return next(badRequestError);
    }
    const category = CategoryService.findOne(categoryId);
    if (!category) {
      const notFoundError = ApiError.resourceNotFound("Category not found.");
      return next(notFoundError);
    }
    res.status(200).json({ category });
  } catch (error) {
    const internalServerError = ApiError.internal("Internal server error.");
    console.error("Error in findOneCategory:", error);
    next(internalServerError);
  }
}

export function createOneCategory(req: Request, res: Response) {
  const newCategory = req.body;
  const category = CategoryService.createOne(newCategory);
  res.status(201).json({ category });
}

export function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const categoryId = Number(req.params.categoryId);
  const updateCategoryData = req.body;
  const categoryIndex = CategoryService.findIndex(categoryId);
  if (categoryIndex === -1) {
    next(ApiError.resourceNotFound("Product not found."));
    return;
  }
  const updatedProduct = CategoryService.updateCategory(
    categoryIndex,
    updateCategoryData
  );
  res.status(201).json({ updatedProduct });
}

export function deleteCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const categoryId = Number(req.params.categoryId);
  const categoryIndex = CategoryService.findIndex(categoryId);
  if (categoryIndex === -1) {
    next(ApiError.resourceNotFound("Category not found."));
    return;
  }
  CategoryService.deleteCategory(categoryIndex);
  res.status(201).json("Category Delete successfully");
}
