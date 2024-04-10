// import React from "react";
import Image from "next/image";

function Button(props) {
  // console.log({ props });
  return (
    <button
      className={`${props.variant} flexCenter gap-3 rounded-full border`}
      type={props.type}
    >
      {props.icon && (
        <Image src={props.icon} width={24} height={24} alt={props.title} />
      )}
      <label className=" bold-16 whitespace-nowrap">{props.title}</label>
    </button>
  );
}

export default Button;
