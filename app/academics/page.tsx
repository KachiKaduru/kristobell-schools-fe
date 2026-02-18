import PagesLayout from "../_components/landing-page/PagesLayout";
import AcademicsEducationalLevels from "../_components/landing-page/academics/AcademicsEducationalLevels";
import AcademicsEnroll from "../_components/landing-page/academics/AcademicsEnroll";
import AcademicsHero from "../_components/landing-page/academics/AcademicsHero";
import AcademicsPathway from "../_components/landing-page/academics/AcademicsPathway";

export default function AcademicsPage() {
  return (
    <PagesLayout>
      <AcademicsHero />
      <AcademicsPathway />
      <AcademicsEducationalLevels />
      <AcademicsEnroll />
    </PagesLayout>
  );
}
