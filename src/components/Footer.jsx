import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-navbar bg-[#091242] flex justify-center">
          <div className="nav-buttons">
            <Buttons title="Home" />
            <Buttons title="About Us" />
          </div>
        </div>
        <div className="footer-content bg-black">
          <div className="socials-n-address text-white px-20 py-8 flex flex-row w-full justify-between border-b-2 border-[#4E5683]">
            <div className="flex flex-row w-[40%] justify-between">
              <div>
                Meet
                <br />
                BIT Sindri,
                <br /> Dhanbad-828123 Jharkhand,
                <br />
                India
              </div>
              <div className="flex flex-col justify-between items-start">
                <button className="py-1 px-3 hover:text-slate-300 cursor-pointer">
                  Terms
                </button>
                <button className="py-1 px-3 hover:text-slate-300 cursor-pointer">
                  Privacy
                </button>
              </div>
            </div>
            <div className="socials text-4xl flex justify-between w-[15%]">
              <button className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-200 text-transparent bg-clip-text">
                <i className="bi bi-linkedin"></i>
              </button>
              <button className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-200 text-transparent bg-clip-text">
                <i className="bi bi-twitter-x"></i>
              </button>
              <button className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-200 text-transparent bg-clip-text">
                <i className="bi bi-facebook"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="copyrights text-slate-300 text-sm flex p-3 flex-row w-[70%] justify-between">
              <div>
                Copyright&#169; Hackathon and Coding Club | Designed by Team
                HnCC
              </div>
              <div>
                <ul>
                  <li className="inline mx-4 cursor-pointer">Style Guide</li>
                  <li className="inline mx-4 cursor-pointer">Licenses</li>
                  <li className="inline mx-4 cursor-pointer">Changelog</li>
                  <li className="inline mx-4 cursor-pointer">Password</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Buttons = ({ title }) => {
  return (
    <button className="text-white duration-150 text-base px-[60px] py-[30px] hover:bg-black">
      {title}
    </button>
  );
};
export default Footer;
