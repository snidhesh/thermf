import { HeroV2 } from "@/components/website/v2/hero";
import { QuickLinksV2 } from "@/components/website/v2/quick-links";
import { AboutMembershipV2 } from "@/components/website/v2/about-membership";
import { MembershipSectionV2 } from "@/components/website/v2/membership-section";
import { ChairsSectionV2 } from "@/components/website/v2/chairs-section";
import { ImmersionSectionV2 } from "@/components/website/v2/immersion-section";
import { BoardNewsV2 } from "@/components/website/v2/board-news";
import { ContactSectionV2 } from "@/components/website/v2/contact-section";

export const revalidate = 3600;

export default function HomePageV2() {
  return (
    <>
      <HeroV2 />
      <QuickLinksV2 />
      <AboutMembershipV2 />
      <MembershipSectionV2 />
      <ChairsSectionV2 />
      <ImmersionSectionV2 />
      <BoardNewsV2 />
      <ContactSectionV2 />
    </>
  );
}
