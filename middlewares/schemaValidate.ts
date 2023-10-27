import { NextFunction, Request, Response } from "express";
import { ZodObject, ZodRawShape, z } from "zod";

export const validateSchema = (schema: z.Schema<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };
};
