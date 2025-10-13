import { useEffect, useState } from "react";

const useEvent = (eventId, shouldFetch = true) => {
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (!shouldFetch || !eventId) {
      setEvent(null);
      return;
    }

    async function fetchEvent() {
      setLoading(true);
      try {
        const response = await fetch("/events.json");
        const allEvents = await response.json();
        const foundEvent = allEvents.find((e) => e.id === eventId);
        setEvent(foundEvent);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventId, shouldFetch]);

  return { event, loading };
};

export default useEvent;
