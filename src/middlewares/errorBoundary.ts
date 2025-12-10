import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";

export function errorBoundary(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    return response.status(error.status).json({ message: error.message });
  }

  return response.status(500).json({ message: "Erro interno do Servidor." });
}
