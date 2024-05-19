// components/ScrollSlider.js

import React, { useEffect, useRef } from "react";

const ScrollSlider = ({ images }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const containerOffset = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;

        if (
          scrollPosition > containerOffset - windowHeight / 2 &&
          scrollPosition < containerOffset + containerHeight
        ) {
          container.style.transform = `translateX(${
            scrollPosition - containerOffset
          }px)`;
        }
      }
    };

    console.log({ images });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex">
      {images.map((image, index) => (
        <div key={index} className="w-64 flex-shrink-0">
          <p>{image}</p>
          <img src={image} alt={`Image ${index}`} className=" h-auto" />
        </div>
      ))}
    </div>
  );
};

export default ScrollSlider;
