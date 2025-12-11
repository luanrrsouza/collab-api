import { z } from "zod";

export const UserRoleEnum = z.enum(["DEVELOPER", "DESIGNER", "CREATOR"]);

export const createUserSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 5 caracteres"),
  role: UserRoleEnum,
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UserRole = z.infer<typeof UserRoleEnum>;
