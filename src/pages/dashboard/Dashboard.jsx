import React from "react";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      {/* Sidebar */}
      <h1>I am dashboard</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
