import React from "react";
import searchIcon from "../../assets/dashboard/search-ico.svg";
import notificationIcon from "../../assets/dashboard/notification-ico.svg";
import profilePicture from "../../assets/dashboard/profile-picture.png";
import { useLocation, useParams } from "react-router";
import useEvent from "../../hooks/useEvent";

const DashboardHeader = () => {
  const { id: eventId } = useParams();
  const { pathname } = useLocation();
  const shouldFetch = pathname !== "/event";
  const { loading, event } = useEvent(eventId, shouldFetch);

  if (loading) return <div>Loading...</div>;

  const title = event?.title
    ? event.title
    : pathname === "/assistant"
    ? "Ai Assistant"
    : "Dashboard";

  if (pathname === "/profile") {
    return;
  }

  return (
    <div className="flex justify-between items-center pb-5 border-b border-[#DFE3E8] mb-6.5 h-[100px] w-full px-6 py-6">
      <div>
        <h2 className="text-3xl font-bold text-[#454F5B]">{title}</h2>
        <p className="text-[#637381] text-sm">
          {event?.type
            ? event.type
            : pathname === "/assistant"
            ? "Personal travel companion"
            : "Welcome back Andrei"}
        </p>
      </div>
      <div className="flex items-center gap-6">
        <img src={searchIcon} alt="search icon" />
        <img src={notificationIcon} alt="notification icon" />
        <img
          className="w-13 h-13 rounded-full"
          src={profilePicture}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
