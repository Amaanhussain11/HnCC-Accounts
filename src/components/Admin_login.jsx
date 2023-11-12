import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InputBox from "./sub-components/InputBox";

const Admin_login = () => {
  return (
    <>
      <div className=" mt-[90px] mx-[1340px] backbtn mr-auto h-[56px] w-[56px] border-2 border-black  flex justify-center items-center rounded-full hover:cursor-pointer">
        <Link to={"/combined"}>
          <FontAwesomeIcon icon={faArrowRight} size="2xl" />
        </Link>
      </div>
      <div className="adminloginform h-[620px] w-[600px] -mt-[36px] mx-[434px] border-[1px] border-gray-600 rounded-md">
        <div className=" h-fit w-full flex flex-col justify-between items-center text-center ">
          <span className="underline py-4 font-normal">
            Only for admin Purpose, Management.
          </span>
          <span className="py-4 text-3xl font-medium">
            <h2>Admin Login</h2>
          </span>
        </div>
        <div className=" w-full flex justify-center items-center mt-5">
          <div className="w-[78%] flex justify-evenly items-center flex-col">
            <form>
              <div className="formaction h-fit  w-full ">
                <div className="firstrow mb-5 flex justify-between items-center">
                  <div className=" mr-3">
                    <span className=" text-l w-[45%]">First name</span>
                    <InputBox
                      id="username_first"
                      type="text"
                      plcholder=""
                      className="text-blue-700"
                      
                    />
                  </div>
                  <div className="ml-3">
                    <span className=" text-l">Last name</span>
                    <InputBox
                      id="username_second"
                      type="text"
                      plcholder=""
                      clas
                    />
                  </div>
                </div>
                <div className="secondrow mb-5">
                  <span className=" text-l ">Email address </span>
                  <InputBox
                    id="email"
                    type="email"
                    plcholder=""
                  />
                </div>
                <div className="secondrow mb-5">
                  <span className=" text-l ">Admin ID </span>
                  <InputBox
                    id="admin_id"
                    type="text"
                    plcholder=""
                  />
                </div>
                <div className="thirdrow mb-5">
                  <span className=" text-l ">Admin password</span>
                  <InputBox
                    id="password"
                    type="password"
                    plcholder=""
                  />
                 
                </div>
              </div>
            </form>
            <button className="w-full bg-black rounded-3xl font-normal text-white p-3">Continue</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Admin_login;
