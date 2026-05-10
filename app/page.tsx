import { getClient } from "@/lib/sanity";
import { homepageQuery } from "@/lib/queries";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionCountdown } from "@/components/SectionCountdown";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionHighlights } from "@/components/SectionHighlights";
import { SectionTickets } from "@/components/SectionTickets";
import { SectionGuestStars } from "@/components/SectionGuestStars";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionSponsors } from "@/components/SectionSponsors";
import { SectionSocial } from "@/components/SectionSocial";
import { SectionFAQ } from "@/components/SectionFAQ";
import { SectionContact } from "@/components/SectionContact";
import { SectionFooter } from "@/components/SectionFooter";
import { HeroSection } from "@/components/HeroSection";

export const revalidate = 60;

export default async function HomePage() {
  const data = await getClient().fetch(homepageQuery);
  const defaultOrder = [
    "hero",
    "about",
    "description",
    "highlights",
    "tickets",
    "guestStars",
    "gallery",
    "sponsors",
    "social",
    "faq",
    "contact",
    "footer",
  ];
  const sections = (
    data.sectionSettings?.sections?.filter((section: any) => section.enabled) ||
    defaultOrder.map((sectionId) => ({ sectionId, enabled: true }))
  ).filter(Boolean);

  const sectionMap: Record<string, React.ReactNode> = {
    hero: (
      <HeroSection
        heroSection={data.heroSection}
        countdown={data.countdownSettings}
      />
    ),
    about: <SectionAbout data={data.aboutEvent} />,
    description: <SectionDescription data={data.eventDescription} />,
    highlights: <SectionHighlights data={data.eventHighlights} />,
    tickets: (
      <SectionTickets
        ticketSettings={data.ticketSettings}
        sellers={data.offlineTicketSellers}
      />
    ),
    guestStars: <SectionGuestStars artists={data.guestStars} />,
    gallery: <SectionGallery items={data.gallery} />,
    sponsors: (
      <SectionSponsors sponsors={data.sponsors} partners={data.partners} />
    ),
    social: <SectionSocial links={data.socialLinks} />,
    faq: <SectionFAQ items={data.faq} />,
    contact: <SectionContact info={data.contactInfo} />,
    footer: <SectionFooter data={data.footerSettings} />,
  };

  return (
    <>
      {sections.map((section: any, index: number) => (
        <div key={section.sectionId || index}>
          {sectionMap[section.sectionId]}
        </div>
      ))}
    </>
  );
}
