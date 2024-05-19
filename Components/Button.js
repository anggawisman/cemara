// import React from "react";
import Image from "next/image";

function Button(props) {
  // console.log({ props });
  return (
    <a
      className={`${props.variant} flexCenter gap-3 rounded-full border  bold-16 whitespace-nowrap`}
      type={props.type}
      href={props.href}
      target={props.href !== "/" ? "_blank" : ""}
    >
      {props.icon && (
        <Image src={props.icon} width={24} height={24} alt={props.title} />
      )}
      {/* <label className=" bold-16 whitespace-nowrap"></label> */}
      {props.title}
    </a>
  );
}

export default Button;
