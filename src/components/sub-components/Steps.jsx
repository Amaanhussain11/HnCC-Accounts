import React from "react";

const Steps = ({ serial, content }) => {
  return (
    <>
      <div>
        <div className="step flex flex-col gap-[9px]">
          <div className="step-heading text-gray-800 text-2xl font-medium">Step:{serial}</div>
          <div className="step-content text-slate-500 text-base font-medium leading-normal">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Steps;
