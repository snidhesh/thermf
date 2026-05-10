import { NavbarV2 } from "@/components/website/v2/navbar";
import { FooterV2 } from "@/components/website/v2/footer";

export default function WebsiteV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="website-theme-v2 min-h-screen bg-white text-[#0A1628]">
      <NavbarV2 />
      <main className="flex-1">{children}</main>
      <FooterV2 />
    </div>
  );
}
