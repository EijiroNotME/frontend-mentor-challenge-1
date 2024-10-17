import React from "react";
import ProfileImg from "../../assets/images/image-jeremy.png";

const Profile = () => {
  return (
    <div className="flex flex-row md:flex-col items-left gap-5">
      <div>
        <img
          className="w-20 md:w-16 h-20 md:h-16 border-2 border-primary-text rounded-full"
          src={ProfileImg}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-primary-text/70 text-xs">Report for</p>
        <h1 className="text-primary-text text-3xl leading-tight ">
          Jeremy Robson
        </h1>
      </div>
    </div>
  );
};

export default Profile;
