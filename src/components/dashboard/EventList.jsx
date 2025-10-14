import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

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
    eventName: "tandy",
    artistName: "miller",
    promoter: 40,
    venue: 40,
    dateTime: "Single",
    status: 80,
  },
  {
    eventName: "joe",
    artistName: "dirte",
    promoter: 45,
    venue: 20,
    dateTime: "Complicated",
    status: 10,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("eventName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.artistName, {
    id: "artistName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("promoter", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("venue", {
    header: () => <span>venue</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("dateTime", {
    header: "dateTime",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Profile status",
    footer: (info) => info.column.id,
  }),
];
const EventList = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

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
          className="border border-red-300 rounded-[8px]"
        >
          <option value="volvo">Recent</option>
          <option value="saab">Yesterday</option>
          <option value="mercedes">Previous</option>
        </select>
      </div>

      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
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
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
        <button onClick={() => rerender()} className="border p-2">
          Rerender
        </button>
      </div>
    </div>
  );
};

export default EventList;
