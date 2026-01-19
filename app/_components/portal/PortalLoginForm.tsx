"use client";

import {useState} from "react";
import Image from "next/image";

import logoImg from "@/public/logo.svg";
import {TextInput} from "@/app/_components/FormComponents";
import Link from "next/link";

const roles = ["Student", "Teacher", "Administrator"] as const;

const rolesFormInputs: Record<string, {legend: string; placeholder: string; type: string}[]> = {
  Student: [{legend: "Student ID", placeholder: "e.g KIS/STU/2023/0047", type: "text"}],
  Teacher: [{legend: "Staff Name or ID", placeholder: "e.g KIS/STF/2022/034", type: "text"}],
  Administrator: [{legend: "Administrator ID", placeholder: "e.g KIS/ADM/024", type: "text"}],
};

export default function PortalLoginForm() {
  const [currentRole, setCurrentRole] = useState<string>("Student");

  function handleChangeRole(role: string) {
    setCurrentRole(role);
  }

  return (
    <div>
      <header className="flex flex-col gap-3 items-center">
        <Image src={logoImg} alt="Logo" />
        <h2 className="text-xl font-semibold">Kristobell Schools</h2>
        <p>Portal Login</p>
      </header>

      <div className="mt-10 p-2 bg-gray-200 flex gap-4 w-fit mx-auto rounded-lg">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => handleChangeRole(role)}
            className={`font-semibold shadow-lg rounded-lg px-10 py-2 bg-white cursor-pointer  ${
              currentRole === role ? "text-green-700" : "text-gray-800"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <form action="" className="my-10 space-y-5">
        {rolesFormInputs[currentRole].map((input) => (
          <fieldset key={input.legend}>
            <legend>{input.legend}</legend>
            <TextInput type={input.type} placeholder={input.placeholder} />
          </fieldset>
        ))}

        <fieldset>
          <legend>Password</legend>
          <TextInput type="password" placeholder="Enter your password" />
          <p>
            <Link href="/portal/forgot-password">Forgot Password?</Link>
          </p>
        </fieldset>

        <button className="w-full mt-5 bg-green-800 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
          Sign In
        </button>
      </form>

      <p className="text-center">Having trouble logging in? Contact IT support.</p>

      <div className="w-full h-0.5 my-4 bg-gray-300" />

      <div>
        <ul className="flex justify-between text-gray-400">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-use">Terms of Use</Link>
          </li>
          <li>&copy; 2024 Kristobell Schools.</li>
        </ul>
      </div>
    </div>
  );
}
