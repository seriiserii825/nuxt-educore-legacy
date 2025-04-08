export type TLesson = {
  id: number;
  title: string;
  description: string;
  lesson_type: "lesson";
  storage: string;
  video_file: string;
  video_input: string;
  file_type: string;
  file_path: string;
  volume: string;
  duration: string;
  downloadable: number;
  is_preview: number;
}
