export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "DEVELOPER" | "DESIGNER" | "CREATOR";
  createdAt: Date;
  updatedAt: Date;
}
