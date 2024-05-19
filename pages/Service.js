// import React from "react";
import Image from "next/image";
import Card from "../Components/Card";
import { PROGRAMS } from "@/Constants";

// STEPS to ABROAD
const Service = () => {
  return (
    <section className="  max-container padding-container flex flex-col gap-16 py-5 pb-32 ">
      <div className="relative z-20 flex flex-1 flex-col xl:w-2/3">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <h1 className="bold-52 lg:bold-88">
          We are here to support your{" "}
          <span className="text-green-600 ">journey! </span>
        </h1>
      </div>

      <div className="flexBetween flex-wrap gap-8">
        {PROGRAMS.map((data, idx) => {
          // console.log({ idx });
          return (
            <Card
              className={""}
              bg={data.img}
              title={data.title}
              body={data.body}
              button={data.button}
              variant="blabla"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
