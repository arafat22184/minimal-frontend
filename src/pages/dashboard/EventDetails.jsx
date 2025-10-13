import React from "react";
import { useLoaderData } from "react-router";

import EventInformation from "../../components/dashboard/EventDetails/EventInformation";
import TravelIn from "../../components/dashboard/EventDetails/TravelIn";
import TravelOut from "../../components/dashboard/EventDetails/TravelOut";
import Hotel from "../../components/dashboard/EventDetails/Hotel";
import Dinner from "../../components/dashboard/EventDetails/Dinner";

const EventDetails = () => {
  const {
    eventInfo,
    travelIn,
    travelOut,
    hotelDetails,
    dinner,
    riderInfo,
    travelingParty,
    guestList,
  } = useLoaderData();
  return (
    <div>
      {/* First part */}
      <div className="grid grid-cols-3 gap-12">
        {/* Event Information */}
        <EventInformation
          eventInfo={eventInfo}
          hotelDetails={hotelDetails}
        ></EventInformation>

        <div className="space-y-12">
          {/* Travel In */}
          <TravelIn travelIn={travelIn}></TravelIn>
          {/* Travel Out */}
          <TravelOut travelOut={travelOut}></TravelOut>
        </div>
        <div className="space-y-12">
          {/* Hotel */}
          <Hotel hotelDetails={hotelDetails} />
          {/* Dinner */}
          <Dinner dinner={dinner} />
        </div>
      </div>
      {/* 2nd part */}
      <div></div>
    </div>
  );
};

export default EventDetails;
