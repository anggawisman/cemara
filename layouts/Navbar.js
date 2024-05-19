// import React from 'react'

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from "@/Constants";
import Button from "../components/Button";

const Navbar = () => {
  // console.log("berak", NAV_LINKS)
  return (
    // border-2 border-red-500
    <nav className=" flexBetween max-container padding-container relative z-30 py-5 mb-10">
      <ul className="hidden h-full gap-8 lg:flex ">
        {NAV_LINKS_LEFT.map((link) => {
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

      <Link href="/">
        <Image src="/logonavbar-new.svg" alt="logo" width={250} height={29} />
      </Link>

      {/* <div className="lg:flexCenter hidden">
       
      </div> */}

      <ul className="hidden h-full gap-8 lg:flex ">
        {NAV_LINKS_RIGHT.map((link) => {
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
        <Button
          className={"text-sm bold-8"}
          type="button"
          title="Contact"
          icon="/user.svg"
          widthIcon={15}
          heightIcon={15}
          variant="btn_green_sm"
          href="https://wa.me/6282199067788?text=I%20want%20a%20free%20consultation%20about%20my%20planning%20to%20study%20abroad"
        />
      </ul>

      <Image
        src="menu.svg"
        alt="menu"
        width={15}
        height={15}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
