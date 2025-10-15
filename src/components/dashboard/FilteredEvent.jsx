import React from "react";
import EventElipseCircleSVG from "../SVG/DashboardSvg/EventElipseCircleSVG";
import EventFilterClockSVG from "../SVG/DashboardSvg/EventFilterClockSVG";

const FilteredEvent = ({ event, i }) => {
  const formatEventDate = (dateStr) => {
    const date = new Date(`${dateStr}, 2025`); // ensure year added
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    return { day, weekday };
  };

  const convertedDate = formatEventDate(event.date);
  const bgColor = i % 2 === 0 ? "bg-[#2094F3]" : "bg-[#0061C9]";

  return (
    <div className="flex gap-4 items-center">
      <div
        className={`${bgColor} text-white text-center font-semibold rounded-[8px] px-4 py-2`}
      >
        <p>{convertedDate.day}</p>
        <p>{convertedDate.weekday}</p>
      </div>
      <div className="space-y-2">
        <p className="text-[#637381] text-sm font-medium flex items-center gap-3">
          {event.eventName} <EventElipseCircleSVG /> {event.artistName}
        </p>
        <div className="text-xs space-x-3 text-[#637381] flex items-center gap-3">
          <p>{event.eventId}</p>
          <p className="flex items-center gap-0.5">
            <EventFilterClockSVG />
            {event.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilteredEvent;
