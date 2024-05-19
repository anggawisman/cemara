// import React from "react";
import Image from "next/image";

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
        <div className="basis-1/2 md:pr-10">
          <div className="bg-green-50 rounded-lg p-4 font-raleway ">
            <h2 className="text-white text-xl font-semibold my-8 text-center">
              Top Rank University in {props.country} (Group of 8)
            </h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-white border-b pb-3">Rank</th>
                  <th className="text-left text-white border-b pb-3">User</th>
                  <th className="text-left text-white font-semibold border-b pb-3">
                    Commit
                  </th>
                  {/* <th className="text-left text-white font-semibold border-b pb-3">
                      Status
                    </th> */}
                  <th className="text-left text-white font-semibold border-b pb-3">
                    {/* Location */}
                  </th>
                  {/* <th className="text-left text-white font-semibold border-b pb-3">
                      Deployed At
                    </th> */}
                </tr>
              </thead>
              <tbody>
                {props.data?.map((item, index) => (
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
                        {/* <span>{item.commit.sha}</span> */}
                        {/* <div className="bg-gray-200 w-2 h-2 rounded-full mx-2" /> */}
                        <span className="border rounded px-2">
                          {item.commit.branch}
                        </span>
                      </div>
                    </td>
                    {/* <td className="py-4">
                        <div className="flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              item.status === "Completed"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          />
                          <span className="text-white text-sm">
                            {item.status}
                          </span>
                        </div>
                      </td> */}
                    <td className="text-gray-200 py-4 text-end">
                      {item.duration}
                    </td>
                    {/* <td className="text-gray-500 py-4">{item.deployedAt}</td> */}
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
        <div className="grow">
          <div className="md:border-l md:pl-10 text-lg">
            {/* in below for body */}
            <div className="mb-10 mt-5  opacity-50 font-extralight">asda</div>
            {/* in below for desc */}
            <div className="py-5 border-t">
              <div className="font-semibold pb-4">Essential Information</div>
              <div className="flex flex-row">
                <div className="basis-1/2">coas</div>
                <div className="basis-1/2 text-end">sadsad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
