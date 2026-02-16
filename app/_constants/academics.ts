export interface EducationalLevelType {
  title: string;
  description: string;
  classes: string;
  courses: {
    title: string;
    items: string[];
  };
  activities: {
    title: string;
    items: string[];
  };
  color: string;
  direction?: "normal" | "reverse";
}

export const educationalLevels: EducationalLevelType[] = [
  {
    title: "Early Years Foundation",
    description:
      "Our Early Years program focuses on the holistic development of the child through the Montessori method and play-based learning. We create a safe, stimulating environment where curiosity is nurtured, and social skills are developed.",
    classes: "Creche • KG 1-2 • Nursery",
    courses: {
      title: "Key Subjects",
      items: ["Numeracy & Literacy", "Creative Arts", "Phonics", "Understanding the world"],
    },
    activities: {
      title: "Activities",
      items: ["Music & Movement", "Outdoor Play", "Storytelling"],
    },
    color: "gold",
    direction: "normal",
  },
  {
    title: "Primary School",
    description:
      "The primary curriculum is robust and designed to lay a solid academic foundation. We emphasize literacy, numeracy, and critical thinking while introducing students to science and technology.",
    classes: "GRADE 1 - GRADE 6",
    courses: {
      title: "Key Subjects",
      items: [
        "Mathematics & English",
        "Basic Science & Tech",
        "Verbal & Quant. Reasoning",
        "ICT & Coding",
      ],
    },
    activities: {
      title: "Extracurriculars",
      items: ["chess club", "ballet", "swimming", "taekwondo"],
    },
    color: "primary-700",
    direction: "reverse",
  },
  {
    title: "Secondary School",
    description:
      "Our secondary school prepares students for major national and international examinations. We offer specialized streams in Science, Arts, and Commercial subjects with a strong emphasis on practicals in our fully equipped labs.",
    classes: "JSS1 - SSS3",
    courses: {
      title: "departments",
      items: [
        "Sciences (Physics, Chem, Bio)",
        "Humanities & Arts",
        "Commercial & Business",
        "Technical Drawing",
      ],
    },
    activities: {
      title: "Clubs & Societies",
      items: ["JETS Club", "Press Club", "robotics", "debate"],
    },
    color: "denim",
    direction: "normal",
  },
];
