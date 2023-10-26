import React from "react";

const FooterHero = () => {
  return (
    <>
      <div className="footer-hero relative mt-10">
        <div
          before=""
          className="img-container bg-[rgb(0,15,33)] w-full relative flex justify-end  after:block after:absolute after:w-full after:h-full after:top-0 after:right-0 after:content-[attr(before)] after:bg-footer-hero-grad"
        >
          <img className="w-[80%]" src="../src/assets/team-hncc.jpeg" alt="" />
        </div>
        <div className="footer-hero-content absolute top-20 w-80 left-20 text-white">
          <div className="bg-[hsl(213,100%,11%)] border-l-4 border-[#FFDA56] w-fit px-3">
            Contact
          </div>
          <div className="text-[52px]/[60px] font-bold pt-2 pb-4">
            Get in touch with us.
          </div>
          <div className="pt-4 flex flex-row items-center w-fit">
            <a href="mailto:hnccbits@gmail.com">
              <div className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="63"
                  viewBox="0 0 63 63"
                  fill="none"
                >
                  <circle
                    cx="31.5"
                    cy="31.5"
                    r="31"
                    fill="black"
                    stroke="white"
                  />
                  <path
                    d="M40.996 23H23.004C22.4495 23 22 23.3755 22 23.8387V37.1613C22 37.6245 22.4495 38 23.004 38H40.996C41.5505 38 42 37.6245 42 37.1613V23.8387C42 23.3755 41.5505 23 40.996 23Z"
                    stroke="#F6B426"
                  />
                  <path d="M22 23L32.4247 30L42 23.2294" stroke="#F6B426" />
                </svg>
              </div>
            </a>
            <a href="mailto:hnccbits@gmail.com">
              <div className="mail pl-5">
                <div>Email</div>
                <div>hnccbits@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHero;
