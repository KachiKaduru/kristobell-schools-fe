import Image from "next/image";
import logoImg from "@/public/logo.svg";
import Link from "next/link";

export default function LogoComponent() {
  return (
    <Link href="/">
      <div className="flex gap-3 items-center">
        <Image src={logoImg} alt="Logo" />
        <h2 className="font-bold text-xl">Kristobell Schools</h2>
      </div>
    </Link>
  );
}
