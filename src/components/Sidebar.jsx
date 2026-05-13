import { FaHome, FaTrash, FaHistory, FaMedal  } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-white font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-white hover:font-extrabold"
        }`;

  return (
    <div
      id="sidebar"
      className="flex h-screen w-90 flex-col bg--color-sidebar p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins font-extrabold text-[48px] text-gray-900"
        >
          <img src="/img/logo.png" className="w-50" />
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <FaHome className="mr-4 text-xl" />
              <span className="text-gray-600 flex items-center"> Beranda </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-2" to="/inputSampah" className={menuClass}>
              <FaTrash className="mr-4 text-xl" />
              <span className="text-gray-600 flex items-center">
                {" "}
                Input Sampah{" "}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-3" to="/riwayat" className={menuClass}>
              <FaHistory className="mr-4 text-xl" />
              <span className="text-gray-600 flex items-center"> Riwayat </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-4" to="/poin" className={menuClass}>
              <FaMedal className="mr-4 text-xl" />
              <span className="text-gray-600 flex items-center">
                {" "}
                Poin Saya{" "}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-5" to="/leaderboard" className={menuClass}>
              <MdAccessTime className="mr-4 text-xl" />
              <span className="text-gray-600 flex items-center">
                {" "}
                Leaderboard{" "}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-6" to="/reward" className={menuClass}>
              <MdShoppingCart className="mr-4 text-xl" />
              <span className="text-gray-600 flex items-center"> Reward </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-6" to="/edukasi" className={menuClass}>
              <MdShoppingCart className="mr-4 text-xl" />
              <span className="text-gray-600 flex items-center"> Edukasi </span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="/img/chef.jpg"
            className="w-20 rounded-full"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
