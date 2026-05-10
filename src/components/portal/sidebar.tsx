"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOutAction } from "@/lib/actions";
import {
  LayoutDashboard,
  Video,
  FileText,
  Calendar,
  Users,
  Building2,
  FolderOpen,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/portal/videos", label: "Video Library", icon: Video },
  { href: "/portal/content", label: "Content & PDFs", icon: FileText },
  { href: "/portal/sessions", label: "Sessions", icon: Calendar },
  { href: "/portal/members", label: "Member Directory", icon: Users },
  { href: "/portal/suppliers", label: "Suppliers", icon: Building2 },
  { href: "/portal/resources", label: "Resources", icon: FolderOpen },
  { href: "/portal/settings", label: "Settings", icon: Settings },
];

export function PortalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-rmf-navy text-white min-h-screen">
      <div className="p-6 border-b border-white/10">
        <Link href="/portal/dashboard" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-rmf-gold flex items-center justify-center">
            <span className="text-rmf-navy font-heading font-bold text-lg">R</span>
          </div>
          <div>
            <p className="font-heading font-bold text-lg">RMF</p>
            <p className="text-xs text-gray-400">Members Portal</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-rmf-gold/20 text-rmf-gold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <form action={signOutAction}>
          <button
            type="submit"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 w-full transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
