import { cn } from "@/lib/utils";

const TIER_STYLES = {
  associate: "bg-blue-100 text-blue-800 border-blue-200",
  member: "bg-amber-100 text-amber-800 border-amber-200",
  fellow: "bg-teal-100 text-teal-800 border-teal-200",
} as const;

const TIER_LABELS = {
  associate: "Associate",
  member: "Member",
  fellow: "Fellow",
} as const;

interface TierBadgeProps {
  tier: string;
  className?: string;
  size?: "sm" | "md";
}

export function TierBadge({ tier, className, size = "sm" }: TierBadgeProps) {
  const styles = TIER_STYLES[tier as keyof typeof TIER_STYLES] || TIER_STYLES.associate;
  const label = TIER_LABELS[tier as keyof typeof TIER_LABELS] || tier;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        styles,
        className
      )}
    >
      {label}
    </span>
  );
}
