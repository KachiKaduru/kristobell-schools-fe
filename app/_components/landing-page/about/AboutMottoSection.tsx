import {Icon} from "@iconify/react";
import Container from "../../Container";
import {mottoInfo} from "@/app/_constants";

export default function AboutMottoSection() {
  return (
    <section className="bg-grey-600">
      <Container>
        <div className="grid grid-cols-3 gap-6">
          {mottoInfo.map((info) => (
            <MottoCard key={info.title} {...info} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function MottoCard({
  title,
  icon,
  description,
  color,
}: {
  title: string;
  icon: string;
  description: string;
  color: string;
}) {
  const iconBgColor = "bg-" + color + "/70";

  return (
    <div className="bg-white rounded-xl p-8 shadow-xl text-center mt-2">
      <span
        className={`flex items-center justify-center w-16 h-16 rounded-full ${iconBgColor} mb-4 mx-auto`}
      >
        <Icon icon={icon} className="w-7 h-9" />
      </span>
      <h3 className="text-xl font-bold leading-8">{title}</h3>
      <p className="text-grey-text ">{description}</p>
    </div>
  );
}
