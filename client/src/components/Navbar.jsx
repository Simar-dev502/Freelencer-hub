import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaBriefcase, FaUserCircle } from "react-icons/fa";

function Navbar() {

const navigate = useNavigate();

const user = JSON.parse(
localStorage.getItem("user")
);

const logoutHandler = () => {
localStorage.removeItem("user");
localStorage.removeItem("token");
navigate("/login");
};

return ( <nav className="bg-white shadow-md sticky top-0 z-50">

```
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}

    <Link
      to="/"
      className="flex items-center gap-2"
    >
      <FaBriefcase
        className="text-blue-600 text-2xl"
      />

      <span
        className="
        text-2xl
        font-bold
        text-gray-800
        "
      >
        FreelanceHub
      </span>
    </Link>

    {/* Menu */}

    <div
      className="
      hidden
      md:flex
      items-center
      gap-8
      "
    >

      <Link
        to="/"
        className="
        text-gray-700
        hover:text-blue-600
        "
      >
        Home
      </Link>

      <Link
        to="/jobs"
        className="
        text-gray-700
        hover:text-blue-600
        "
      >
        Jobs
      </Link>

      <Link
        to="/messages"
        className="
        text-gray-700
        hover:text-blue-600
        "
      >
        Messages
      </Link>

      {user?.role === "client" && (
        <Link
          to="/post-job"
          className="
          text-gray-700
          hover:text-blue-600
          "
        >
          Post Job
        </Link>
      )}

      <Link
        to="/dashboard"
        className="
        text-gray-700
        hover:text-blue-600
        "
      >
        Dashboard
      </Link>

    </div>

    {/* Right Side */}

    <div
      className="
      flex
      items-center
      gap-5
      "
    >

      {/* Notifications */}

      <div className="relative cursor-pointer">

        <FaBell
          className="
          text-xl
          text-gray-700
          "
        />

        <span
          className="
          absolute
          -top-2
          -right-2
          bg-red-500
          text-white
          rounded-full
          text-xs
          w-5
          h-5
          flex
          items-center
          justify-center
          "
        >
          3
        </span>

      </div>

      {/* Profile */}

      <Link
        to="/profile"
        className="
        text-gray-700
        hover:text-blue-600
        "
      >
        <FaUserCircle
          className="text-3xl"
        />
      </Link>
     <Link
to="/saved-jobs"
>
Saved Jobs
</Link> 

      {/* Logout */}

      {user && (
        <button
          onClick={logoutHandler}
          className="
          bg-red-500
          text-white
          px-4
          py-2
          rounded-lg
          hover:bg-red-600
          transition
          "
        >
          Logout
        </button>
      )}

    </div>

  </div>

</nav>


);
}

export default Navbar;
