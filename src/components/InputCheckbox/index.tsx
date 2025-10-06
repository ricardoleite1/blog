import { useId } from "react";

type InputCheckboxProps = {
  labelText: string;
  type?: "checkbox";
} & React.ComponentProps<"input">;

export function InputCheckbox({
  labelText,
  type = "checkbox",
  ...props
}: InputCheckboxProps) {
  const id = useId();

  return (
    <label htmlFor={id} className="flex gap-2 items-center">
      <input
        {...props}
        id={id}
        className="bg-white p-2 text-base/tight w-4 h-4 text-slate-900 border-none outline-0 disabled:bg-slate-300 disabled:cursor-not-allowed"
        type={type}
      />
      {labelText}
    </label>
  );
}
