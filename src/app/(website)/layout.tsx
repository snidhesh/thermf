import { Navbar } from "@/components/website/navbar";
import { Footer } from "@/components/website/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="website-theme min-h-screen bg-[var(--wt-bg)] text-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
