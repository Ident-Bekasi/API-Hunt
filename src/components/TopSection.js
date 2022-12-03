import React from "react";

const TopSection = ({ fetchData }) => {
  const bg2 =
    "https://img.freepik.com/premium-vector/black-wide-technology-background_79145-249.jpg";

  const [value, setValue] = React.useState("");

  const handlePress = (e) => {
    if (e.key === "Enter") {
      fetchData({ params: { title: value } });
      setValue("");
    }
  };

  return (
    <div
      className="px-12  text-center  relative overflow-hidden h-[400px]  bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div class="flex justify-center items-center h-full">
          <div>
            <h2 class="font-semibold text-white text-4xl mb-4">Search APIs</h2>
            <div className="flex items-center bg-white mx-auto mt-6 max-w-md rounded-md">
              <input
                type="search"
                className="w-full px-4 py-2 rounded-md focus:outline-none"
                placeholder="Dog APIs"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handlePress}
              />
              <button className="bg-ourple text-white px-4 py-2 rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
