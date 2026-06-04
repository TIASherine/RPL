import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function PageHeader({ breadcrumb, onClick }) {
  return (
    <div
      id="header-container"
      className="flex items-center justify-between h-16 px-8 border-b border-gray-300 bg-gray-50"
    >
      <h1 className="text-2xl font-bold">{breadcrumb}</h1>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-medium">Hello, Manda</p>
          <p className="text-sm text-gray-500">Warga</p>
        </div>

        <img
          src="/img/user.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
