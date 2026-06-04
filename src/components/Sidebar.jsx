import {
  FaHome,
  FaTrash,
  FaHistory,
  FaMedal,
  FaGift,
  FaGraduationCap,
} from "react-icons/fa";
import { FaRankingStar, FaGear } from "react-icons/fa6";
import { IoExitSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-[var(--color-hijau)] bg-white text-black font-extrabold"
            : "text-white hover:text-[var(--color-hijau)] hover:bg-white hover:font-extrabold"
        }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-72 flex-col overflow-y-auto bg-(--color-sidebar) p-10 shadow-lg self-stretch"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex items-center gap-3">
        <img src="/img/logo.png" className="w-12 h-12" />

        <p className="font-poppins font-extrabold text-3xl text-gray-900">
          Trashure
        </p>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <FaHome className="mr-4 text-xl" />
              <span className="flex items-center"> Beranda </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-2" to="/inputSampah" className={menuClass}>
              <FaTrash className="mr-4 text-xl" />
              <span className="flex items-center"> Input Sampah </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-3" to="/riwayat" className={menuClass}>
              <FaHistory className="mr-4 text-xl" />
              <span className="flex items-center"> Riwayat </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-5" to="/leaderboard" className={menuClass}>
              <FaRankingStar className="mr-4 text-xl" />
              <span className="flex items-center"> Leaderboard </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-6" to="/reward" className={menuClass}>
              <FaGift className="mr-4 text-xl" />
              <span className="flex items-center"> Reward </span>
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-6" to="/edukasi" className={menuClass}>
              <FaGraduationCap className="mr-4 text-xl" />
              <span className="flex items-center"> Edukasi </span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto p-4">
        <p className="text-xs uppercase tracking-wider text-gray-300 mb-2">
          Informasi Kontak
        </p>

        <div className="flex items-center gap-3 bg-white/10 rounded-xl p-2">
          <img
            src="/img/whatsapp.png"
            alt="Contact"
            className="w-8 h-8 rounded-full"
          />

          <div>
            <p className="text-gray-300 text-sm">+081112345611</p>
          </div>
        </div>

        <br />

        <span id="footer-brand" className="font-bold text-gray-400">
          Trashure
        </span>
        <p id="footer-copyright" className="font-light text-sm text-gray-400">
          &copy; 2026 All Right Reserved
        </p>
      </div>
    </div>
  );
}
