import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  name: string;
  image?: string | null;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-16 w-16 text-lg",
};

export function UserAvatar({ name, image, className, size = "md" }: UserAvatarProps) {
  return (
    <Avatar className={cn(sizes[size], className)}>
      {image && <AvatarImage src={image} alt={name} />}
      <AvatarFallback className="bg-rmf-navy text-white font-medium">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
