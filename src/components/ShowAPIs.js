import React from "react";
import Card from "./Card";

const ShowAPIs = ({ response, loading }) => {
  if (loading) {
    return (
      <div className="mt-2 grid md:grid-cols-3 gap-4 animate-pulse">
        {[...Array(5).keys()].map((num) => (
          <div
            key={num}
            className="h-28 w-full bg-gray-600 m-1 rounded-sm"
          ></div>
        ))}
      </div>
    );
  }

  if (!response.entries) {
    return (
      <p className="text-center text-gray-500 text-2xl mt-20">
        Something went wrong 😢
      </p>
    );
  }

  return (
    <div className="mb-10">
      <h3 className=" p-4 mb-4 text-center font-semibold text-xl text-slate-300 w-full bg-gray-800/50 ">
        APIs
      </h3>
      <div className=" mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {response.entries &&
          response.entries.map((api, index) => <Card api={api} key={index} />)}
      </div>
    </div>
  );
};

export default ShowAPIs;
