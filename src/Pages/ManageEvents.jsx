import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import ManageEventCard from "./ManageEventCard";

const ManageEvents = () => {
  const { user, loading, setloading } = useContext(AuthContext);
  const [manageEvent, setManageEvent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/manage-events?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setManageEvent(data);
        setloading(false);
      });
  }, [user.email, setloading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-base-content">
        Manage Your Events
      </h1>

      {manageEvent.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {manageEvent.map((event) => (
            <ManageEventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
