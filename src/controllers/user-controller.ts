import { Express, Request, Response, Router } from "express";
import { handler } from "../utils/handler";

const userProfileController = (server: Express) => {
  const router = Router();

  router.post(
    "/onboarding",
    handler(async (request, response) => {
      const profileData = request.body;
    })
  );

  server.use("/user", router);
};

export default userProfileController;
