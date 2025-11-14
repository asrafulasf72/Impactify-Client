import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import "./nav.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const { user, SignOut, setUser, } = useContext(AuthContext);

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        setUser(null);
        toast.success("Log Out Succes!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Upcoming-Events">Upcoming Events</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#1f2937] text-white shadow-sm">
      <div className="flex w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu text-black text-[1rem] font-semibold menu-sm dropdown-content bg-green-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {navlink}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold text-green-500">
            Impactify
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[1rem] font-semibold">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center z-50">
          { user &&  <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img id='userDisplayName'
                    alt={user.displayName}
                    src={user?.photoURL}
                  />
                  <ReactTooltip anchorId='userDisplayName' place='bottom' content={`${user.displayName}`}></ReactTooltip>
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-green-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to='/create-event' className="justify-between text-black text-[.8rem] font-semibold">
                    Create Event
                  </Link>
                </li>
                <li>
                  <Link to="/manage-events" className="text-black text-[.8rem] font-semibold">Manage Events</Link>
                </li>
                <li>
                   <Link to='/join-event' className="text-black text-[.8rem] font-semibold">Join Events</Link>
                </li>
                <li>
                  {user ? (
                    <a className="text-black text-[.8rem] font-semibold" onClick={handleSignOut}>
                      Logout
                    </a>
                  ) : (
                    <Link className="text-black text-[.8rem] font-semibold" to="/login">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            }
            <div>
              {user ? (
                " "
              ) : (
                <button className="bg-green-500 px-4 py-1 rounded-[.5rem] text-white text-[1.2rem] font-medium">
                  <Link to="/login">LogIn</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
