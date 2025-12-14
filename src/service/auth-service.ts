import { ConflictError } from "../errors/ConflitctError";
import { saveUser } from "../repository/auth-respository";
import { userAlreadyExists } from "../repository/user-repository";

import bcrypt from "bcrypt";

import { CreateUserInput } from "../schemas/authSchema";
import { UserProfile } from "../types/UserProfile";

export async function createUser(user: CreateUserInput) {
  const currentUser = await userAlreadyExists(user.email);
  if (currentUser != null) {
    throw new ConflictError();
  }

  const hashPassword = await bcrypt.hash(user.password, 10);

  const userWithHashedPassword = {
    ...user,
    password: hashPassword,
  };

  const newUser = await saveUser(userWithHashedPassword);

  return newUser;
}

export async function saveOnBoarding(userProfile: UserProfile) {
  const profile = await saveOnBoarding(userProfile);
}
