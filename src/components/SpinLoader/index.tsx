type SpinLoaderProps = {
  className?: string;
}

export function SpinLoader({ className = ""}: SpinLoaderProps) {
  return (
    <div className={`flex items-center justify-center min-h-screen ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 border-5 border-t-transparent dark:border-t-transparent border-slate-900 dark:border-white rounded-full animate-spin"/>
    </div>
  )
}
