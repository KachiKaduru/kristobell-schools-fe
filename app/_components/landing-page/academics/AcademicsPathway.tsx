import Container from "../../Container";

export default function AcademicsPathway() {
  return (
    <section className="py-16 bg-white">
      <Container className="grid grid-cols-[1fr_350px]">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">A Dual Pathway to Success</h2>
          <p className="text-grey-text">
            At Kristobell Schools, we believe in providing a holistic education that respects our
            local heritage while embracing global standards. Our curriculum is designed to challenge
            students intellectually and foster critical thinking skills.
            <br />
            <br />
            We integrate the{" "}
            <span className="text-primary-700 font-bold">Nigerian National Curriculum</span> with
            key elements of the{" "}
            <span className="text-denim font-bold">British National Curriculum</span>. This hybrid
            approach ensures our students are prepared for national exams (WAEC, NECO) as well as
            international assessments (IGCSE, Cambridge Checkpoint), giving them the flexibility to
            pursue higher education anywhere in the world.
          </p>
        </div>
        <div></div>
      </Container>
    </section>
  );
}
