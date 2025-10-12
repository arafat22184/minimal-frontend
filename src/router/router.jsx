import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";
import Events from "../components/dashboard/Events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: Events,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/assistant",
      },
    ],
  },
]);

export default router;
