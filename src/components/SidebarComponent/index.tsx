import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LessonComponent } from "../LessonComponent";
import { LessonRequestData } from "./types";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      availableAt
      slug
      lessonType
    }
  }
`;

export const SidebarComponent: React.FC = () => {
  const { data } = useQuery<LessonRequestData>(GET_LESSONS_QUERY);
  const { slug } = useParams();
  return (
    <aside className="hidden md:block min-w-[348px] bg-grey-700 p-6 border-l border-grey-600">
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
