import { InputHTMLAttributes } from "react";

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}
