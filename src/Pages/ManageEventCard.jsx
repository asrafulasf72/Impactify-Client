import React from "react";
import { Calendar, Mail, MapPin, User } from "lucide-react";

const ManageEventCard = ({ event }) => {
  const {
    title,
    description,
    eventType,
    thumbnail,
    location,
    event_date,
    created_by,
    organizer_Name,
  } = event;

  const formattedDate = new Date(event_date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row gap-4 mb-6 border border-gray-100">
      {/* Thumbnail */}
      <div className="w-full sm:w-1/3 h-52 sm:h-auto">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
        {/* Top Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-3">
            {description}
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-green-600" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-purple-600" />
              <span>{organizer_Name}</span>
            </div>
              <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-600" />
              <span>{created_by}</span>
            </div>
          </div>

          {/* Type Tag */}
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
            {eventType}
          </span>
        </div>

        {/* Bottom (Optional Buttons) */}
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2  bg-green-600 text-white text-[1rem] font-bold rounded-xl hover:bg-green-700 transition">
            Update Event
          </button>
          <button className="px-4 py-2  bg-red-500 text-white text-[1rem] font-bold rounded-xl hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageEventCard;
