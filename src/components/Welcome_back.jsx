import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Welcome_back = () => {
  return (
    <>
      <div className="container flex flex-col justify-between w-full h-full  ">
        <div className="head w-full  h-[15%] flex justify-evenly items-center">
          <div className="backbtn border-2 border-black mr-auto h-[56px] w-[56px]  mt-[40px] mx-56 flex justify-center items-center rounded-full hover:cursor-pointer">
            <Link to={"/combined"}>
              <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
            </Link>
          </div>
          <div className="accoulnticon">
            <div className="backbtn mr-auto h-[51px] w-[88px]  mt-[40px] -mx-56 flex justify-center bg-black text-white items-center hover:cursor-pointer rounded-md">
              <Link to={"/combined"}>
                <FontAwesomeIcon icon={faUser} size="xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container h-96 mt-0  w-full flex flex-row justify-evenly items-center">
          <div className="photo h-72 w-80 border-[1px] border-black mx-[56px]"></div>
          <div className="line h-64 w-[1px] border-[1px] border-grey-400"></div>
          <div className="welcome h-72 w-80   flex flex-col items-center justify-between">
            <div className="h-1/4 w-full  flex justify-center items-center text-center font-bold text-3xl">
              <span>WELCOME BACK!</span>
            </div>
            <div className="h-1/4 w-full  flex justify-center items-center text-center flex-col">
              <span className="font-medium text-l">
                How would you like to donate?
              </span>
              <span className="text-sm font-normal">
                Choose the options below
              </span>
            </div>
            <div className="h-1/4 w-full  flex justify-center items-center">
              <button className="h-11 w-72 rounded-3xl border-[1px] border-black flex justify-center items-center text-center">
                <span>Google Pay, Paytm and others</span>
              </button>
            </div>
            <div className="h-1/4 w-full  flex justify-center items-center">
              <button className="h-11 w-72 rounded-3xl border-[1px] border-black flex justify-center items-center">
                <span>Credit/Debit/ATM Card</span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Welcome_back;
