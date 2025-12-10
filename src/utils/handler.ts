import { NextFunction, Request, Response } from "express";

export function handler(
  fnc: (
    request: Request,
    response: Response,
    next: NextFunction
  ) => Promise<void>
) {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await fnc(request, response, next);
    } catch (error) {
      return next(error);
    }
  };
}
