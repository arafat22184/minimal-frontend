import { createBrowserRouter } from "react-router";
import Events from "../components/dashboard/Events/Events";
import EventDetails from "../pages/dashboard/EventDetails";
import Dashboard from "../layout/Dashboard";

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
    ],
  },
]);

export default router;
