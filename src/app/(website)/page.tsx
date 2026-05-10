import { Hero } from "@/components/website/hero";
import { AboutSection } from "@/components/website/about-section";
import { MembershipSection } from "@/components/website/membership-section";
import { ChairsSection } from "@/components/website/chairs-section";
import { ImmersionSection } from "@/components/website/immersion-section";
import { BoardSection } from "@/components/website/board-section";
import { NewsSection } from "@/components/website/news-section";
import { RegisterSection } from "@/components/website/register-section";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MembershipSection />
      <ChairsSection />
      <ImmersionSection />
      <BoardSection />
      <NewsSection />
      <RegisterSection />
    </>
  );
}
