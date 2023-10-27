import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";

export function errorLoggingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("👀 ERRROOOR!!");
  if (error instanceof ApiError) {
    res.status(error.code).json(error);
  } else {
    res.status(500).json({ code: 500, msg: "👀 ERRROOOR!!" });
  }
}
