import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";

import { Link } from "react-router-dom";
import DevMode from "./ForDevOnly/DevMode";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar-container py-[46px] px-20 flex justify-between items-center w-full"
        id="header"
      >
        {/* <Link to={"/dash"} >LetsGo</Link> */}
        <div className="logo-container">
          <a href="https://www.hnccbits.com/" target="_blank">
            <img
              src="../src/assets/hncc-logo.jpg"
              alt="logo"
              className="w-[80px] h-fit"
            />
          </a>
        </div>
        <div className="btns-container flex justify-between items-center w-[56%] text-xl">
          <div className="navigation-btn-container text-lg">
            <a href="#header">
              <button className="mr-9">HOME</button>
            </a>
            <a href="#about">
              <button>ABOUT US</button>
            </a>
          </div>
          <div className="auth-btn-container flex flex-row w-fit ">
            <div className=" hover:cursor-pointer w-fit flex flex-row items-center  text-white bg-black px-[30px] rounded-lg py-4">
              <RiAdminFill />
              <Link to="/Admin_login">
                <span className="ml-3 ">Admin</span>
              </Link>
            </div>
            <Link to="/signup" className="">
              <div className="hover:cursor-pointer w-fit flex flex-row items-center text-white bg-black py-4 px-[30px] rounded-lg ml-12">
                <BiSolidUser />
                Login / Register
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
