import React from "react";
import { BsThreeDots } from "react-icons/bs";
import CardType from "./CardType";

const Cards = ({
  title,
  current,
  previous,
  colorType,
  imgType,
  imgTypeName,
}) => {
  return (
    <div className="relative rounded-xl h-52 overflow-hidden  cursor-pointer">
      <CardType
        colorType={colorType}
        imgType={imgType}
        imgTypeName={imgTypeName}
      />

      <div className="bg-secondary-default text-primary-text p-6 rounded-xl h-80 relative z-10">
        {/* Title and Dots */}
        <div className="flex justify-between">
          <h1 className="text-base font-semibold">{title}</h1>
          <BsThreeDots className="text-lg cursor-pointer" />
        </div>

        {/* Hours */}
        <div className="flex flex-row md:flex-col justify-between mt-5">
          <div className="flex items-center font-light">
            <h1 className="text-4xl tracking-tighter">
              {current}
              <span className=" ml-1">hrs</span>
            </h1>
          </div>

          {/* Last Week Info */}
          <div className="flex items-center">
            <p className="text-primary-text/70 text-xs tracking-tighter mt-2">
              Last Week -{" "}
              <span>
                {previous}
                <span className=" ml-1">hrs</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
