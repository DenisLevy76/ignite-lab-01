import { CheckCircle, Lock } from "phosphor-react";
import { LessonComponentsProps } from "./types";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

export const LessonComponent: React.FC<LessonComponentsProps> = ({
  title,
  slug,
  type,
  availableAt,
}) => {
  const formattedDate = format(
    availableAt,
    "EEEE' • 'd' de ' MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <article>
      <a href="#" className="flex flex-col gap-2">
        <p className="text-grey-300 text-base">{formattedDate}</p>

        <div className="flex flex-col justify-center border border-grey-600 rounded p-4 gap-4">
          <header className="flex justify-between items-center">
            {isPast(availableAt) ? (
              <p className="text-sm text-blue-500 font-bold flex items-center gap-2">
                <CheckCircle size={20} weight="bold" />
                Conteúdo liberado
              </p>
            ) : (
              <p className="text-sm text-orange-500 font-bold flex items-center gap-2">
                <Lock size={20} weight="bold" />
                Em breve
              </p>
            )}
            <span className="text-xs text-green-300 border rounded border-green-300 py-1 px-2">
              {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>

          <strong className="text-grey-200 text-base font-bold">{title}</strong>
        </div>
      </a>
    </article>
  );
};
