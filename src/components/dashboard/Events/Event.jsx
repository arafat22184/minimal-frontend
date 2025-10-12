import React from "react";
import EventCalenderSVG from "../../SVG/DashboardSvg/EventsSVG/EventCalenderSVG";
import EventClockSVG from "../../SVG/DashboardSvg/EventsSVG/EventClockSVG";
import EventLocationSVG from "../../SVG/DashboardSvg/EventsSVG/EventLocationSVG";
import EventPlaneSVG from "../../SVG/DashboardSvg/EventsSVG/EventPlaneSVG";

const Event = ({ event }) => {
  const { title, type, date, location, time, flight } = event;
  return (
    <div className="bg-white rounded-2xl p-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-[#637381]">{type}</p>

      {/* Details */}
      <div className="px-3 py-4 bg-[#F5FAFF] rounded-[8px] mt-4 space-y-4">
        {/* Date */}
        <div className="flex gap-2">
          <EventCalenderSVG></EventCalenderSVG>
          <p className="text-[#919EAB] text-sm">{date}</p>
        </div>

        {/* Time */}
        <div className="flex gap-2">
          <EventClockSVG></EventClockSVG>
          <p className="text-[#919EAB] text-sm">{time}</p>
        </div>

        {/* Location */}
        <div className="flex gap-2">
          <EventLocationSVG></EventLocationSVG>
          <p className="text-[#919EAB] text-sm">{location}</p>
        </div>

        {/* Flight */}
        <div className="flex gap-2">
          <EventPlaneSVG></EventPlaneSVG>
          <p className="text-[#919EAB] text-sm">{flight}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
