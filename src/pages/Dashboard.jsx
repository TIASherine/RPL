import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaHome,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard"
        children="Cek Pesanan"
      />

      <div
        id="dashboard-grid"
        className="flex flex-auto gap-6 text-lg font-bold w-45"
      >
        <div
          id="dashboard-orders"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 w-90"
        >
          <div
            id="orders-icon"
            className="bg-hijau rounded-full p-4 text-2xl text-white"
          >
            <FaShoppingCart />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span
              id="orders-count"
              className="flex items-center space-x-5 text-2xl font-bold"
            >
              75
            </span>
            <span id="orders-text" className="text-gray-400">
              Total Orders
            </span>
          </div>
        </div>

        <div
          id="dashboard-delivered"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 w-90"
        >
          <div
            id="delivered-icon"
            className="bg-biru rounded-full p-4 text-2xl text-white"
          >
            <FaTruck />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span
              id="delivered-count"
              className="flex items-center space-x-5 text-2xl font-bold"
            >
              175
            </span>
            <span id="delivered-text" className="text-gray-400">
              Total Delivered
            </span>
          </div>
        </div>

        <div
          id="dashboard-canceled"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 w-90"
        >
          <div
            id="canceled-icon"
            className="bg-merah rounded-full p-4 text-2xl text-white"
          >
            <FaBan />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span
              id="canceled-count"
              className="flex items-center space-x-5 text-2xl font-bold"
            >
              40
            </span>
            <span id="canceled-text" className="text-gray-400">
              Total Canceled
            </span>
          </div>
        </div>

        <div
          id="dashboard-revenue"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 w-90"
        >
          <div
            id="revenue-icon"
            className="bg-kuning rounded-full p-4 text-2xl text-white"
          >
            <FaDollarSign />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span
              id="revenue-amount"
              className="flex items-center space-x-5 text-2xl font-bold"
            >
              Rp 10.287.000
            </span>
            <span id="revenue-text" className="text-gray-400">
              Total Revenue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
