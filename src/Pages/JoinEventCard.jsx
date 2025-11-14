import React from "react";
import { MapPin, Calendar, User } from "lucide-react";

const JoinEventCard = ({ event }) => {
  const { eventTitle, eventDate, userName, eventLocation, userEmail } = event;

  const formattedDate = new Date(eventDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="
      bg-gradient-to-br from-green-100 to-blue-100 
      backdrop-blur-md 
      border border-white/40 
      shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
      rounded-2xl p-6 
      hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] 
      hover:-translate-y-1 
      transition-all duration-300
    ">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        {eventTitle}
      </h2>

      {/* Info Box */}
      <div className="space-y-2 text-gray-800">

        {/* Location */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-white/70 rounded-xl shadow-sm">
            <MapPin size={18} className="text-blue-600" />
          </div>
          <p className="text-sm">{eventLocation}</p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-white/70 rounded-xl shadow-sm">
            <Calendar size={18} className="text-green-600" />
          </div>
          <p className="text-sm">{formattedDate}</p>
        </div>

        {/* Joined User */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-white/70 rounded-xl shadow-sm">
            <User size={18} className="text-purple-600" />
          </div>
          <p className="text-sm font-medium">
            Joined by: {userName} ({userEmail})
          </p>
        </div>

      </div>

    </div>
  );
};

export default JoinEventCard;
