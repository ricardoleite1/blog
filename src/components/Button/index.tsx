type ButtonVariants = "default" | "ghost" | "danger";

type ButtonProps = {
  variant?: ButtonVariants;
  icon?: React.ReactNode;
} & React.ComponentProps<"button">;

export function Button({
  children,
  icon,
  variant = "default",
  ...props
}: ButtonProps) {
  const buttonVariants = {
    default: "bg-slate-500 text-white",
    ghost: "bg-slate-300 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      {...props}
      className={
        buttonVariants[variant] +
        " flex items-center gap-2 py-2 px-3 rounded disabled:bg-slate-200 disabled:cursor-not-allowed disabled:text-slate-400 justify-center"
      }
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
