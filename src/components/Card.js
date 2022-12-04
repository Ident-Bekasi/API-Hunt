import React from "react";

const Card = ({ api }) => {
  const renderDetail = (text, field) => (
    <p className="px-2 ">
      <span className="text-ourple font-semibold">{text}</span>:{" "}
      <span className=" text-gray-400">{api[field] || "-"}</span>
    </p>
  );

  return (
    <a href={api.Link} data-aos="fade-up" target="_blank" rel="noreferrer">
      <div className="border-2 shadow-md pb-2  border-ourple  text-gray-600 rounded-md bg-blake hover:bg-gray-800/50 cursor-pointer h-full">
        <p className=" w-full bg-gray-800/50 flex justify-center text-2xl p-2 rounded-md">
          <span className="font-semibold text-gray-300">{api.API}</span>
        </p>
        {renderDetail("Description", "Description")}
        {renderDetail("Auth", "Auth")}
        {renderDetail("Cors", "Cors")}
        {renderDetail("Category", "Category")}
        <span className="mx-2 ">know more...</span>
      </div>
    </a>
  );
};

export default Card;
