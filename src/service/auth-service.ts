import { ConflictError } from "../errors/ConflitctError";
import { saveUser, validateUserExists } from "../repository/auth-respository";

import bcrypt from "bcrypt";
import { CreateUserInput } from "../schemas/authSchema";

export async function createUser(user: CreateUserInput) {
  const haveUser = await validateUserExists(user.email);
  if (haveUser != null) {
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
