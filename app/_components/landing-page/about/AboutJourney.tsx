import Container from "@/app/_components/Container";
import {aboutJourneyData} from "@/app/_constants";

export default function AboutJourney() {
  return (
    <section className="py-12 bg-grey-700">
      <Container className="space-y-16">
        <div className="space-y-4">
          <h2 className="pb-4 border-b-4 border-primary-700 w-fit mx-auto font-bold text-3xl">
            Our Journey
          </h2>
          <p className="text-center text-grey-text">Over 25 years of educational excellence</p>
        </div>

        <div>
          {aboutJourneyData.map((item) => (
            <JourneyCard key={item.year} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function JourneyCard({
  year,
  title,
  description,
  color,
  direction,
}: {
  year: string;
  title: string;
  description: string;
  color: string;
  direction: string;
}) {
  const isLeft = direction === "left";
  const bgColor = "bg-" + color;

  return (
    <div className="grid grid-cols-[1fr_.3fr_1fr]" style={{direction: isLeft ? "rtl" : "ltr"}}>
      <aside></aside>
      <span className="flex flex-col items-center">
        <span className={`w-2 h-2 rounded-[50%] ${bgColor} block`} />
        <span className="h-full w-0.5 bg-gray-300" />
      </span>
      <div className="space-y-2 pb-10 w-[80%]">
        <p className={`${bgColor} text-white font-semibold w-fit px-2 rounded-lg py-1`}>{year}</p>
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-grey-text">{description}</p>
      </div>
    </div>
  );
}
