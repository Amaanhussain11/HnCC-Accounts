import React from "react";

const Card = ({
  name,
  designation,
  insta = "#",
  twitter = "#",
  facebook = "#",
  linkedin = "#",
}) => {
  return (
    <>
      <div className="main w-64 group rounded-md overflow-hidden">
        <div className="img w-64 zoo">
          <img
            src="../src/assets/alumni.jpg"
            className="group-hover:scale-[1.05] duration-200"
            alt="Alumni"
          />
        </div>
        <div className="title-logo relative">
          <div className="logo absolute right-[-60%] duration-200 top-[-45%] group-hover:right-0 bg-gradient-to-r from-amber-400 via-amber-300 text-base to-orange-200 px-[10px] py-3 flex justify-between w-fit">
            <a href={facebook}>
              <i className="bi bi-facebook px-2"></i>
            </a>
            <a href={twitter}>
              <i className="bi bi-twitter-x px-2 "></i>
            </a>
            <a href={linkedin}>
              <i className="bi bi-linkedin px-2 "></i>
            </a>
            <a href={insta}>
              <i className="bi bi-instagram px-2 "></i>
            </a>
          </div>
          <div className="txt bg-black text-white w-full px-5 py-4">
            <div className="name text-[14px]">{name}</div>
            <div className="designaiton text-slate-400 text-[11px] mt-1">
              {designation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
