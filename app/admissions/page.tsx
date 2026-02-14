import Container from "../_components/Container";
import PagesLayout from "../_components/landing-page/PagesLayout";
import AdmissionsEnrollment from "../_components/landing-page/admissions/AdmissionsEnrollment";
import AdmissionsHero from "../_components/landing-page/admissions/AdmissionsHero";
import AdmissionsInfoSection from "../_components/landing-page/admissions/AdmissionsInfoSection";
import AdmissonsApplyCard from "../_components/landing-page/admissions/AdmissonsApplyCard";
import AdmissonsInquiry from "../_components/landing-page/admissions/AdmissonsInquiry";
import FAQSection from "../_components/landing-page/admissions/FAQSection";

export default function AdmissionsPage() {
  return (
    <PagesLayout>
      <section className="bg-grey-700">
        <AdmissionsHero />
        <Container className="grid grid-cols-[1fr_350px]">
          <div>
            <AdmissionsEnrollment />
            <AdmissionsInfoSection />
            <FAQSection />
          </div>

          <aside className="py-16  space-y-5">
            <AdmissonsApplyCard />
            <AdmissonsInquiry />
          </aside>
        </Container>
      </section>
    </PagesLayout>
  );
}
