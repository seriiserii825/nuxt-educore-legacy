export type TUser = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "student" | "instructor";
  image: string;
  approve_status?: "initial" | "pending" | "approved" | "rejected";
  gender: "male" | "female";
  bio: string;
  headline: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  website: string;
  github: string;
};
