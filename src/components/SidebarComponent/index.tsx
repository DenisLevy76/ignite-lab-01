import { useParams } from "react-router-dom";
import { useGetLessonsQuery } from "../../graphql/generated";
import { LessonComponent } from "../LessonComponent";

export const SidebarComponent: React.FC = () => {
  const { data } = useGetLessonsQuery();
  const { slug } = useParams();
  return (
    <aside className="hidden md:block min-w-[348px] max-h-[1190px] bg-grey-700 p-6 border-l border-grey-600 overflow-y-scroll">
      <h3 className="font-bold text-2xl pb-6 border-b border-grey-600 mb-6 block">
        Cronograma de aulas
      </h3>

      <section className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <LessonComponent
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
            activeLesson={slug === lesson.slug}
          />
        ))}
      </section>
    </aside>
  );
};
