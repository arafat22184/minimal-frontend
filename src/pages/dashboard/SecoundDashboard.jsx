import React from "react";
import ChartCard from "../../components/dashboard/ChartCard";
import {
  CalenderSVG,
  CelebrationSVG,
  ArtistGroupSVG,
} from "../../components/SVG/DashboardSvg/CartCardSVG";

const SecoundDashboard = () => {
  const chartData = [
    {
      id: "1",
      name: "Upcoming Events",
      totalData: 20,
      growth: 16,
      isGrowth: true,
      icon: <CalenderSVG />,
    },
    {
      id: "2",
      name: "Events Completed",
      totalData: 30,
      growth: 16,
      isGrowth: true,
      icon: <CelebrationSVG />,
    },
    {
      id: "3",
      name: "Booking Request",
      totalData: 30,
      growth: 2,
      isGrowth: false,
      icon: <CalenderSVG />,
    },
    {
      id: "4",
      name: "Total Artist",
      totalData: 30,
      growth: 16,
      isGrowth: true,
      icon: <ArtistGroupSVG />,
    },
  ];

  return (
    <div>
      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chartData.map((data) => (
          <ChartCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default SecoundDashboard;
