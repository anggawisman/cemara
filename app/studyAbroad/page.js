// import React from "react";
import Image from "next/image";
import Article from "@/components/Article";

const data = [
  {
    user: {
      name: "John Doe",
      image: "https://picsum.photos/id/237/200/300",
    },
    commit: {
      sha: "abc123",
      branch: "main",
    },
    status: "Completed",
    duration: "1 hour",
    deployedAt: "2024-03-30 10:00:00",
  },
  // Add more mock data here
];

const StudyAbroad = () => {
  return (
    <section className="max-container padding-container gap-10 py-5 pb-32 md:gap-18">
      <Article title="Study in Australia" country="Australia" />
    </section>
  );
};

export default StudyAbroad;
