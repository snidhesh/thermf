import { cn } from "@/lib/utils";

const ROLE_STYLES = {
  member: "bg-gray-100 text-gray-800 border-gray-200",
  board: "bg-purple-100 text-purple-800 border-purple-200",
  admin: "bg-red-100 text-red-800 border-red-200",
} as const;

const ROLE_LABELS = {
  member: "Member",
  board: "Board",
  admin: "Admin",
} as const;

interface RoleBadgeProps {
  role: string;
  className?: string;
}

export function RoleBadge({ role, className }: RoleBadgeProps) {
  const styles = ROLE_STYLES[role as keyof typeof ROLE_STYLES] || ROLE_STYLES.member;
  const label = ROLE_LABELS[role as keyof typeof ROLE_LABELS] || role;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        styles,
        className
      )}
    >
      {label}
    </span>
  );
}
