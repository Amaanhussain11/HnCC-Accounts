import React from "react";
import SubHeading from "./sub-components/SubHeading";
import Steps from "./sub-components/Steps";

const OverviewAndSteps = () => {
  return (
    <>
      <SubHeading title={"How It Works"} />
      <div className="px-20">
        <div className="steps-container py-10 border-y-2 border-slate-200 flex flex-row">
          <div className="quote w-1/2 pl-16 pr-10 flex items-center place-content-between">
            <div>
              <span className="text-black text-4xl font-bold">Overview</span>
              <span className="text-black text-base font-normal">
                : "Donating is simple, and your impact is substantial. Choose
                your preferred method - secure card transactions or a convenient
                QR code scan. Your support brings our vision to life"
              </span>
            </div>
          </div>
          <div className="border-l-2 border-slate-200 flex flex-col justify-between steps w-1/2 px-28">
            <Steps
              serial={1}
              content={"Select the amount you'd like to contribute."}
            />
            <Steps
              serial={2}
              content={
                "Choose your payment method – credit card or scan the QR code."
              }
            />
            <Steps
              serial={3}
              content={"Your donation is a step toward our shared success."}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewAndSteps;
