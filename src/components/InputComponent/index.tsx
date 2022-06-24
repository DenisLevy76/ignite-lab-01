import { InputComponentProps } from "./types";

export const InputComponent: React.FC<InputComponentProps> = ({
  label,
  id,
  ...others
}) => {
  return (
    <div className="flex flex-col gap-2 text-left">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="border-none bg-grey-900 text-white rounded p-5"
        {...others}
      />
    </div>
  );
};
