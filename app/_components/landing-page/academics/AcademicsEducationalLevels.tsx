import {educationalLevels, EducationalLevelType} from "@/app/_constants/academics";
import Container from "../../Container";

function EducationLevelCard({
  title,
  description,
  courses,
  activities,
  classes,
  color,
  direction,
}: EducationalLevelType) {
  const colorMap: Record<string, string> = {
    gold: "text-gold bg-gold/20",
    "primary-700": "text-primary-700 bg-primary-700/20",
    denim: "text-denim bg-denim/20",
  };

  const selectedColor = colorMap[color];
  const isReverse = direction === "reverse";

  const gridColsClass = isReverse ? "grid-cols-[1fr_.7fr]" : "grid-cols-[.7fr_1fr]";

  return (
    <div
      className={`bg-white shadow-lg border-grey-700 rounded-xl grid ${gridColsClass} gap-5 p-8 `}
    >
      <div className={`${isReverse ? "col-start-2 col-end-3 row-span-full" : ""}`}>
        <h2 className={`text-xl font-bold w-fit ${selectedColor}`}>{classes}</h2>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4 text-grey-text">{description}</p>

        <div className="flex gap-4">
          <div>
            <h2 className="text-base font-semibold mb-2 uppercase tracking-wider text-grey-500">
              {courses.title}
            </h2>
            <ul className="list-disc pl-5">
              {courses.items.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold mb-2 uppercase tracking-wider text-grey-500">
              {activities.title}
            </h2>
            <ul className="flex gap-3">
              {activities.items.map((activity) => (
                <li
                  key={activity}
                  className={`${selectedColor} rounded-2xl font-semibold px-2 py-1 w-fit capitalize flex`}
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AcademicsEducationalLevels() {
  return (
    <section className="py-16 bg-grey-600">
      <Container className="space-y-16">
        <div className="text-center">
          <h4 className="font-bold uppercase text-primary-700 tracking-wider">our programs</h4>
          <h1 className="text-4xl font-bold mt-2">Educational Levels</h1>
        </div>

        <div className="flex flex-col gap-12">
          {educationalLevels.map((level) => (
            <EducationLevelCard key={level.title} {...level} />
          ))}
        </div>
      </Container>
    </section>
  );
}
