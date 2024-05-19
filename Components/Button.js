// import React from "react";
import Image from "next/image";

function Button(props) {
  // console.log({ props });
  return (
    <a
      className={`${props.variant} ${props.className} flexCenter gap-3 rounded-full border whitespace-nowrap`}
      type={props.type}
      href={props.href}
      target={props.href !== "/" ? "_blank" : ""}
    >
      {props.icon && (
        <Image
          src={props.icon}
          width={props.widthIcon ? props.widthIcon : 15}
          height={props.heightIcon ? props.heightIcon : 15}
          alt={props.title}
        />
      )}
      {/* <label className=" bold-16 whitespace-nowrap"></label> */}
      {props.title}
    </a>
  );
}

export default Button;
