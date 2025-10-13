import React from "react";
import EventDetailsBlueProfileSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsBlueProfileSVG";
import { FaCircle } from "react-icons/fa";
import EventDetailsBlueContactSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsBlueContactSVG";

const GuestList = ({ guestList }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">Guest List</h3>
      <hr />
      {/* Details */}
      <div className="space-y-6 mt-6">
        {guestList.map((guest) => (
          <div
            key={guest.contactNumber}
            className="flex items-center justify-between"
          >
            {/* Name */}
            <div className="flex items-center gap-2 text-[#637381] font-medium">
              <EventDetailsBlueProfileSVG />
              {guest.name} <FaCircle size={4} color="#C4CDD5" /> {guest.status}
            </div>

            {/* Contact Number */}
            <div className="flex items-center gap-2 text-[#637381] font-medium">
              <EventDetailsBlueContactSVG />
              {guest.contactNumber}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestList;
