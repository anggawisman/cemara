// import React from 'react'

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/Constants";
import Button from "./Button";

const Navbar = () => {
  // console.log("berak", NAV_LINKS)
  return (
    // border-2 border-red-500
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logocemara_5.svg" alt="logo" width={150} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key}
              className=" regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          );
        })}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact"
          icon="/user.svg"
          variant="btn_dark_green"
          href="https://wa.me/6282199067788?text=I%20want%20consultation%20for%20further%20study%20abroad%20"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
