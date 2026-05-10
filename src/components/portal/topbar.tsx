import { auth } from "../../../auth";
import { UserAvatar } from "@/components/shared/user-avatar";
import { TierBadge } from "@/components/shared/tier-badge";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function PortalTopbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b bg-white px-6">
      <Button variant="ghost" size="icon" className="lg:hidden mr-3">
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex-1" />

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-3">
          {user?.membershipTier && (
            <TierBadge tier={user.membershipTier} />
          )}
          <UserAvatar
            name={user?.name || "User"}
            image={user?.image}
            size="sm"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
