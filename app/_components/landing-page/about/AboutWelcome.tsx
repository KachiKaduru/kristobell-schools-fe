import Container from "@/app/_components/Container";

export default function AboutWelcome() {
  return (
    <section className="py-16">
      <Container className="grid grid-cols-[0.5fr_0.5fr]">
        <div></div>
        <div className="space-y-6">
          <span className="block w-fit bg-primary-600/30 text-primary-700 py-1 px-3 rounded-xl uppercase font-semibold text-sm">
            principal&apos;s welcome
          </span>
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to a Community of <span className="text-primary-700">Learners</span> and{" "}
            <span className="text-gold">Leaders</span>.
          </h1>

          <div className="text-grey-text space-y-4">
            <p>
              At Kristobell Schools, we believe that every child is a unique individual with the
              potential to achieve greatness. For over two decades, we have dedicated ourselves to
              creating an environment where academic excellence meets moral upbringing.
            </p>
            <p>
              Our curriculum is a robust blend of the Nigerian and British requirements, designed
              not just to help students pass examinations, but to prepare them for life. We nurture
              critical thinkers, compassionate citizens, and confident leaders who are proud of
              their heritage while being globally competitive.
            </p>
            <p>
              I invite you to explore our campus, meet our dedicated staff, and see firsthand the
              vibrant community we have built. Welcome to the Kristobell family.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
