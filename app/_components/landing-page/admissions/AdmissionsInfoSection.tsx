import {Icon} from "@iconify/react";
import Container from "../../Container";

const infoData = [
  {
    title: "Admission Forms",
    icon: "mi:document",
    description: "Download the offline application form to fill manually",
    buttonText: "Download PDF",
    buttonClass: "bg-transparent border border-grey-600",
    iconColor: "text-crimson",
  },
  {
    title: "Fees Structure",
    icon: "streamline:padlock-square-1",
    description: "To maintain privacy, our fee structure is available upon request.",
    buttonText: "Request Info",
    buttonClass: "bg-denim text-white",
    iconColor: "text-denim",
  },
];

export default function AdmissionsInfoSection() {
  return (
    <section>
      <Container>
        <div className="flex gap-6">
          {infoData.map((item) => (
            <InfoSectionCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconColor={item.iconColor}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function InfoSectionCard({
  title = "",
  description = "",
  icon = "",
  iconColor = "",
  buttonText = "",
  buttonClass = "",
}) {
  return (
    <div className="bg-white rounded-xl border border-grey-600 p-6 space-y-4">
      <Icon icon={icon} className={`text-3xl ${iconColor}`} />

      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-grey-text text-sm">{description}</p>

      <button
        className={`font-medium p-3 rounded-md w-full text-center border border-grey-600 ${buttonClass}`}
      >
        {buttonText}
      </button>
    </div>
  );
}
