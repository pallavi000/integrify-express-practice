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

// export function createOneCategory(req: Request, res: Response) {
//   const newProduct = req.body;
//   const product = ProductService.createOne(newProduct);
//   res.status(201).json({ product });
// }

// export function updateCategory(req: Request, res: Response, next: NextFunction) {
//   const productId = Number(req.params.productId);

//   const updateProductData = req.body;
//   const productIndex = ProductService.findIndex(productId);
//   if (productIndex === -1) {
//     next(ApiError.resourceNotFound("Product not found."));
//     return;
//   }
//   const updatedProduct = ProductService.updateProduct(
//     productIndex,
//     updateProductData
//   );
//   res.status(201).json({ updatedProduct });
// }

// export function deleteCategory(req: Request, res: Response, next: NextFunction) {
//   const productId = Number(req.params.productId);
//   const productIndex = ProductService.findIndex(productId);
//   if (productIndex === -1) {
//     next(ApiError.resourceNotFound("Product not found."));
//     return;
//   }
//   ProductService.deleteProduct(productIndex);
//   res.status(201).json("Product Delete successfully");
// }
