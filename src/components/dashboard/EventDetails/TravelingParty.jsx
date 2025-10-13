import React from "react";
import EventDetailsBlueProfileSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsBlueProfileSVG";
import { FaCircle } from "react-icons/fa";
import EventDetailsBlueContactSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsBlueContactSVG";

const TravelingParty = ({ travelingParty }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">Traveling Party</h3>
      <hr />
      {/* Details */}
      <div className="space-y-7 mt-6">
        {travelingParty.map((party, i) => (
          <div key={i} className="space-y-3">
            {/* Name */}
            <div className="flex items-center gap-2 text-[#637381] font-medium">
              <EventDetailsBlueProfileSVG />
              {party.name} <FaCircle size={4} color="#C4CDD5" />{" "}
              {party.position}
            </div>

            {/* Contact Number */}
            <div className="flex items-center gap-2 text-[#637381] font-medium">
              <EventDetailsBlueContactSVG />
              {party.contactNumber}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelingParty;
