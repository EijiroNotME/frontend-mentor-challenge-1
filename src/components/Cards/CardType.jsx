import React from "react";

const CardType = ({ colorType, imgType, imgTypeName }) => {
  return (
    <div className={`${colorType} h-16 md:h-12 relative mb-[-10px]`}>
      <img
        className="absolute right-2 md:top-[-6px] md:w-14 md:h-14 h-18 w-18 top-[-2px]"
        src={imgType}
        alt={imgTypeName}
      />
    </div>
  );
};

export default CardType;
