import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BrandButtons = ({ name, icon, width }) => {
  return (
    <>
      <button
        className={`${width} border-[1px] border-gray-500 rounded-3xl h-12 mt-2 flex justify-center items-center`}
      >
        <span className="p-2">
          <FontAwesomeIcon icon={icon} size="2xl" />
        </span>
        <span className="p-2">{name}</span>
      </button>
    </>
  );
};

export default BrandButtons;
