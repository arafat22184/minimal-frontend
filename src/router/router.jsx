import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
]);

export default router;
