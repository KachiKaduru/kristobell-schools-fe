import {enrollProcessData} from "@/app/_constants";
import Container from "../../Container";

export default function AdmissionsEnrollment() {
  return (
    <section className="py-16">
      <Container className="space-y-16">
        <header>
          <h2 className="font-bold text-2xl">The Enrollment Process</h2>

          <p className="text-lg">
            We have designed our admission process to be transparent and straightforward. Follow
            these four simple steps to enroll your child at Kristobell Schools.
          </p>
        </header>

        <div className="flex flex-col gap-7">
          {enrollProcessData.map((item) => (
            <EnrollmentCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function EnrollmentCard({step = 1, title = "", description = ""}) {
  return (
    <div className="flex gap-5">
      <span className="grid place-content-center rounded-[50%] w-10 h-10 border-green-300 border-2">
        {step}
      </span>

      <div className="bg-white rounded-lg border border-grey-300 p-3">
        <h2 className="font-bold text-xl">{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
}
