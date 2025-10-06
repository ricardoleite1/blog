import { useId } from "react";

type InputTextProps = {
  labelText: string;
} & React.ComponentProps<"input">;

export function InputText({ labelText, ...props }: InputTextProps) {
  const id = useId();

  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      {labelText}
      <input
        id={id}
        {...props}
        className="bg-white p-2 rounded text-base/tight text-slate-900 border-none outline-0 ring-2 ring-slate-400 disabled:bg-slate-300 disabled:cursor-not-allowed"
      />
    </label>
  );
}
