import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { AboutVideoComponent } from "../../components/AboutVideoComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { SidebarComponent } from "../../components/SidebarComponent";
import { VideoComponent } from "../../components/VideoComponent";
import { EventPageURLParams, GetLessonBySlugResponse } from "./types";

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      description
      title
      teacher {
        avatarURL
        bio
        name
      }
      videoId
      challenge {
        url
      }
    }
  }
`;

export const EventPage: React.FC = () => {
  const { slug } = useParams<EventPageURLParams>();
  const { data, loading } = useQuery<GetLessonBySlugResponse>(
    GET_LESSON_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex flex-1">
        <section className="flex flex-1 flex-col justify-between">
          {!slug ? (
            <div className="flex flex-1 items-center justify-center">
              <h1>Selecione uma aula</h1>
            </div>
          ) : !loading && data ? (
            <div>
              <VideoComponent videoId={data.lesson.videoId} />
              <AboutVideoComponent data={data} />
            </div>
          ) : (
            <h1 className="flex flex-1 items-center justify-center">
              Carregando...
            </h1>
          )}

          <FooterComponent />
        </section>
        <SidebarComponent />
      </main>
    </div>
  );
};
