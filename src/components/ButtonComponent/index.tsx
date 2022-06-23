import { ButtonHTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";

export const ButtonComponent: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...others }) => {
  return (
    <>
      <button
        className={classNames(
          "flex item-center gap-2 justify-center bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-4 rounded whitespace-nowrap"
        )}
        {...others}
      >
        {children}
      </button>
      {/* <button className="flex item-center gap-2 justify-center bg-transparent text-blue-500 hover:border-blue-600 hover:text-blue-600 font-bold px-3 py-4 rounded whitespace-nowrap border border-blue-500">
        <Lightning size={24} weight="bold" />
        ACESSE O DESAFIO
      </button> */}
    </>
  );
};
