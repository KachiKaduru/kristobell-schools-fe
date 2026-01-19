import AdmissionsEnrollment from "../_components/landing-page/admissions/AdmissionsEnrollment";
import AdmissionsHero from "../_components/landing-page/admissions/AdmissionsHero";
import PagesLayout from "../_components/landing-page/PagesLayout";

export default function AdmissionsPage() {
  return (
    <PagesLayout>
      <AdmissionsHero />
      <AdmissionsEnrollment />
    </PagesLayout>
  );
}
