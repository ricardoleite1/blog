import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 text-center gap-8">
      <h1 className="text-7xl font-extrabold">404</h1>
      <p>Página que você está procurando não foi encontrada.</p>

      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
