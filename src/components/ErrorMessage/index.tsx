import Link from "next/link";

type ErrorMessageProps = {
  type: string;
  message: string;
}

export function ErrorMessage({ type, message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 text-center gap-8">
      <h1 className="text-7xl font-extrabold">{type}</h1>
      <p>{message}</p>

      <Link href="/">Voltar para a página inicial</Link>
    </div>
  )
}
