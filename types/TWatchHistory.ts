export type TWatchHistory = {
  chapter_lessons: THistoryChapter[];
};
export type THistoryChapter = {
  chapter: number;
  lessons: THistoryLesson[];
};

export type THistoryLesson = {
  id: number;
  is_completed: number;
};
