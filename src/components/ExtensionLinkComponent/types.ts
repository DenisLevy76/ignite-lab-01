import { AnchorHTMLAttributes, ReactNode } from "react";

export interface ExtensionLinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  title: string;
  description?: string;
}
