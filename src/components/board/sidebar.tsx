"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  FileUp,
  ArrowLeft,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/board", label: "Board Dashboard", icon: LayoutDashboard },
  { href: "/board/sessions", label: "My Sessions", icon: Calendar },
  { href: "/board/bookings", label: "My Bookings", icon: BookOpen },
  { href: "/board/content", label: "Submit Content", icon: FileUp },
];

export function BoardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-rmf-navy text-white min-h-screen">
      <div className="p-6 border-b border-white/10">
        <Link href="/board" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg">B</span>
          </div>
          <div>
            <p className="font-heading font-bold text-lg">RMF</p>
            <p className="text-xs text-gray-400">Board Portal</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/board" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-purple-500/20 text-purple-300"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-1">
        <Link
          href="/portal/dashboard"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Portal
        </Link>
      </div>
    </aside>
  );
}
