import Container from "../../Container";

export default function AboutHero() {
  return (
    <main className="py-32 bg-primary-600/90">
      <Container className="text-white text-center space-y-4">
        <h1 className="text-6xl font-extrabold">About Kristobell Schools</h1>
        <p className="text-xl text-grey-600 w-[57%] mx-auto">
          Dedicated to nurturing intellectual curiosity and moral integrity in the next generation
          of Nigerian leaders since 1998.
        </p>
      </Container>
    </main>
  );
}
