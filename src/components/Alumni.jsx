import React from "react";
import SubHeading from "./sub-components/SubHeading";
import Card from "./sub-components/Card";

const Alumni = () => {
  return (
    <>
      <div className="alumni-card-container flex flex-col items-center pb-4 justify-center">
        <div className="alumni-card-heading">
          <SubHeading title={"Our Funding Alumni"} />
        </div>
        <div className="card-container grid grid-cols-3 gap-y-10 gap-x-8">
          <Card name={"Aditya Ranjan"} designation={"Web-Developer"} />
          <Card name={"Aditya Ranjan"} designation={"Web-Developer"} />
          <Card name={"Aditya Ranjan"} designation={"Web-Developer"} />
          <Card name={"Aditya Ranjan"} designation={"Web-Developer"} />
          <Card name={"Aditya Ranjan"} designation={"Web-Developer"} />
          <Card name={"Aditya Ranjan"} designation={"Web-Developer"} />
        </div>
      </div>
    </>
  );
};

export default Alumni;
