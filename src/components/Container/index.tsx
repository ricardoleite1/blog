type ContainerProps = {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-6">{children}</div>
    </div>
  )
}
