export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "DEVELOPER" | "DESIGNER" | "CREATOR";
  createdAt: Date;
  updatedAt: Date;
}
