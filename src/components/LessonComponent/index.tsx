import { CheckCircle, Lock } from "phosphor-react";
import { LessonComponentsProps } from "./types";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

export const LessonComponent: React.FC<LessonComponentsProps> = ({
  title,
  slug,
  type,
  activeLesson,
  availableAt,
}) => {
  const formattedDate = format(
    availableAt,
    "EEEE' • 'd' de ' MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className="flex flex-col gap-2 group relative"
    >
      {activeLesson ? (
        <div className="w-6 h-6 bg-green-500 absolute -left-1 top-1/2 rounded-sm rotate-45"></div>
      ) : (
        <></>
      )}
      <p className="text-grey-300 text-base">{formattedDate}</p>

      <div
        className={`flex flex-col justify-center border border-grey-600 rounded p-4 gap-4 group-hover:border-green-300 ${
          activeLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex justify-between items-center">
          {isPast(availableAt) ? (
            <p
              className={`text-sm font-bold flex items-center gap-2 ${
                activeLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} weight="bold" />
              Conteúdo liberado
            </p>
          ) : (
            <p
              className={`text-sm font-bold flex items-center gap-2 ${
                activeLesson ? "text-white" : "text-orange-500"
              }`}
            >
              <Lock size={20} weight="bold" />
              Em breve
            </p>
          )}
          <span
            className={`text-xs  border rounded  py-1 px-2 ${
              activeLesson
                ? "text-white border-white"
                : "text-green-300 border-green-300"
            }`}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={`text-base font-bold ${
            activeLesson ? "text-white" : "text-grey-200"
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
