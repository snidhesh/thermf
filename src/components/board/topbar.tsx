import { auth } from "../../../auth";
import { UserAvatar } from "@/components/shared/user-avatar";
import { RoleBadge } from "@/components/shared/role-badge";

export async function BoardTopbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b bg-white px-6">
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <RoleBadge role={user?.role || "board"} />
        <UserAvatar name={user?.name || "Board Member"} image={user?.image} size="sm" />
        <div className="hidden sm:block">
          <p className="text-sm font-medium">{user?.name}</p>
          <p className="text-xs text-muted-foreground">{user?.email}</p>
        </div>
      </div>
    </header>
  );
}
