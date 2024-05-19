"use client";
// import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

function Table(props) {
  // console.log({ props });

  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "_cfuvid=3MlSjZb3_x5EbRnFvzmLeoqnXkuoBLUefJzzydjR1mw-1716105665233-0.0.1.1-604800000"
    );

    const formData = new FormData();
    formData.append("nid", 3897789);
    formData.append("items_per_page", 10);
    formData.append("tab", "indicators");
    formData.append("region", "Oceania");
    formData.append("countries", "");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      body: formData,
    };

    fetch(`https://www.topuniversities.com/rankings/endpoint?`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <div className="bg-green-50 rounded-lg p-4 font-raleway ">
        <h2 className="text-white text-lg font-bold mb-4">{props.title}</h2>
        <table className="w-full">
          <thead>
            <tr>
              {props.heads?.map((head) => {
                <th className="text-left text-white border-b pb-3">{head}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {universities?.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="text-gray-200 py-4">{item.duration}</td>
                <td className="flex flex-row text-white py-4 text-sm">
                  <img
                    className="w-6 h-6 rounded-full mr-2"
                    src={item.user.image}
                    alt={item.user.name}
                  />
                  {item.user.name}
                </td>
                <td className="text-gray-200 py-4">
                  <div className="flex items-center">
                    <span className="border rounded px-2">
                      {item.commit.branch}
                    </span>
                  </div>
                </td>
                <td className="text-gray-200 py-4 text-end">{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-center my-3">
        source:{" "}
        <span>
          {" "}
          <a href="https://www.topuniversities.com/world-university-rankings">
            Top Universities
          </a>
        </span>
      </div>
    </div>
  );
}

export default Table;
