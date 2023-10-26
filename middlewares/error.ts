import { NextFunction, Request, Response } from "express";

export function errorLoggingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("👀 ERRROOOR!!");
  res.send({ msg: "ERROR!!!!" });
}
