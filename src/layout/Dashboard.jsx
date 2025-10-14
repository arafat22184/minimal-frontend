import React from "react";
import { Outlet } from "react-router";
import { Sidebar } from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="max-w-[280px]">
        <Sidebar />
      </div>
      {/* Main */}
      <div className="bg-[#F9FAFB] flex-1  w-[calc(100%-280px)]">
        <DashboardHeader />

        <div className="h-[calc(100vh-130px)] w-full overflow-y-auto px-6 py-7 scrollbar-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
