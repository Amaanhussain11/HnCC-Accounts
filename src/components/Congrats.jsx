import React from "react";
import { motion } from "framer-motion";

const Congrats = () => {
  return (
    <>
      <div className="congo-container flex flex-col justify-center items-center h-screen">
        <div className="img-container w-[20%]">
          <img
            src="../src/assets/thumbsup.png"
            alt="ThumbsUp"
            className="w-full"
          />
        </div>
        <div className="txt flex flex-col justify-center items-center w-[40%]">
          <h1 className="text-[#1C1939] text-4xl font-bold mt-7 ">
            Congrats! Account Created.
          </h1>
          <h1 className="text-base text-[rgba(28, 25, 57, 0.80)] py-7 px-32 text-center">
            Your account has been created successfully. Press continue to login.
          </h1>
        </div>
        <button className="w-[20%] text-center bg-black text-white font-semibold p-5 rounded-xl text-lg">
          Continue
        </button>
      </div>
    </>
  );
};

export default Congrats;
