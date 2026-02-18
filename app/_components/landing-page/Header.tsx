"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {headerLinks} from "@/app/_constants";
import Container from "../Container";
import LogoComponent from "../LogoComponent";

export default function Header() {
  const pathname = usePathname();

  function isActivePath(href: string) {
    const isActive = pathname === href;
    return isActive;
  }

  return (
    <header className="py-6 bg-white">
      <Container className="flex justify-between">
        <LogoComponent />

        <nav className="flex gap-16 items-center">
          <ul className="flex gap-6 items-center">
            {headerLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={`font-medium text-lg ${isActivePath(link.href) ? "text-primary-700 font-semibold" : ""}`}
                >
                  {link.title}
                </Link>
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
