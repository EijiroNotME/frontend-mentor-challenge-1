import React from "react";
import ProfileView from "../components/Profile/ProfileView";
import CardsView from "../components/Cards/CardsView";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
      <div className="md:col-span-1 ">
        <ProfileView />
      </div>
      <div className="md:col-span-3">
        <CardsView />
      </div>
    </div>
  );
};

export default Dashboard;
