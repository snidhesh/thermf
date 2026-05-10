import { requireAuth } from "@/lib/auth";
import { PortalSidebar } from "@/components/portal/sidebar";
import { PortalTopbar } from "@/components/portal/topbar";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();

  return (
    <div className="flex min-h-screen">
      <PortalSidebar />
      <div className="flex-1 flex flex-col">
        <PortalTopbar />
        <main className="flex-1 p-6 bg-secondary/50">{children}</main>
      </div>
    </div>
  );
}
