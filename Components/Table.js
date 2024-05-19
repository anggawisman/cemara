"use client";
import axios from "axios";
// import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

function Table(props) {
  // console.log({ props });

  const [universities, setUniversities] = useState([]);

  //   useEffect(() => {
  //     console.log("TAIK try");
  //     getData();
  //   }, []);

  //   const getData = async () => {
  //     try {
  //       const BASE_URL = "https://www.topuniversities.com/rankings";
  //       const axiosInstance = axios.create({ baseURL: BASE_URL });

  //       let config = {
  //         method: "get",
  //         maxBodyLength: Infinity,
  //         url: "https://www.topuniversities.com/rankings/endpoint?nid=3897789&page=&items_per_page=10&tab=indicators&region=Oceania&countries=&cities=&search=&star=&sort_by=&order_by=&program_type=",
  //         headers: {
  //           Cookie:
  //             "_cfuvid=3MlSjZb3_x5EbRnFvzmLeoqnXkuoBLUefJzzydjR1mw-1716105665233-0.0.1.1-604800000",
  //         },
  //       };

  //       await axiosInstance
  //         .request(config)
  //         .then((response) => {
  //           console.log("TAIK", JSON.stringify(response.data));
  //         })
  //         .catch((error) => {
  //           console.log("TAIK", error);
  //         });
  //     } catch {
  //       console.log("TAIK ANYING LAH");
  //     }
  //   };

  return (
    <div className="">
      <div className="bg-green-50 rounded-lg p-4 font-raleway ">
        <h2 className="text-white text-lg font-bold mb-4">{props.title}</h2>
        <table className="w-full">
          <thead>
            <tr>
              {props.heads?.map((head) => {
                getData();
                return (
                  <th className="text-left text-white border-b pb-3">{head}</th>
                );
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
