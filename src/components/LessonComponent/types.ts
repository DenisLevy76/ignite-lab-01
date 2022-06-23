export interface LessonComponentsProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
  activeLesson: boolean;
}
