import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import UpcomingEventCard from "./UpcomingEventCard";

const UpcomingEvents = () => {
  const data = useLoaderData();

  const [events, setEvents]=useState(data)
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("All");

  
  const eventTypes = ["All", ...new Set(data.map((item) => item.eventType))];

  useEffect(()=>{
      const loadEvent=async()=>{
           const res = await fetch(`https://impactify-server.vercel.app/search-events?search=${searchText}&type=${filterType}`)
           const filteredData = await res.json();
           setEvents(filteredData)
      }
      loadEvent();
  },[searchText,filterType])

  return (
    <div className="w-[90%] mx-auto">
      <div className="text-2xl text-center font-bold mt-10">
        🌿 Upcoming Social Development Events
      </div>
      <p className="text-center mb-10">
        Be a part of change! Explore and join upcoming community-driven events
        that make a real social and environmental impact.
      </p>

      {/* Search + Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 my-5">
        
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search event by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-1/4"
        />

        {/* Filter Dropdown */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border text-black bg-green-100 text-[1rem] font-semibold border-gray-300 px-4 py-2 rounded-lg w-full md:w-1/4"
        >
          {eventTypes.map((type, index) => (
            <option key={index} value={type}>
              {type === "All" ? "All Event Types" : type}
            </option>
          ))}
        </select>

      </div>

      {/* Events Grid (NO filtering) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        {events.map((event) => (
          <UpcomingEventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
