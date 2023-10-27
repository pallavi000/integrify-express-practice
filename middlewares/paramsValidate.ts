import { Request, Response, NextFunction } from "express";
import { isNumber } from "../utils/helpers";
import { ApiError } from "../errors/ApiError";

export async function validateParams(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isValid = isNumber(req.params.id);
  if (!isValid) {
    const error = ApiError.badRequest("Invalid Params.");
    return res
      .status(error.code)
      .json({ code: error.code, msg: error.message });
  }
  next();
}
