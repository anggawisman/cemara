// import React from "react";
import Image from "next/image";
import Card from "../Components/Card";
import { PROGRAMS } from "@/Constants";

// STEPS to ABROAD
const Service = () => {
  return (
    <section className="  max-container padding-container flex flex-col gap-16 py-5 pb-32 ">
      <div className="relative z-10 flex flex-1 flex-col xl:w-2/3">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <h1 className="bold-52 lg:bold-88">
          We are here to support your{" "}
          <span className="text-green-600 ">journey! </span>
        </h1>
      </div>

      <div className="flexBetween flex-wrap gap-8 z-30">
        {PROGRAMS.map((data, idx) => {
          const nameBg = data.img;

          return (
            <div
              className={`bg-white shadow-xl p-8 rounded-3xl card-service max-w-72 ${
                nameBg == "accommodation"
                  ? "bg-accommodation"
                  : nameBg == "health"
                  ? "bg-health"
                  : nameBg == "form"
                  ? "bg-form"
                  : nameBg == "consult"
                  ? "bg-consult"
                  : nameBg == "visa-app"
                  ? "bg-visa-app"
                  : ""
              }`}
            >
              <h2 className="font-bold text-xl text-green-50">{data.title}</h2>
              <p className="py-5">{data.body}</p>
              <div className="min-h-40"></div>
              <button className={`${"blabla"}`}>{data.button}</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
