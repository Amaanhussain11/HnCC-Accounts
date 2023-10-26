import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import InputBox from "./sub-components/InputBox";
import BrandButtons from "./sub-components/BrandButtons";
const Signup = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="backbtn mr-auto h-[56px] w-[56px] border-2 border-black mt-[20px] mx-[80px] flex justify-center items-center rounded-full hover:cursor-pointer">
            <Link to={"/combined"}>
              <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
            </Link>
          </div>
        </div>

        <div className="form h-[650px] w-[680px]  first-letter -mt-[10px] mx-[390px] flex flex-col justify-between items-center">
          <div className="head h-fit w-full  flex flex-col justify-between items-center p-2">
            <span className="text-3xl font-medium">Create an account</span>
            <span className="text-sm p-1 font-normal">
              Already have an account?
              <Link to="/Login">
                <button className="px-1 underline text-blue-700">Log in</button>
              </Link>
            </span>
          </div>
          <form>
            <div className="formaction h-fit  w-full ">
              <div className="firstrow mb-10">
                <span className=" text-l ">What should we call you?</span>
                <InputBox
                  id="username"
                  type="text"
                  plcholder="Enter your profile name"
                />
              </div>
              <div className="secondrow mb-10">
                <span className=" text-l ">What's your email?</span>
                <InputBox
                  id="email"
                  type="email"
                  plcholder="Enter your email address"
                />
              </div>
              <div className="thirdrow mb-10">
                <span className=" text-l ">Create a passowrd</span>
                <InputBox
                  id="password"
                  type="password"
                  plcholder="Enter your password"
                />
                <span className="text-xs">
                  Use 8 or more charactors with a mix of letters, numbers and
                  symbols
                </span>
              </div>
            </div>
          </form>
          <div className="buttons h-28 w-full ">
            <span className="text-sm font-normal">
              By creating an account, you agree to the{" "}
              <button className="underline text-sm text-blue-700">
                Terms of use
              </button>{" "}
              and{" "}
              <button className="underline text-sm text-blue-700">
                Privacy Policy
              </button>
            </span>
            <button className="w-full bg-black text-white text-2xl p-2 rounded-3xl mt-3">
              Create an account
            </button>
          </div>
          <div className="loginwith h-28 w-full ">
            <span className="text-lg">OR Continue with</span>
            <div className="socialmedia flex justify-between">
              <BrandButtons
                name={"Facebook"}
                icon={faFacebook}
                width={"w-[30%]"}
              />
              <BrandButtons width={"w-[30%]"} icon={faGoogle} name={"Google"} />
              <BrandButtons width={"w-[30%]"} icon={faApple} name={"Apple"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
