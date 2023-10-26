import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
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
        <div className="footer h-64 mt-2  flex bg-black justify-between flex-col items-center">
          <div className="footnav h-11 w-full border-2 border-black flex flex-row justify-center items-center bg-[#091242]">
            <span className="p-12 text-white ">
              <button className="bg-black h-fit w-fit p-2 px-4">Home</button>
            </span>
            <span className="p-12 text-white ">
              <button className=" h-fit w-fit p-2 px-4">About Us</button>
            </span>
          </div>
          <div className="footbody h-40 w-full  bg-black flex justify-center items-center flex-row">
            <div className="firsthalf flex  justify-around items-center w-[50%] border- text-white h-full">
              <div className="">
                <ul>
                  <li>Meet</li>
                  <li>BIT SINDRI</li>
                  <li>Dhanbad-828123 JHARKHAND</li>
                  <li>India</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="py-3 hover:underline">
                    <button>Terms</button>
                  </li>
                  <li className="hover:underline text-white">
                    <button>Privacy</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="secondhalf flex justify-center flex-col items-end w-[50%]  text-white h-full">
              <div className="icons  h-10 w-fit mx-10 flex justify-center items-center ">
                <button>
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </button>
                <button className="px-7">
                  <FontAwesomeIcon icon={faTwitter} size="2xl" />
                </button>
                <button>
                  <FontAwesomeIcon icon={faFacebook} size="2xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="footfoot bg-black  text-white h-12 w-full  flex justify-around items-center">
            <span> Copyright @demo | Designed by xyz - Powered by XYZ.</span>
            <span>
              <ul className="flex flex-row">
                <li className="px-3"><button>Styel Guide</button></li>
                <li className="px-3"><button>Licenses</button></li>
                <li className="px-3"><button>Changelog</button></li>
                <li className="px-3"><button>Password</button></li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome_back;
