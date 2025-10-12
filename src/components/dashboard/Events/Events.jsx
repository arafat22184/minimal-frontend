import React from "react";
import CalenderSVG from "../../SVG/DashboardSvg/CalenderSVG";
import Event from "./Event";
import { useLoaderData } from "react-router";

const Events = () => {
  const events = useLoaderData();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Upcoming Events</h1>
        <div className="p-2 bg-white flex items-center gap-1 rounded-[8px] text-[#919EAB]">
          <CalenderSVG></CalenderSVG> Filter
        </div>
      </div>

      {/* Event Lists */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4
      "
      >
        {events.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
