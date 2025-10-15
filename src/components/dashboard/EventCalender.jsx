import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import FilteredEvent from "./FilteredEvent";

const EventCalender = () => {
  const [selectedRange, setSelectedRange] = useState({
    from: new Date("2025-10-02"),
    to: new Date("2025-10-07"),
  });

  const eventData = [
    {
      eventName: "The Midnight Hour",
      eventId: "#BK-2024123",
      artistName: "DJ Nova",
      promoter: "Top Music",
      venue: "Arena Club",
      venueLocation: "Berlin, NY",
      date: "Sat, Oct 12",
      time: "7:00 PM- 10:00 PM",
      sales: 500.0,
      status: "Confirmed",
    },
    {
      eventName: "Neon Nights Festival",
      eventId: "#BK-2024124",
      artistName: "Luna Beats",
      promoter: "Skyline Events",
      venue: "Pulse Stadium",
      venueLocation: "Austin, TX",
      date: "Fri, Nov 8",
      time: "8:00 PM - 12:00 AM",
      sales: 720.0,
      status: "Confirmed",
    },
    {
      eventName: "Jazz & Chill Evening",
      eventId: "#BK-2024125",
      artistName: "Miles Carter",
      promoter: "Groove Nation",
      venue: "Blue Note Lounge",
      venueLocation: "Chicago, IL",
      date: "Sun, Nov 17",
      time: "6:30 PM - 9:30 PM",
      sales: 340.0,
      status: "Pending",
    },
    {
      eventName: "Rock Rebellion",
      eventId: "#BK-2024126",
      artistName: "The Voltures",
      promoter: "Rage Records",
      venue: "Thunder Hall",
      venueLocation: "Los Angeles, CA",
      date: "Sat, Dec 7",
      time: "9:00 PM - 1:00 AM",
      sales: 890.0,
      status: "Confirmed",
    },
    {
      eventName: "Soulful Sundays",
      eventId: "#BK-2024127",
      artistName: "Ariana Blake",
      promoter: "Dreamwave Studios",
      venue: "Harmony Garden",
      venueLocation: "Seattle, WA",
      date: "Sun, Oct 27",
      time: "5:00 PM - 8:00 PM",
      sales: 260.0,
      status: "Cancelled",
    },
    {
      eventName: "Electronic Vibes Night",
      eventId: "#BK-2024128",
      artistName: "DJ Orion",
      promoter: "Echo Productions",
      venue: "Club Mirage",
      venueLocation: "Miami, FL",
      date: "Fri, Nov 29",
      time: "10:00 PM - 3:00 AM",
      sales: 1020.0,
      status: "Confirmed",
    },
    {
      eventName: "Acoustic Serenity",
      eventId: "#BK-2024129",
      artistName: "Sophie Rae",
      promoter: "Harmony Live",
      venue: "Moonlight Cafe",
      venueLocation: "Portland, OR",
      date: "Thu, Oct 31",
      time: "7:30 PM - 10:00 PM",
      sales: 410.0,
      status: "Confirmed",
    },
    {
      eventName: "Urban Beats Vol. 2",
      eventId: "#BK-2024130",
      artistName: "MC Kairo",
      promoter: "Street Jam Co.",
      venue: "Metro Arena",
      venueLocation: "Newark, NJ",
      date: "Sat, Dec 14",
      time: "9:00 PM - 12:30 AM",
      sales: 650.2,
      status: "Pending",
    },
  ];

  // Helper function to parse event date
  const parseEventDate = (dateStr) => new Date(`${dateStr}, 2025`);

  // Filter events in selected range
  const filteredEvents = eventData.filter((event) => {
    const eventDate = parseEventDate(event.date);
    return (
      selectedRange.from &&
      selectedRange.to &&
      eventDate >= selectedRange.from &&
      eventDate <= selectedRange.to
    );
  });

  return (
    <div className="w-full mt-8 rounded-2xl bg-white px-4 pt-6 pb-4 space-y-3">
      <div className="flex items-center justify-center">
        <DayPicker
          mode="range"
          required
          selected={selectedRange}
          onSelect={setSelectedRange}
          navLayout="around"
        />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg">Events in Selected Range:</h3>
        {filteredEvents.length === 0 && <p>No events found.</p>}
        <div>
          {filteredEvents.map((event) => (
            <FilteredEvent key={event.eventId} event={event}></FilteredEvent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
