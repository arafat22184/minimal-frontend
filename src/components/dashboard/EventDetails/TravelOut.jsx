import React from "react";
import EventDetailsPlaneSvg from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsPlaneSvg";
import EventDetailsFormPlane from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsFormPlane";
import EventDetailsToPlane from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsToPlane";
import EventClockSVG from "../../SVG/DashboardSvg/EventsSVG/EventClockSVG";

const TravelOut = ({ travelOut }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">Travel Out</h3>
      <hr />

      {/* Details */}
      <div className="space-y-6 mt-6">
        {/* Flight No */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventDetailsPlaneSvg />
          {travelOut.flightNo}
        </div>

        <div className="flex items-center gap-6">
          {/* From */}
          <div className="flex items-center gap-2 text-[#637381] font-medium">
            <EventDetailsFormPlane></EventDetailsFormPlane>
            {travelOut.from}
          </div>

          <div className="flex items-center gap-2 text-[#637381] font-medium">
            <EventClockSVG></EventClockSVG>
            {travelOut.travelDateTime}
          </div>
        </div>
        {/* To */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#637381] font-medium">
            <EventDetailsToPlane></EventDetailsToPlane>
            {travelOut.to}
          </div>
          <div className="flex items-center gap-2 text-[#637381] font-medium">
            <EventClockSVG></EventClockSVG>
            {travelOut.landingDateTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelOut;
