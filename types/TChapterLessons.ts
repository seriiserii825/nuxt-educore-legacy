import type {TCourseChapter} from "./TCourseChapter";
import type {TLesson} from "./TLesson";

export type TChapterLessons = {
  chapter: TCourseChapter;
  lessons: TLesson[];
};
