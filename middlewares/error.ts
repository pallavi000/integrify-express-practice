import { NextFunction } from "express";

export function errorLoggingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("👀 ERRROOOR!!");
  // res.json({ msg: "ERROR!!!!" });
}
