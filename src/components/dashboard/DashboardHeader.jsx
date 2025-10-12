import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/dashboard/search-ico.svg";
import notificationIcon from "../../assets/dashboard/notification-ico.svg";
import profilePicture from "../../assets/dashboard/profile-picture.png";
import { useParams } from "react-router";

const DashboardHeader = () => {
  const { id: eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch("/events.json");
        const allEvents = await response.json();
        const foundEvent = allEvents.find((e) => e.id === eventId);
        setEvent(foundEvent);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventId]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex justify-between items-center pb-5 border-b border-[#DFE3E8] mb-6.5">
      <div>
        <h2 className="text-3xl font-bold text-[#454F5B]">
          {event?.title ? event.title : "Dashboard"}
        </h2>
        <p className="text-[#637381] text-sm">
          {event?.type ? event.type : "Welcome back Andrei"}
        </p>
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
