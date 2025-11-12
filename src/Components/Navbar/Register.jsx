import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router";

const Register = () => {
    const [showPass,setShowPass]=useState(false)
  return (
    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 mx-auto my-10">
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-center text-black">
          Sign Up Your Account
        </h2>
      </div>
      <form  className="space-y-5">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Jhon"
            className="input input-bordered w-full bg-white/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Photo</label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL here"
            className="input input-bordered w-full bg-white/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="input input-bordered w-full bg-white/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Password</label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            className="input input-bordered w-full bg-white/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute cursor-pointer z-50 right-4 top-8"
          >
            {showPass ? <FiEye /> : <FiEyeOff />}
          </span>

          {/* {passError && (
            <p className="text-red-500 text-sm mt-1">{passError}</p>
          )} */}
        </div>

        <button
          type="submit"
          className="text-white font-semibold hover:scale-105 transition-transform duration-200 w-full text-center py-2 bg-[#134686] rounded-lg"
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="h-px w-16 bg-gray-300"></div>
          <span className="text-sm text-black/70">or</span>
          <div className="h-px w-16 bg-gray-300"></div>
        </div>
        <p className="text-center text-sm text-black/80 mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-300 hover:text-blue-400 underline"
          >
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
