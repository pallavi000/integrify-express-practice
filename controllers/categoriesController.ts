import { NextFunction, Request, Response } from "express";

// services
import CategoryService from "../services/categoryService";

// error builder
import { ApiError } from "../errors/ApiError.js";

export async function findAllCategory(
  _: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categories = CategoryService.findAll();
    res.json(categories);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function findOneCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categoryId = Number(req.params.id);
    const category = CategoryService.findOne(categoryId);
    if (!category) {
      const notFoundError = ApiError.resourceNotFound("Category not found.");
      return next(notFoundError);
    }
    res.json(category);
  } catch (error) {
    const internalServerError = ApiError.internal("Internal server error.");
    next(internalServerError);
  }
}

export async function createOneCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newCategory = req.body;
    const category = CategoryService.createOne(newCategory);
    res.status(201).json(category);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categoryId = Number(req.params.id);
    const updateCategoryData = req.body;
    const category = CategoryService.findOne(categoryId);
    if (!category) {
      return next(ApiError.resourceNotFound("Category not found."));
    }
    const updatedCategory = CategoryService.updateCategory(
      categoryId,
      updateCategoryData
    );
    res.json(updatedCategory);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function deleteCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categoryId = Number(req.params.id);
    const category = CategoryService.findOne(categoryId);
    if (!category) {
      next(ApiError.resourceNotFound("Category not found."));
      return;
    }
    CategoryService.deleteCategory(categoryId);
    res.status(204).send();
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}
