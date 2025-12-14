import { CreateUserInput } from "../schemas/authSchema";
import db from "../db/connection";

export async function saveUser(user: CreateUserInput) {
  return db.oneOrNone(
    "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2,$3,$4) RETURNING *",
    [user.name, user.email, user.password, user.role]
  );
}

// TO - DO: Levar essa função pro repositorio de User, quando for criado.
