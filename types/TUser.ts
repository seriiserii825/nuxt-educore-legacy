export type TUser = {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  image: string;
  document: null;
  login_as: null;
  created_at: string;
  updated_at: string;
  role: "admin" | "student" | "instructor";
  approve_status?: "initial" | "pending" | "approved" | "rejected";
  gender: "male" | "female";
  bio: string;
  headline: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  website: string;
  github: string;
  cart: TUserCartItem[];
};

interface TUserCartItem {
  id: number;
  user_id: number;
  course_id: number;
  created_at: string;
  updated_at: string;
}
