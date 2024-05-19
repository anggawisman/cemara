import React from "react";
import Image from "next/image";
import maintenance from "@/public/maintenance.svg";
import constraction from "@/public/constraction.svg";
import Button from "@/components/Button";

const ComingSoon = () => {
  return (
    <div class="flex h-screen">
      <div class="m-auto">
        <section className=" max-container padding-container flex flex-row gap-16">
          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-4">
            {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}

            <div className="flexBetween">
              <Button type="button" title="COMING SOON !" variant="btn_green" />
            </div>

            <h1 className="bold-52 lg:bold-70">
              We are here to support your{" "}
              <div className=" text-green-600">journey!</div>
            </h1>
          </div>

          <div className="flex flex-1 flex-col flex-wrap gap-8">
            <Image
              src={constraction}
              alt="constraction"
              sizes="100vw"
              // Make the image display full width
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComingSoon;
