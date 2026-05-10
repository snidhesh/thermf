import { ScrollReveal } from "@/components/website/scroll-reveal";
import Link from "next/link";
import { Users, ClipboardList, BookOpen, Lock } from "lucide-react";

const links = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Member Directory",
    subtitle: "Find RMF physicians",
    href: "/v2#board",
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Apply for Membership",
    subtitle: "Register your interest",
    href: "/v2#contact",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Scientific Chairs",
    subtitle: "12 clinical disciplines",
    href: "/v2#chairs",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Member Login",
    subtitle: "Access the portal",
    href: "/login",
  },
];

export function QuickLinksV2() {
  return (
    <section className="bg-[var(--wt2-bg-alt)] py-10 md:py-14 px-5 md:px-12 border-t border-b border-[var(--wt2-border)]">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white border border-[var(--wt2-border)] rounded p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[rgba(27,58,92,0.06)] flex items-center justify-center text-[var(--wt2-primary)] group-hover:bg-[rgba(27,58,92,0.12)] transition-colors">
                  {item.icon}
                </div>
                <div className="text-[14px] font-semibold text-[var(--wt2-text)] mb-1 group-hover:text-[var(--wt2-primary)] transition-colors">
                  {item.title}
                </div>
                <div className="text-[12px] text-[var(--wt2-text-muted)]">
                  {item.subtitle}
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
