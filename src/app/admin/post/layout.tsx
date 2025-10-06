import { NavAdmin } from "@/components/admin/NavAdmin";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <NavAdmin></NavAdmin>
      {children}
    </>
  );
}
