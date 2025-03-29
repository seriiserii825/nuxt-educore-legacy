export type TUser = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "student" | "instructor";
  image: string;
};
