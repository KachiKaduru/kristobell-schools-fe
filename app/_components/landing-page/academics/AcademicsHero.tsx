import Container from "../../Container";

export default function AcademicsHero() {
  return (
    <main className="bg-primary-700 py-20">
      <Container>
        <div className="space-y-4 w-[60%]">
          <p className="uppercase text-white bg-gold px-3 py-1 rounded-2xl w-fit">CURRICULUM</p>

          <h1 className="font-bold text-6xl leading-16 text-white">
            Academic Excellence <span className="text-gold">Without Borders</span>
          </h1>

          <p className="text-lg text-grey-600">
            Our comprehensive academic program blends the best of the Nigerian and British National
            Curricula to nurture globally competitive students.
          </p>
        </div>
      </Container>
    </main>
  );
}
