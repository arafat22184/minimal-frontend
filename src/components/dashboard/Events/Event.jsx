import EventCalenderSVG from "../../SVG/DashboardSvg/EventsSVG/EventCalenderSVG";
import EventClockSVG from "../../SVG/DashboardSvg/EventsSVG/EventClockSVG";
import EventLocationSVG from "../../SVG/DashboardSvg/EventsSVG/EventLocationSVG";
import EventPlaneSVG from "../../SVG/DashboardSvg/EventsSVG/EventPlaneSVG";
import { Link } from "react-router";

const Event = ({ event }) => {
  const { id, title, type, eventInfo, travelIn } = event;

  return (
    <Link to={`event/${id}`} className="bg-white rounded-2xl p-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-[#637381]">{type}</p>

      {/* Details */}
      <div className="px-3 py-4 bg-[#F5FAFF] rounded-[8px] mt-4 space-y-4">
        {/* Date */}
        <div className="flex gap-2">
          <EventCalenderSVG></EventCalenderSVG>
          <p className="text-[#919EAB] text-sm">{eventInfo.date}</p>
        </div>

        {/* Time */}
        <div className="flex gap-2">
          <EventClockSVG></EventClockSVG>
          <p className="text-[#919EAB] text-sm">{eventInfo.time}</p>
        </div>

        {/* Location */}
        <div className="flex gap-2">
          <EventLocationSVG></EventLocationSVG>
          <p className="text-[#919EAB] text-sm">{eventInfo.location}</p>
        </div>

        {/* Flight */}
        <div className="flex gap-2">
          <EventPlaneSVG></EventPlaneSVG>
          <p className="text-[#919EAB] text-sm">{travelIn.flightNo}</p>
        </div>
      </div>
    </Link>
  );
};

export default Event;
