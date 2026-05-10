import { requireRole } from "@/lib/auth";
import { BoardSidebar } from "@/components/board/sidebar";
import { BoardTopbar } from "@/components/board/topbar";

export default async function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole(["board", "admin"]);

  return (
    <div className="flex min-h-screen">
      <BoardSidebar />
      <div className="flex-1 flex flex-col">
        <BoardTopbar />
        <main className="flex-1 p-6 bg-secondary/50">{children}</main>
      </div>
    </div>
  );
}
