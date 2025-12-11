import { ApiError } from "./ApiError";

export class BadRequestError extends ApiError {
  constructor(message: string = "Dados incorretos da requisição.") {
    super(message, 400);
  }
}
