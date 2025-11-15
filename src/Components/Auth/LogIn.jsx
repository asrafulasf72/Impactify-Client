import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const LogIn = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInUserWithGoogle ,signInUserWithEmail, setUser,setloading} = useContext(AuthContext);
      const location=useLocation();
     const navigate=useNavigate();
 

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUserWithEmail(email,password)
    .then((res)=>{
                  const user=res.user
                  setUser(user)
                  toast.success("Login In Success")
                  navigate(`${location.state? location.state: "/"}`)
              }).catch((error)=>{
                  toast.error(error.message)
                  setloading(false)
              })
    
  };

  const loginWithGoogle = () => {
    signInUserWithGoogle()
      .then((res) => {
        const user=res.user
        setUser(user)
        Swal.fire({
          title: "LogIn Successful!",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state? location.state: "/"}`)
      })
      .catch(() => {});
  };
  return (
    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 mx-auto my-10">
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-center text-base-content">
          Log In Your Account
        </h2>
      </div>
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            className="input input-bordered w-full bg-white/20 text-base-content placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Password</label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            required
            placeholder="••••••••"
            className="input input-bordered w-full bg-white/20 text-base-content placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute cursor-pointer z-50 right-4 top-8"
          >
            {showPass ? <FiEye /> : <FiEyeOff />}
          </span>
          <p className="text-sm hover:underline text-blue-500 mt-1">
            <button className="text-blue-500 hover:underline" type="button">
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
          <div className="h-px w-16 bg-base-300"></div>
          <span className="text-sm text-base-content">or</span>
          <div className="h-px w-16 bg-base-300"></div>
        </div>

        {/* Google Signin */}
        <button
          onClick={loginWithGoogle}
          type="button"
          className="flex items-center justify-center gap-3 bg-base-200 text-base-content px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer border-2 border-gray-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm text-base-content mt-3">
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
