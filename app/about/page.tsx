import AboutHero from "../_components/landing-page/about/AboutHero";
import AboutJourney from "../_components/landing-page/about/AboutJourney";
import AboutMottoSection from "../_components/landing-page/about/AboutMottoSection";
import AboutWelcome from "../_components/landing-page/about/AboutWelcome";
import PagesLayout from "../_components/landing-page/PagesLayout";

export default function AboutUsPage() {
  return (
    <PagesLayout>
      <AboutHero />
      <AboutMottoSection />
      <AboutWelcome />
      <AboutJourney />
    </PagesLayout>
  );
}
