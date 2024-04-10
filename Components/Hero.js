// import React from "react";
import Image from "next/image";
import Button from "./Button";

import person from "../public/person-1.png";
import person2 from "../public/person-2.png";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-5 pb-32 md:gap-18  xl:flex-row ">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <h1 className="bold-52 lg:bold-88">Touch Your Dream With Cemara</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We are passionate about education, and we believe that it is important
          to make your journey to study abroad as seamless as possible. we are
          dedicated to offering comprehensive services that simplify your
          journey towards studying abroad. From guiding you through the
          application process to assisting with visa requirements, our friendly
          and helpful team are here to support you every step of the way.
        </p>
        {/* <div className="my-111 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">

            </div>
          </div> */}

        <div className="my-11 flex w-full gap-3 sm:flex-row">
          <Button
            type="button"
            icon="/calendar.svg"
            title="Talk to our counselor"
            variant="btn_green"
          />
          <Button
            type="button"
            title="Find programs"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 gap-6 items-start xl:flex-row flex-col">
        <div className="relative z-20 flex w-[426px] flex-col gap-8 rounded-3xl bg-white drop-shadow-md px-7 py-4">
          <div>
            <div className="flexBetween gap-2 ">
              <div className="flex-none">
                <Image src={person} style={{ width: "100%" }} />
              </div>
              <div className="grow flex flex-col gap-2">
                <div className=" flexBetween">
                  <p className="bold-20 block text-green-90">Hanafi Jarot</p>|
                  <p className="regular-16 block text-gray-60">
                    Harvard University
                  </p>
                </div>
                <p className="regular-16 block text-gray-30">
                  I love consult with Cemara!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:top-[240px]  relative z-20 lg:flex w-auto flex-col gap-8 rounded-3xl bg-white drop-shadow-md px-7 py-4">
          <div>
            <div className="flexBetween gap-2 ">
              {/* <div className="flex-none">
                <Image src={person2} style={{ width: "100%" }} />
              </div> */}
              <div className="grow flex flex-col gap-2 text-md">
                <div className=" flexBetween">
                  <p className=" font-bold block text-green-50">10+ Courses</p>
                </div>
                <p className="block text-gray-30">Multiple Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
