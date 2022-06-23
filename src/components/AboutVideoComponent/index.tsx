import { DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { GetLessonBySlugResponse } from "../../pages/EventPage/types";
import { ExtensionLinkComponent } from "../ExtensionLinkComponent";
import { LinkButtonComponent } from "../LinkButtonComponent";
import { TeacherInfoComponent } from "../TeacherInfoComponent";

export const AboutVideoComponent: React.FC<{
  data: GetLessonBySlugResponse;
}> = ({ data }) => {
  return (
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
            <DiscordLogo size={24} weight="bold" /> COMUNIDADE NO DISCORD
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
  );
};
