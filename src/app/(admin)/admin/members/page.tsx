import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { TierBadge } from "@/components/shared/tier-badge";
import { RoleBadge } from "@/components/shared/role-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

const sampleMembers = [
  { id: "1", name: "Dr. Sarah Al-Rashid", email: "sarah@example.com", tier: "fellow", role: "board", country: "UAE", status: "active", memberSince: "Jan 2024" },
  { id: "2", name: "Dr. Ahmed Khan", email: "ahmed@example.com", tier: "fellow", role: "member", country: "UAE", status: "active", memberSince: "Mar 2024" },
  { id: "3", name: "Dr. Emily Rodriguez", email: "emily@example.com", tier: "member", role: "member", country: "USA", status: "active", memberSince: "Jun 2024" },
  { id: "4", name: "Dr. Priya Sharma", email: "priya@example.com", tier: "member", role: "member", country: "India", status: "active", memberSince: "Sep 2024" },
  { id: "5", name: "Dr. Hans Mueller", email: "hans@example.com", tier: "associate", role: "member", country: "Germany", status: "active", memberSince: "Jan 2025" },
];

export default async function AdminMembersPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Members" description="Manage all RMF members.">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search members..." className="pl-9 w-64" />
        </div>
      </PageHeader>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Member</th>
                  <th className="text-left p-4 font-medium">Tier</th>
                  <th className="text-left p-4 font-medium">Role</th>
                  <th className="text-left p-4 font-medium">Country</th>
                  <th className="text-left p-4 font-medium">Since</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleMembers.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-muted/30">
                    <td className="p-4">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </td>
                    <td className="p-4"><TierBadge tier={member.tier} /></td>
                    <td className="p-4"><RoleBadge role={member.role} /></td>
                    <td className="p-4 text-muted-foreground">{member.country}</td>
                    <td className="p-4 text-muted-foreground">{member.memberSince}</td>
                    <td className="p-4 text-right">
                      <Button size="sm" variant="ghost" render={<Link href={`/admin/members/${member.id}`} />}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
