import EventGateSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventGateSVG";
import EventCalenderSVG from "../../SVG/DashboardSvg/EventsSVG/EventCalenderSVG";
import EventClockSVG from "../../SVG/DashboardSvg/EventsSVG/EventClockSVG";
import EventLocationSVG from "../../SVG/DashboardSvg/EventsSVG/EventLocationSVG";

const EventInformation = ({ eventInfo, hotelDetails }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">Event information</h3>
      <hr />

      {/* Details */}
      <div className="space-y-6 mt-6">
        {/* Hotel name */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventGateSVG /> {hotelDetails.name}
        </div>

        {/* Date time */}
        <div className="flex items-center gap-7">
          {/* Time */}
          <div className="flex items-center gap-2 text-[#637381] font-medium">
            <EventClockSVG></EventClockSVG> {eventInfo.time}
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-[#637381] font-medium">
            <EventCalenderSVG /> {eventInfo.date}
          </div>
        </div>

        {/* Event Location */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventLocationSVG /> {hotelDetails.location}
        </div>

        {/* Arrival Info */}
        <div>
          <h4 className="text-lg font-medium">Arrival Info</h4>
          <p className="text-lg text-[#637381]">{eventInfo.arrivalInfo}</p>
        </div>

        {/* Dressing Room */}
        <div>
          <h4 className="text-lg font-medium">Dressing Room</h4>
          <p className="text-lg text-[#637381]">{eventInfo.dressingRoom}</p>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
