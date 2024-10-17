import React from "react";
import Profile from "./Profile";
import ProfileSelector from "./ProfileSelector";

const ProfileView = () => {
  return (
    <div className="bg-secondary-default rounded-xl h-full">
      <div className=" bg-accent-default rounded-xl p-5 h-40 md:h-72 flex items-center md:items-baseline justify-center">
        <Profile />
      </div>

      <div className="p-5">
        <ProfileSelector />
      </div>
    </div>
  );
};

export default ProfileView;
