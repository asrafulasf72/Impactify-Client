import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Components/Context/AuthContext";
import toast from "react-hot-toast";


const EventDetails = () => {
  const {user}=useContext(AuthContext)

  const data = useLoaderData();
  const {
    title,
    description,
    eventType,
    thumbnail,
    location,
    event_date,
    created_by,
     organizer_Name,
  } = data;

    const formattedDate = new Date(event_date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const handleJoinEvent=()=>{
        
       const joinData={
        eventTitle: title,
        userName:user.displayName,
        userEmail:user.email,
        eventLocation:location,
        eventDate:formattedDate

       }

           fetch("http://localhost:3000/join-event",{
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify(joinData)
           })
           .then((res)=>res.json())
           .then((data)=>{
               if(data.message === "Already joined"){
                toast.error("You already joined this event!")
                return;
               }
                toast.success("Join Event Successfully!!")
          
           })
           .catch((error)=>{
            console.log(error)
            toast.error(error.message)
           })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      {/* Event Banner */}
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="bg-white mt-10 p-6 md:p-10 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              Event Type: <span className="font-medium">{eventType}</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 text-sm">
              Organizer Name:{" "}
              <span className="font-medium text-blue-600">{organizer_Name}</span>
            </p>
             <p className="text-gray-600 text-sm">
              Organizer Email:{" "}
              <span className="font-medium text-blue-600">{created_by}</span>
            </p>
            <p className="text-gray-600 text-sm">
              Event Date:{" "}
              <span className="font-medium text-green-600">{formattedDate}</span>
            </p>
          </div>
        </div>

        <hr className="my-4" />

        {/* Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Event Description
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Location */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Location
          </h3>
          <p className="text-gray-700">{location}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
         <Link to='/join-event'> <button onClick={handleJoinEvent} className="bg-green-600 hover:bg-green-700 text-white text-[1rem] font-bold px-6 py-3 rounded-lg shadow-md transition">
            Join Event
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
