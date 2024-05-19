// import React from "react";

const Card = (props) => {
  return (
    <div
      className={`bg-white shadow-xl p-8 rounded-3xl card-service max-w-72 ${props.className}`}
    >
      <h2 className="font-bold text-xl text-green-50">{props.title}</h2>
      <p className="py-5">{props.body}</p>
      <div className="min-h-40"></div>
      <button className={`${props.variant}`}>{props.button}</button>
    </div>
  );
};

export default Card;
