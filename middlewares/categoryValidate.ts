import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const CategorySchema = z.strictObject({
  name: z.string({
    required_error: "Name is required",
  }),
  image: z.string().optional(),
});

const category = {
  name: "Albin",
  age: 30,
};

console.log(CategorySchema.safeParse(category));

export async function validateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Use safeParse to handle errors without throwing exceptions
  const result = await CategorySchema.safeParseAsync(req.body);
  if (result.success) {
    return next();
  } else {
    return res.status(400).json(result.error);
  }
}
