import { NextFunction, Request, Response } from "express"
import { z } from "zod"

const userSchema = z.object({
  body: z.object({
    id: z.number({
      required_error: "Id is required",
    }),
    name: z.string({
      required_error: "E-mail is required",
    }),
  }),
})

export async function validateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await userSchema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}
