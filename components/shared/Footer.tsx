import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 px-16 py-8 bg-slate-100 dark:bg-slate-900 backdrop-blur-lg">
      <div className="flex justify-between w-full gap-16">
        <div className="flex flex-col gap-4 flex-1">
          <Link href={"/"}>
            <span className="font-bold text-xl">.Dreamweaver</span>
          </Link>
          <p className="text-gray-500 text-sm max-w-2xl">
            Dreamweaver is your gateway to unleashing the power of OpenAI&apos;s
            text and image generation capabilities. We provide a user-friendly
            platform that simplifies access to OpenAI&apos;s API, allowing you
            to effortlessly generate unique content and stunning visuals.
          </p>
        </div>

        <div className="flex flex-col gap-4 whitespace-nowrap">
          <h2 className="font-bold text-lg">Resources</h2>
          <Link href={"/generate"}>Generate</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>

        <div className="flex flex-col gap-4 whitespace-nowrap">
          <h2 className="font-bold text-lg">Legal</h2>
          <Link href={"/terms"}>Terms of Service</Link>
          <Link href={"/privacy"}>Privacy Policy</Link>
          <Link href={"/cookies"}>Cookie Policy</Link>
        </div>
      </div>

      <div className="w-full h-px bg-gray-500" />

      <p className="text-gray-500 text-center text-sm">
        © 2021 Dreamweaver. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
