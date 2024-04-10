import React from "react";
import Image from "next/image";

const Sticky = () => {
  return (
    <section className="  max-container padding-container flex flex-col gap-16 py-5 pb-32 ">
      <div className="fixed top-5 z-50">
        <button className="flex flex-row gap-2 rounded-2xl items-center p-5 border-white border-2 backdrop-filter backdrop-blur-md bg-opacity-10">
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <div>Halo lala</div>
        </button>
      </div>
    </section>
  );
};

export default Sticky;
