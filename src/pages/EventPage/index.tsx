import { gql, useQuery } from "@apollo/client";
import { DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { useParams } from "react-router-dom";
import { ExtensionLinkComponent } from "../../components/ExtensionLinkComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { LinkButtonComponent } from "../../components/LinkButtonComponent";
import { SidebarComponent } from "../../components/SidebarComponent";
import { TeacherInfoComponent } from "../../components/TeacherInfoComponent";
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
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug,
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex flex-1">
        <section className="flex flex-1 flex-col">
          {slug && data ? (
            <>
              <VideoComponent videoId={data.lesson.videoId} />
              <article className="flex flex-col p-8 gap-20">
                <section className="flex flex-col lg:flex-row gap-16 justify-between">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                    <p className="text-base text-grey-200 leading-relaxed">
                      {data.lesson.description}
                    </p>
                    <TeacherInfoComponent
                      photoAlt="Foto do professor"
                      teacherBio={data.lesson.teacher.bio}
                      teacherName={data.lesson.teacher.name}
                      teacherPhoto={data.lesson.teacher.avatarURL}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <LinkButtonComponent variant="primary" href="#">
                      <DiscordLogo size={24} weight="bold" /> COMUNIDADE NO
                      DISCORD
                    </LinkButtonComponent>
                    <LinkButtonComponent variant="outlined" href="#">
                      <Lightning size={24} weight="bold" />
                      ACESSE O DESAFIO
                    </LinkButtonComponent>
                  </div>
                </section>
                <div className="flex flex-col lg:flex-row gap-6">
                  <ExtensionLinkComponent
                    icon={<FileArrowDown size={20} weight="bold" />}
                    title="Material complementar"
                    description="Acesse o material complementar para acelerar o seu desenvolvimento"
                  />
                  <ExtensionLinkComponent
                    icon={<FileArrowDown size={20} weight="bold" />}
                    title="Material complementar"
                  />
                </div>
              </article>
              <FooterComponent />
            </>
          ) : (
            <h1>Vídeo não encontrado</h1>
          )}
        </section>
        <SidebarComponent />
      </main>
    </div>
  );
};
