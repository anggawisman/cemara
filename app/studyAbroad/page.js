// import React from "react";
import Image from "next/image";
import Article from "@/Components/Article";
import { STUDY_ABROAD } from "@/Constants";

const StudyAbroad = () => {
  return (
    <section className="max-container padding-container gap-10 py-5 pb-32 md:gap-18">
      {STUDY_ABROAD?.map((data) => {
        console.log(data);
        return (
          <Article
            title={data.title}
            country={data.country}
            body={data.body}
            information={data.information}
          />
        );
      })}
    </section>
  );
};

export default StudyAbroad;
