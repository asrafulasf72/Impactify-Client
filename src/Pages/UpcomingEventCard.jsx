import React from "react";

const UpcomingEventCard = ({ event }) => {
  const { title, eventType, thumbnail, location, event_date } = event;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      {/* Event Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {eventType}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-2">
        <h2 className="text-lg font-semibold text-green-700 line-clamp-1">{title}</h2>

        <p className="text-sm text-gray-600 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 12.414C12.633 11.633 11.367 11.633 10.586 12.414L6.343 16.657C4.879 18.121 4.879 20.879 6.343 22.343C7.808 23.808 10.566 23.808 12.03 22.343L16.273 18.1C17.737 16.636 17.737 13.878 16.273 12.414L17.657 16.657Z"
            />
          </svg>
          {location}
        </p>

        <p className="text-sm text-gray-600 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {event_date}
        </p>
      </div>

      {/* View Event Button */}
      <div className="px-5 pb-4">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition">
          View Event
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
