import React from "react";

const InputBox = ({ id, type, plcholder }) => {
  return (
    <>
      <input
        className="w-full border-[1px] border-gray-500 h-12 rounded-md px-2"
        id={id}
        type={type}
        placeholder={plcholder}
      />
    </>
  );
};

export default InputBox;
