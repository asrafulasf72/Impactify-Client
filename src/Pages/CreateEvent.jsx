import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Components/Context/AuthContext";

const CreateEvent = () => {
    const [eventDate, setEventDate] = useState(null);
    const {user}=useContext(AuthContext)

      const handleFormSubmit=(e)=>{
        e.preventDefault()
           const formData={
              title: e.target.title.value,
              description: e.target.description.value,
              eventType: e.target.eventType.value,
              thumbnail: e.target.thumbnail.value,
              location: e.target.location.value,
              event_date: e.target.date.value,
              created_by: user.email

           }
           console.log(formData)
           e.target.reset()

      }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
        Create a New Social Event
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Fill out the form below to create your upcoming social development
        event.
      </p>

      <form onSubmit={handleFormSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter event title"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            rows="3"
            name="description"
            placeholder="Write a short event description..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Type
          </label>
          <select name="eventType" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
            <option value="">Select event type</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
          </select>
        </div>

        {/* Thumbnail Image URL */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Thumbnail Image URL
          </label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail image link"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter event location"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Date
          </label>
          <DatePicker
            name="date"
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
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
