import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div id="header-container" className="flex justify-end items-center p-4">
      {/*Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        <div
          id="profile-container"
          className="flex items-center space-x-4 pl-4 border-gray-300"
        >
          <span id="profile-text">
            Hello, <b>Manda</b>
          </span>
          <img
            id="profile-avatar"
            src="/img/user.png"
            className="w-13 h-13 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
