import { useParams } from "react-router-dom";
import { AboutVideoComponent } from "../../components/AboutVideoComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { SidebarComponent } from "../../components/SidebarComponent";
import { VideoComponent } from "../../components/VideoComponent";
import { useGetLessonBySlugQuery } from "../../graphql/generated";
import { EventPageURLParams } from "./types";

export const EventPage: React.FC = () => {
  const { slug } = useParams<EventPageURLParams>();
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug,
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex flex-1">
        <section className="flex flex-1 flex-col justify-between">
          {!slug ? (
            <div className="flex flex-1 items-center justify-center">
              <h1>Selecione uma aula</h1>
            </div>
          ) : !loading && data && data.lesson ? (
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
