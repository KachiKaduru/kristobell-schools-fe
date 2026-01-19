import Image from "next/image";
import logoImg from "../../public/logo.svg";
import Link from "next/link";

export default function LogoComponent() {
  return (
    <Link href="/">
      <div className="flex gap-3 items-center">
        <Image src={logoImg} alt="Logo" />
        <span>Kristobell Schools</span>
      </div>
    </Link>
  );
}
