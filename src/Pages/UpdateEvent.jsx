import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, } from "react-router";

const UpdateEvent = () => {
  const [eventDate, setEventDate] = useState(null);
  const data = useLoaderData();
  const navigate= useNavigate()
 
  const { title, description, eventType, location, thumbnail,_id } = data;
  
 

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.eventType.value,
      thumbnail: e.target.thumbnail.value,
      location: e.target.location.value,
      event_date: eventDate,
    };
    fetch(`https://impactify-server.vercel.app/update-event/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Successfully updated!");
        
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message)
      });
      navigate('/manage-events')
  };

  return (
    <div className="max-w-2xl mx-auto my-10 bg-base-200 shadow-lg rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
        Update Your Social Event
      </h1>
      <p className="text-center text-base-content/70 mb-6">
        Make changes to your event by updating the information in the form below
      </p>

      <form onSubmit={handleUpdateEvent} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-base-content/70 font-medium mb-1">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Enter event title"
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-base-content/70 font-medium mb-1">
            Description
          </label>
          <textarea
            rows="3"
            defaultValue={description}
            name="description"
            required
            placeholder="Write a short event description..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-base-content/70 font-medium mb-1">
            Event Type
          </label>
          <select
            name="eventType"
            required
            defaultValue={eventType}
            className="w-full p-2 border bg-green-50 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select event type</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
            <option value="Renovation">Renovation</option>
            <option value="Awareness">Awareness</option>
          </select>
        </div>

        {/* Thumbnail Image URL */}
        <div>
          <label className="block text-base-content/70 font-medium mb-1">
            Thumbnail Image URL
          </label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={thumbnail}
            required
            placeholder="Enter thumbnail image link"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-base-content/70 font-medium mb-1">
            Event Location
          </label>
          <input
            type="text"
            name="location"
            defaultValue={location}
            required
            placeholder="Enter event location"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-base-content/70 font-medium mb-1">
            Event Date
          </label>
          <DatePicker
            name="date"
            required
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
            minDate={new Date()}
            placeholderText="Select a future date"
            dateFormat="dd/MM/yyyy"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
