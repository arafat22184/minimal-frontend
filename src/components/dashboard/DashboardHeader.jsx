import React from "react";
import searchIcon from "../../assets/dashboard/search-ico.svg";
import notificationIcon from "../../assets/dashboard/notification-ico.svg";
import profilePicture from "../../assets/dashboard/profile-picture.png";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#454F5B]">Dashboard</h2>
        <p className="text-[#637381] text-sm">Welcome back Andrei</p>
      </div>
      <div className="flex items-center gap-6">
        <img src={searchIcon} alt="serach Icon" />
        <img src={notificationIcon} alt="notification icon" />
        <img
          className="w-13 h-13 rounded-full"
          src={profilePicture}
          alt="profile Picture"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
