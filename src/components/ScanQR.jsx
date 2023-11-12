import React, { useState } from "react";

const ScanQR = () => {
  const [blur, setBlur] = useState("blur");
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState("top-1/2");
  const [btnText, setBtnText] = useState("Show Code");
  function toggleBlur() {
    if (!toggle) {
      setBlur("blur-0");
      setBtnText("Hide Code");
      setHeight("top-[8%]");
      setToggle(!toggle);
    } else {
      setBlur("blur");
      setBtnText("Show Code");
      setHeight("top-1/2");
      setToggle(!toggle);
    }
  }
  return (
    <>
      <div className="nav w-full flex flex-row justify-between px-20 py-16">
        <div className="aspect-square w-14 rounded-full cursor-pointer border border-black flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
          >
            <path
              d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM21 7L1 7V9L21 9V7Z"
              fill="black"
            />
          </svg>
        </div>
        <div className=" w-20 h-12 cursor-pointer bg-black rounded-lg text-white flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
          >
            <path
              d="M16 21H14V19C14 17.3431 12.6569 16 11 16H5C3.34315 16 2 17.3431 2 19V21H0V19C0 16.2386 2.23858 14 5 14H11C13.7614 14 16 16.2386 16 19V21ZM8 12C4.68629 12 2 9.3137 2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6C14 9.3137 11.3137 12 8 12ZM8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="qr-n-inpt flex flex-col items-center">
        <h1 className="text-[32px] font-bold">Scan & Pay via Prop</h1>
        <div className="qr-container flex justify-center p-9 relative">
          <img
            src="../src/assets/qrcode.jpg"
            className={`w-[80%] ${blur} duration-1000`}
            alt="Error Loading QR"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleBlur();
            }}
            className={`bg-black text-base text-white px-[30px] py-[12px] duration-150 absolute rounded-full ${height} -translate-y-1/2`}
          >
            {btnText}
          </button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="w-[150px] mx-2 h-[1px] bg-slate-600"></div>
          <h1 className="text-2xl font-normal">OR</h1>
          <div className="w-[150px] mx-2 h-[1px] bg-slate-600"></div>
        </div>
      </div>
    </>
  );
};

export default ScanQR;
