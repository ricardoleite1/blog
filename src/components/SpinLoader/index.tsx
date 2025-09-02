type SpinLoaderProps = {
  containerClasses?: string;
}

export function SpinLoader({ containerClasses = ""}: SpinLoaderProps) {
  return <div className={`flex items-center justify-center w-10 h-10 border-5 border-t-transparentborder-slate-900 rounded-full animate-spin ${containerClasses}`}/>
}
