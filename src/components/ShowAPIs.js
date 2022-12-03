import React from "react";
import Card from "./Card";

const ShowAPIs = ({ response, loading }) => {
  return (
    <div className="mb-10">
      <h3 className=" p-4 mb-4 text-center font-semibold text-xl text-slate-300 w-full bg-gray-800/50 ">
        APIs
      </h3>
      <div className=" mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {response && response.entries.map((api, index) => <Card api={api} />)}
      </div>
    </div>
  );
};

export default ShowAPIs;
