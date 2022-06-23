import { AnchorHTMLAttributes } from "react";

export enum LinkButtonComponentVariants {
  PRIMARY = "primary",
  OUTLINED = "outlined",
}

export enum LinkButtonComponentTypes {
  NAVIGATION = "navigation",
  EXTERNAL = "external",
}

export interface LinkButtonComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outlined";
  type?: LinkButtonComponentTypes;
}
