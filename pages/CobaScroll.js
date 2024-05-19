"use client";

import React from "react";
import Image from "next/image";
// import ScrollSlider from "@/components/ScrollSlider";

// import { SCROLL } from "@/Constants";

const CobaScroll = () => {
  return (
    <div class="flex h-screen">
      <div class="m-auto">
        <section className=" max-container padding-container flex flex-row gap-5">
          <div className="z-50">
            <h1 className="text-2xl font-bold mb-4">Scroll Slider</h1>
            {/* <ScrollSlider images={SCROLL} /> */}
            {/* Add more content here if needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CobaScroll;
