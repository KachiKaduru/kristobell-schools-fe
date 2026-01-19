import Link from "next/link";
import Container from "../Container";
import LogoComponent from "../LogoComponent";
import {headerLinks} from "@/app/_constants";

export default function Header() {
  return (
    <header className="py-6 bg-white">
      <Container className="flex justify-between">
        <LogoComponent />

        <nav className="flex gap-16 items-center">
          <ul className="flex gap-4 items-center">
            {headerLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div>
            <Link href="/portal/login">Portal Login</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
