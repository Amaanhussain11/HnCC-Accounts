import React from "react";

const Benefit = ({ icon, heading, content }) => {
  return (
    <>
      <div className="flex flex-row gap-6">
        <div className="text-[30px] bg-gradient-to-r from-amber-400 via-amber-300 to-orange-200 text-transparent bg-clip-text ">
          <i className={icon}></i>
        </div>
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <div className=" text-gray-800 text-2xl font-medium pt-[6px]">
            {heading}
          </div>
          <div className="about-benefits text-slate-500 text-[17px]/[20px] font-medium leading-normal">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
