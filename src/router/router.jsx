import { createBrowserRouter } from "react-router";
import Events from "../components/dashboard/Events/Events";
import EventDetails from "../pages/dashboard/EventDetails";
import Dashboard from "../layout/Dashboard";
import AiAssistant from "../pages/dashboard/AiAssistant";
import Profile from "../pages/dashboard/Profile";
import SecoundDashboard from "../pages/dashboard/SecoundDashboard";

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
        path: "/dashboard",
        Component: SecoundDashboard,
      },
      {
        path: "/event/:id",
        Component: EventDetails,
        loader: async ({ params }) => {
          const res = await fetch("/events.json");
          const events = await res.json();
          const event = events.find((ev) => ev.id === params.id);

          if (!event) {
            throw new Response("Event not found", { status: 404 });
          }

          return event;
        },
      },
      {
        path: "/assistant",
        Component: AiAssistant,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
]);

export default router;
