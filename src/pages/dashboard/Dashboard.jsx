import React from "react";
import { Outlet } from "react-router";

import { Sidebar } from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="flex min-h-svh">
      <Sidebar></Sidebar>
      {/* Main */}
      <div className="bg-[#F9FAFB] flex-1 px-10 py-7">
        <DashboardHeader></DashboardHeader>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
