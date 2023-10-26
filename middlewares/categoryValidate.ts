import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const CategorySchema = z.strictObject({
  name: z.string({
    required_error: "Name is required",
  }),
  image: z.string().optional(),
});

export async function validateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await CategorySchema.parseAsync(req.body);
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}
