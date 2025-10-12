import React from "react";
import CalenderSVG from "../../SVG/DashboardSvg/CalenderSVG";

const Events = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg">Upcoming Events</h1>
        <div className="p-2 bg-white flex items-center gap-1 rounded-[8px] text-[#919EAB]">
          <CalenderSVG></CalenderSVG> Filter
        </div>
      </div>

      {/* Event Lists */}
      <div></div>
    </div>
  );
};

export default Events;
