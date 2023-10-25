import { NextFunction, Request, Response } from "express";

import ProductService from "../services/productService";
import { ApiError } from "../errors/ApiError.js";

export function findAllProduct(_: Request, res: Response) {
  const products = ProductService.findAll();
  res.json({ products });
}

export function findOneProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const productId = Number(req.params.productId);
  const product = ProductService.findOne(productId);

  if (!product) {
    next(ApiError.resourceNotFound("Product not found."));
    return;
  }

  res.json({ product });
}

export function createOneProduct(req: Request, res: Response) {
  const newProduct = req.body;
  const product = ProductService.createOne(newProduct);
  res.status(201).json({ product });
}

export function updateProduct(req: Request, res: Response, next: NextFunction) {
  const productId = Number(req.params.productId);

  const updateProductData = req.body;
  const productIndex = ProductService.findIndex(productId);
  if (productIndex === -1) {
    next(ApiError.resourceNotFound("Product not found."));
    return;
  }
  const updatedProduct = ProductService.updateProduct(
    productIndex,
    updateProductData
  );
  res.status(201).json({ updatedProduct });
}

export function deleteProduct(req: Request, res: Response, next: NextFunction) {
  const productId = Number(req.params.productId);
  const productIndex = ProductService.findIndex(productId);
  if (productIndex === -1) {
    next(ApiError.resourceNotFound("Product not found."));
    return;
  }
  ProductService.deleteProduct(productIndex);
  res.status(201).json("Product Delete successfully");
}
