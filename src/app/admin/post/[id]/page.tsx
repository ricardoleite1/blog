export const dynamic = "force-dynamic";

type AdminPostIDPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIDPage({
  params,
}: AdminPostIDPageProps) {
  const { id } = await params;

  return <div>{id}</div>;
}
