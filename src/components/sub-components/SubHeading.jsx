import React from "react";

const SubHeading = ({ title }) => {
  return (
    <div className=" w-full py-14 flex flex-col">
      <h1 className="text-4xl font-bold w-fit self-center">{title}</h1>
    </div>
  );
};

export default SubHeading;
