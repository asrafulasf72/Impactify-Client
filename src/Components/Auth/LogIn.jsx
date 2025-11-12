import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router";

const LogIn = () => {
    const [showPass,setShowPass]=useState(false)
  return (
    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 mx-auto my-10">
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-center text-black">
          Log In Your Account
        </h2>
      </div>
      <form className="space-y-5">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="input input-bordered w-full bg-white/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Password</label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            className="input input-bordered w-full bg-white/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute cursor-pointer z-50 right-4 top-8"
          >
            {showPass ? <FiEye /> : <FiEyeOff />}
          </span>
          <p className="text-sm hover:underline text-blue-500 mt-1">
            <button
              className="text-blue-500 hover:underline"
              type="button"
            >
              Forgot Password?
            </button>
          </p>
        </div>

        <button
          type="submit"
          className="text-white font-semibold hover:scale-105 transition-transform duration-200 w-full text-center py-2 bg-[#134686] rounded-lg"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="h-px w-16 bg-gray-300"></div>
          <span className="text-sm text-black/70">or</span>
          <div className="h-px w-16 bg-gray-300"></div>
        </div>

        {/* Google Signin */}
        <button
          type="button"
          className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer border-2 border-gray-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm text-black/80 mt-3">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-pink-300 hover:text-blue-400 underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
