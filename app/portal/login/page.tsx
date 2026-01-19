"use client";

import Image from "next/image";
import PortalLoginForm from "@/app/_components/portal/PortalLoginForm";

export default function LoginPage() {
  return (
    <main className="grid grid-cols-2">
      <div className="relative h-dvh w-full">
        <Image
          src="/portal/login.png"
          alt="Illustration of people on a desk watching their comuter screens"
          fill
        />
      </div>

      <section className="grid place-content-center">
        <PortalLoginForm />
      </section>
    </main>
  );
}
