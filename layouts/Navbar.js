'use client'
 
import { sendGTMEvent } from '@next/third-parties/google'
// import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from "@/Constants";
import Button from "../Components/Button";

const Navbar = () => {
  // console.log("berak", NAV_LINKS)
  return (
    // border-2 border-red-500
    <nav className=" flexBetween max-container padding-container relative z-30 py-5 mb-10 max-lg:flex-col max-lg:gap-2">
      <ul className="hidden h-full gap-8 lg:flex ">
        {NAV_LINKS_LEFT.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key}
              className=" regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={() => sendGTMEvent({ event: 'buttonClicked', value: link.label })}
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

      <ul className="hidden h-full gap-4 max-lg:flex flex-wrap justify-center">
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
    </nav>
  );
};

export default Navbar;
