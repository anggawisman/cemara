// import React from "react";
import Image from "next/image";

const Menu = (props) => {
  // console.log(`bg-${props.bg}`);
  return (
    <>
      <Image
        src="menu.svg"
        alt="menu"
        width={15}
        height={15}
        className="inline-block cursor-pointer lg:hidden"
      />
    </>
  );
};

export default Menu;
