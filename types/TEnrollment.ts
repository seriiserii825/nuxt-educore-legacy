import type {TCourse} from "./TCourse";

export type TEnrollment = {
  id: number;
  user_id: number;
  instructor_id: number;
  course_id: number;
  has_access: number;
  created_at: string;
  updated_at: string;
  course: TCourse;
}
