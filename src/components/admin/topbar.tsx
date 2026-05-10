import { auth } from "../../../auth";
import { UserAvatar } from "@/components/shared/user-avatar";
import { RoleBadge } from "@/components/shared/role-badge";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function AdminTopbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b bg-white px-6">
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </Button>
        <RoleBadge role="admin" />
        <UserAvatar name={user?.name || "Admin"} image={user?.image} size="sm" />
        <div className="hidden sm:block">
          <p className="text-sm font-medium">{user?.name}</p>
          <p className="text-xs text-muted-foreground">{user?.email}</p>
        </div>
      </div>
    </header>
  );
}
