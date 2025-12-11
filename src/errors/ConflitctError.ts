import { ApiError } from "./ApiError";

export class ConflictError extends ApiError {
  constructor(message: string = "Usuário já cadastrado.") {
    super(message, 409);
  }
}
