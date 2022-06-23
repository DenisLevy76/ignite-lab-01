import { CaretRight } from "phosphor-react";
import { ExtensionLinkComponentProps } from "./types";

export const ExtensionLinkComponent: React.FC<ExtensionLinkComponentProps> = ({
  icon,
  href,
  title,
  description,
}) => {
  return (
    <a
      href={href}
      className="flex items-center bg-grey-700 hover:bg-grey-600 rounded overflow-hidden cursor-pointer w-full justify-between"
    >
      <div className="flex px-6 h-full bg-green-500 items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-2 px-6 py-3">
        <strong className="font-bold text-2xl text-grey-100">{title}</strong>
        <p className="text-sm text-grey-200">{description}</p>
      </div>
      <div className="flex items-center justify-center text-blue-500 p-6">
        <CaretRight size={24} weight="bold" />
      </div>
    </a>
  );
};
