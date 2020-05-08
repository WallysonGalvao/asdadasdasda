import React from "react";
import { Link, navigate } from "gatsby";
import { useAuth } from "../../lib/AuthContext";
import "./styles.css";

const DropdownMenu = () => {
  const auth = useAuth();

  const signOut = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="dropdown inline-block relative">
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span>My Account</span>
      </button>
      <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
        <li>
          <Link
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-32"
            to="/app"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-32"
            to="/app/update-password"
          >
            Reset Password
          </Link>
        </li>

        <li>
          <button
            onClick={signOut}
            className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-32 text-left"
            href="/"
          >
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
