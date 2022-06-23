export interface Lesson {
  id: string;
  title: string;
  availableAt: Date;
  slug: string;
  lessonType: "class" | "live";
}

export interface LessonRequestData {
  lessons: Lesson[];
}
