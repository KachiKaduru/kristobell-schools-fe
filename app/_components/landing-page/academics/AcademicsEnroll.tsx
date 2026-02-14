import Container from "../../Container";

export default function AcademicsEnroll() {
  return (
    <section className="bg-white py-16">
      <Container className="text-center bg-denim/5 border border-denim/20 rounded-lg p-12 space-y-6">
        <h2 className="text-3xl font-bold capitalize">Ready to enroll?</h2>
        <p className="text-grey-text w-[47%] mx-auto">
          Applications are now open for the 2024/2025 academic session. Secure your child&apos;s
          future at Kristobell Schools today.
        </p>

        <div className="space-x-4 font-semibold">
          <button className="cursor-pointer rounded-lg py-3 px-8 text-white bg-denim ">
            Start Admission
          </button>
          <button className="cursor-pointer rounded-lg py-3 px-8 border border-[#D1D5DB] bg-white">
            Inquire More
          </button>
        </div>
      </Container>
    </section>
  );
}
