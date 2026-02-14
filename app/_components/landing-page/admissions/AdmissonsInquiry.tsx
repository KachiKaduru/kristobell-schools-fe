import {Icon} from "@iconify/react";

const inquiryInfo = [
  {title: "Phone", info: "+234 800 123 4567", icon: "ic:outline-local-phone"},
  {title: "email", info: "admissions@kristobell.com", icon: "line-md:email"},
  {title: "office hours", info: "Mon - Fri: 8am - 4pm", icon: "majesticons:clock-line"},
];

export default function AdmissonsInquiry() {
  return (
    <div className="border border-[#E5E7EB] rounded-xl p-6 space-y-4">
      <h2 className="flex gap-2 items-center font-bold">
        <Icon icon="ic:round-support-agent" className="text-green-700 w-8 h-8" />
        Admissions Office
      </h2>

      <div className="grid gap-3">
        {inquiryInfo.map((item) => {
          return (
            <div key={item.title} className=" flex gap-1">
              <Icon icon={item.icon} className="text-gold text-xl mr-2" />
              <div>
                <h4 className="font-semibold capitalize">{item.title}</h4>
                <span className="text-grey-text">{item.info}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
