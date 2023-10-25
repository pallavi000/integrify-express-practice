import { NextFunction } from "express";

export function loggingMiddleware(
  req: Request,
  _: Response,
  next: NextFunction
) {
  console.log("👀 [INFO]: ", req.method, req);
  next();
}
