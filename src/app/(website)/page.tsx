import { Hero } from "@/components/website/hero";
import { AboutSection } from "@/components/website/about-section";
import { MembershipSection } from "@/components/website/membership-section";
import { BoardSection } from "@/components/website/board-section";
import { NewsSection } from "@/components/website/news-section";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MembershipSection />
      <BoardSection />
      <NewsSection />
    </>
  );
}
