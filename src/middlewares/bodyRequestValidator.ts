import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export default function bodyRequestValidator(schema: ZodSchema) {
  return function (request: Request, response: Response, next: NextFunction) {
    try {
      schema.parse(request.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(400).json({
          message: "Informe os campos obrigatórios corretamente",
        });
      }
    }
  };
}
