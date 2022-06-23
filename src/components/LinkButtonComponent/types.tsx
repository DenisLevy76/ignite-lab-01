import { AnchorHTMLAttributes } from "react";

export enum LinkButtonComponentVariants {
  PRIMARY = "primary",
  OUTLINED = "outlined",
}

export interface LinkButtonComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "primary" | "outlined";
}
