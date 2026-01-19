import {academicsPrograms, quickLinks} from "@/app/_constants";
import Container from "../Container";
import LogoComponent from "../LogoComponent";
import FooterSection from "./FooterSection";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10">
      <Container className="grid">
        <section className="grid grid-cols-4 gap-10">
          <div>
            <LogoComponent />
            <p>
              Raising a generation of intellectually sound and morally upright leaders for the
              global stage.
            </p>
          </div>

          <FooterSection title="Quick Links" array={quickLinks} />
          <FooterSection title="Academics" array={academicsPrograms} />
        </section>

        <div className="h-0.5 my-10 bg-gray-400" />

        <section className="flex justify-between">
          <p className="text-center">&copy; Kristobell Schools. All rights reserved.</p>

          <div className="flex">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service" className="ml-4">
              Terms of Service
            </Link>
          </div>
        </section>
      </Container>
    </footer>
  );
}
