import { Express, request, Router } from "express";
import { handler } from "../utils/handler";
import { createUser } from "../service/auth-service";
import bodyRequestValidator from "../middlewares/bodyRequestValidator";
import { createUserSchema } from "../schemas/authSchema";

const authController = (server: Express) => {
  const router = Router();

  router.post(
    "/register",
    bodyRequestValidator(createUserSchema),
    handler(async (request, response) => {
      const userData = request.body;

      await createUser(userData);

      response.status(201).json({ message: "Usuário criado com sucesso" });
    })
  );

  server.use("/auth", router);
};

export default authController;
