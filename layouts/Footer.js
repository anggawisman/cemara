import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/Constants";

const Footer = () => {
  //   console.log({ FOOTER_CONTACT_INFO });
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="logocemara.svg" alt="logo" width={150} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      href="/"
                      key={link.href}
                      className="cursor-pointer pb-1.5 transition-all hover:font-bold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn
                title={FOOTER_CONTACT_INFO.title}
                className="flex-none max-w-80"
              >
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  // <div className="">
                  <p className="">
                    {link.label}:{" "}
                    <span className="medium-14 text-wrap text-blue-70">
                      {link.value}
                    </span>
                  </p>
                  // </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {/* {console.log(SOCIALS)} */}
                  {SOCIALS.links.map((link) => (
                    <Link href={link.href} key={link.icon}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Cemara | All rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = (props) => {
  return (
    <div className={`flex flex-col gap-5 ${props.className}`}>
      <h4 className="bold-18 whitespace-nowrap">{props.title}</h4>
      {props.children}
    </div>
  );
};

export default Footer;
