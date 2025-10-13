import React from "react";
import EventDetailsDinnerPlateSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsDinnerPlateSVG";
import EventClockSVG from "../../SVG/DashboardSvg/EventsSVG/EventClockSVG";
import EventLocationSVG from "../../SVG/DashboardSvg/EventsSVG/EventLocationSVG";

const Dinner = ({ dinner }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">Dinner</h3>
      <hr />

      {/* Details */}
      <div className="space-y-6 mt-6">
        {/* Restaurant Name */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventDetailsDinnerPlateSVG />
          {dinner.name}
        </div>

        {/* Date Time */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventClockSVG />
          {dinner.date}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventLocationSVG />
          {dinner.location}
        </div>
      </div>
    </div>
  );
};

export default Dinner;
