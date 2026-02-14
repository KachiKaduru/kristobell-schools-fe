import AcademicsEnroll from "../_components/landing-page/academics/AcademicsEnroll";
import AcademicsHero from "../_components/landing-page/academics/AcademicsHero";
import AcademicsPathway from "../_components/landing-page/academics/AcademicsPathway";
import PagesLayout from "../_components/landing-page/PagesLayout";

export default function AcademicsPage() {
  return (
    <PagesLayout>
      <AcademicsHero />
      <AcademicsPathway />
      <AcademicsEnroll />
    </PagesLayout>
  );
}
