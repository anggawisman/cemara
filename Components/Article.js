// import React from "react";
import Image from "next/image";
import Table from "./Table";

function Article(props) {
  // console.log({ props });
  return (
    <div className="">
      <div className="border-t pt-14 mt-5">
        {/* in below for title */}
        <div className="mb-10 border-b pb-10 text-xl bold-52 lg:bold-88">
          {props.title}
        </div>
      </div>
      <div className="md:flex flex-row">
        {/* table here */}
        <div className="basis-1/3 md:pr-40">
          {""}
          {/* <Table
            title={`Top Rank University in ${props.country} (Group of 8)`}
          /> */}
          {/* <div className="embedded-web-container">
            <iframe
              src="https://www.topuniversities.com/world-university-rankings?region=Europe&countries=gb"
              title="Embedded Web Page"
              width="100%"
              height="500px"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div> */}
        </div>
        <div className="grow">
          <div className="md:border-l md:pl-10 text-lg">
            {/* in below for body */}
            <div className="mb-10 mt-5  opacity-50 font-extralight">
              {props.body}
            </div>
            {/* in below for desc */}
            <div className="py-5 border-t">
              <div className="font-semibold pb-4">Essential Information</div>
              <div className="flex flex-col gap-6">
                {props.information?.map((data) => {
                  return (
                    <div className="flex flex-row">
                      <div className="basis-1/2">{data.key}</div>
                      <div className="basis-1/2 text-end">{data.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
