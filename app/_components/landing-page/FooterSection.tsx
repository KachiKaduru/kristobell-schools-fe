import Link from "next/link";

interface FooterSectionProps {
  title: string;
  array: {title: string; href: string}[];
}

export default function FooterSection({title, array}: FooterSectionProps) {
  return (
    <div>
      <h4>{title}</h4>

      <ul className="text-grey-500">
        {array.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
