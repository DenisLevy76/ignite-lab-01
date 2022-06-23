import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";
import {
  LinkButtonComponentProps,
  LinkButtonComponentTypes,
  LinkButtonComponentVariants,
} from "./types";

const variants = {
  [LinkButtonComponentVariants.PRIMARY]:
    "flex item-center gap-2 justify-center bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-4 rounded whitespace-wrap  sm:whitespace-nowrap cursor-pointer transition-colors",
  [LinkButtonComponentVariants.OUTLINED]:
    "flex item-center gap-2 justify-center bg-transparent text-blue-500 font-bold px-3 py-4 cursor-pointer rounded whitespace-wrap sm:whitespace-nowrap border border-blue-500 hover:bg-blue-500 hover:text-grey-900 transition-colors",
};

export const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({
  variant = LinkButtonComponentVariants.PRIMARY,
  type = LinkButtonComponentTypes.NAVIGATION,
  className,
  href = "#",
  ...others
}) => {
  const types = {
    [LinkButtonComponentTypes.EXTERNAL]: (
      <a
        className={classNames(variants[variant], className)}
        href={href}
        {...others}
      />
    ),
    [LinkButtonComponentTypes.NAVIGATION]: (
      <Link
        className={classNames(variants[variant], className)}
        to={href}
        {...others}
      />
    ),
  };

  return types[type];
};
