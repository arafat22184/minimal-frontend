import React from "react";
import EventDetailsHotelSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsHotelSVG";
import EventDetailsBedSVG from "../../SVG/DashboardSvg/EventDetailsSVG/EventDetailsBedSVG";
import EventLocationSVG from "../../SVG/DashboardSvg/EventsSVG/EventLocationSVG";

const Hotel = ({ hotelDetails }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">Hotel</h3>
      <hr />
      {/* Details */}
      <div className="space-y-6 mt-6">
        {/* Hotel Name */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventDetailsHotelSVG />
          {hotelDetails.name}
        </div>

        {/* Room Type and Facilities */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventDetailsBedSVG />
          {hotelDetails.roomType} - {hotelDetails.facilities}
        </div>

        {/* Check In Check Out */}
        <div className="flex items-center gap-15">
          <div className="text-[#637381] font-medium">
            <span className="text-black font-semibold">Check in</span> :{" "}
            {hotelDetails.checkInTime}
          </div>
          <div className=" text-[#637381] font-medium">
            <span className="text-black font-semibold">Check out</span> :{" "}
            {hotelDetails.checkOutTime}
          </div>
        </div>
        {/* Location */}
        <div className="flex items-center gap-2 text-[#637381] font-medium">
          <EventLocationSVG />
          {hotelDetails.location}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
