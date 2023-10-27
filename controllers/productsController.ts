import { NextFunction, Request, Response } from "express";

// services
import ProductService from "../services/productService";

// error builder
import { ApiError } from "../errors/ApiError.js";

export function findAllProduct(_: Request, res: Response, next: NextFunction) {
  try {
    const products = ProductService.findAll();
    res.json(products);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function findOneProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const productId = Number(req.params.id);
    const product = ProductService.findOne(productId);
    if (!product) {
      next(ApiError.resourceNotFound("Product not found."));
      return;
    }
    res.json(product);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function createOneProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newProduct = req.body;
    const product = ProductService.createOne(newProduct);
    res.status(201).json(product);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function updateProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const productId = Number(req.params.id);
    const updateProductData = req.body;
    const product = ProductService.findOne(productId);
    if (!product) {
      next(ApiError.resourceNotFound("Product not found."));
      return;
    }
    const updatedProduct = ProductService.updateProduct(
      productId,
      updateProductData
    );
    res.json(updatedProduct);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function deleteProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const productId = Number(req.params.id);
    const product = ProductService.findOne(productId);
    if (!product) {
      next(ApiError.resourceNotFound("Product not found."));
      return;
    }
    ProductService.deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}
