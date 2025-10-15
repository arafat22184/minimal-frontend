import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import EventDeleteSVG from "../SVG/DashboardSvg/EventDeleteSVG";
import EventEditSVG from "../SVG/DashboardSvg/EventEditSVG";
import Swal from "sweetalert2";

const defaultData = [
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

const columnHelper = createColumnHelper();

const EventList = () => {
  const [data, setData] = React.useState(() => [...defaultData]);

  const handleEventDelete = (eventId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This event will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setData((prev) => prev.filter((event) => event.eventId !== eventId));

        Swal.fire("Deleted!", "Your event has been removed.", "success");
      }
    });
  };

  const columns = [
    columnHelper.accessor("eventName", {
      cell: ({ row }) => row.original.eventName,
      header: () => "Event Name",
    }),
    columnHelper.accessor((row) => row.artistName, {
      id: "artistName",
      cell: (info) => info.getValue(),
      header: () => "Artist Name",
    }),
    columnHelper.accessor((row) => row.promoter, {
      id: "promoter",
      cell: (info) => info.getValue(),
      header: () => "Promoter",
    }),
    columnHelper.accessor((row) => row.venue, {
      id: "venue",
      cell: (info) => info.getValue(),
      header: () => "Venue",
    }),
    columnHelper.accessor((row) => row.date, {
      id: "date",
      cell: ({ row }) => (
        <div>
          <p>{row.original.date}</p>
          <p className="text-xs">{row.original.time}</p>
        </div>
      ),
      header: () => "Date & Time",
    }),
    columnHelper.accessor("sales", {
      id: "sales",
      header: () => "Sales",
      cell: ({ row }) => <p>${Number(row.original.sales).toFixed(2)}</p>,
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        const confirm =
          "bg-[#E6FDF2] border-[#A5E6C6] rounded-[6px] px-3 py-1 text-[#0CAF60] text-center";
        const pending =
          "bg-[#FFFAE9] border-[#FFECA7] rounded-[6px] px-3 py-1 text-[#FFD023] text-center";
        const cancelled =
          "bg-[#FCEAEB] border-[#F3ADAF] rounded-[6px] px-3 py-1 text-[#E03137] text-center";

        return (
          <div className="flex justify-center items-center">
            <span
              className={
                status === "Confirmed"
                  ? confirm
                  : status === "Pending"
                  ? pending
                  : status === "Cancelled" && cancelled
              }
            >
              {row.original.status}
            </span>
          </div>
        );
      },
    }),
    columnHelper.accessor("action", {
      id: "action",
      header: () => <p className="text-center">Action</p>,
      cell: ({ row }) => {
        return (
          <div className="flex justify-center gap-2 items-center">
            <button
              onClick={() => {
                handleEventDelete(row.original.eventId);
              }}
              className="px-2 py-2 rounded-[6px] border border-[#F4F6F8] cursor-pointer hover:bg-red-500 hover:text-white"
            >
              <EventDeleteSVG />
            </button>
            <button className="px-2 py-2 rounded-[6px] border border-[#F4F6F8] cursor-pointer hover:bg-yellow-500 hover:text-white">
              <EventEditSVG />
            </button>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="col-span-3 mt-8 bg-white p-3 rounded-2xl">
      <div className="flex justify-between px-1 mb-4">
        <h4 className="text-lg font-semibold">Event List</h4>
        <select
          id="filter"
          name="days"
          className="border border-[#F4F6F8] text-[#637381] py-1 px-3 rounded-[8px]"
        >
          <option value="volvo">Recent</option>
          <option value="saab">Yesterday</option>
          <option value="mercedes">Previous</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full pt-[14px] px-4 pb-[22px]">
        <thead className="bg-[#F9FAFB] rounded-[8px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="py-2 px-3 text-left text-[#212B36]"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="last:border-none border-b border-[#F4F6F8]"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className="text-[#637381] text-sm pt-[17px] pb-[9px]"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
