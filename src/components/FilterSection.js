import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";

const FilterSection = ({ fetchData: fetchApi }) => {
  const {
    fetchData,
    response: { categories },
    loading,
  } = useAxios("categories");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className=" animate-pulse my-5 inline-block text-center">
        {[...Array(30).keys()].map((i) => (
          <div
            key={i}
            className="h-7 w-20 bg-gray-600 m-1 rounded-sm inline-block "
          ></div>
        ))}
      </div>
    );
  }

  const handleFilter = (e) => {
    fetchApi({ params: { category: e.target.value } });
  };

  return (
    <div>
      <h3 className=" p-4 mb-4 text-center font-semibold text-xl text-slate-300 w-full bg-gray-800/50 ">
        Categories
      </h3>
      <div className="text-center m-5">
        {categories &&
          categories.map((button) => (
            <button
              className=" px-4 py-1 m-1 border-2 border-ourple text-ourple bg-gray-800/50 rounded-md hover:bg-gray-700/50 hover:text-white focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
              onClick={handleFilter}
              value={button}
            >
              {button}
            </button>
          ))}
      </div>
    </div>
  );
};

export default FilterSection;
