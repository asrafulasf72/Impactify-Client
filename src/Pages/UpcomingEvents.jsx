import React from "react";
import { useLoaderData } from "react-router";
import UpcomingEventCard from "./UpcomingEventCard";

const UpcomingEvents = () => {
  const data = useLoaderData();
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-2xl text-center font-bold mt-10">
        🌿 Upcoming Social Development Events
      </div>
      <p className=" text-center mb-10 ">
        Be a part of change! Explore and join upcoming community-driven events
        that make a real social and environmental impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        {data.map((event) => (
          <UpcomingEventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
