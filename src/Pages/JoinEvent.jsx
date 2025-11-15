import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import JoinEventCard from "./JoinEventCard";

const JoinEvent = () => {
  const { user, loading, setloading } = useContext(AuthContext);
  const [joinEvent, setJoinEvent] = useState([]);
  const sortedEvents = [...joinEvent].sort((a, b) => {
  return new Date(a.eventDate) - new Date(b.eventDate);
});

  useEffect(() => {
    fetch(`http://localhost:3000/join-events?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJoinEvent(data);
        setloading(false);
      });
  }, [user.email, setloading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-base-content/70">Loading...</p>
      </div>
    );
  }
  return (
    <div className=" w-[90%] mx-auto my-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          Your Joined Events
        </h1>
        <p className="mt-3 text-base-content/80 md:text-lg max-w-2xl mx-auto">
          Here are the social development events you have joined and contributed
          to making your community a better place through active
          participation.
        </p>
      </div>

      

      {sortedEvents.length === 0 ? (
        <p className="text-center text-base-content/70">You Not Join Any Social  Event Yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEvents.map((event) => (
            <JoinEventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinEvent;
