export class ApiError extends Error {
  constructor(
    message: string = "Erro interno do Servidor.",
    public status: number = 500
  ) {
    super(message);
  }
}
