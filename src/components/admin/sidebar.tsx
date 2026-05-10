"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  UserPlus,
  Users,
  Video,
  FileText,
  MessageSquare,
  BarChart3,
  Calendar,
  Mail,
  MessageCircle,
  FolderOpen,
  Settings,
  ArrowLeft,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads / Applications", icon: UserPlus },
  { href: "/admin/members", label: "Members", icon: Users },
  { href: "/admin/videos", label: "Videos", icon: Video },
  { href: "/admin/documents", label: "Documents", icon: FileText },
  { href: "/admin/communications", label: "Communications", icon: MessageSquare },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/calendar", label: "Calendar", icon: Calendar },
  { href: "/admin/newsletter", label: "Newsletter", icon: Mail },
  { href: "/admin/whatsapp", label: "WhatsApp", icon: MessageCircle },
  { href: "/admin/resources", label: "Resources", icon: FolderOpen },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-rmf-navy text-white min-h-screen">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg">A</span>
          </div>
          <div>
            <p className="font-heading font-bold text-lg">RMF</p>
            <p className="text-xs text-gray-400">Admin CRM</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-red-500/20 text-red-300"
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
