import PageHeader from "../components/PageHeader";
import orders from "../data/orders.json";
import { useState } from "react";

export default function Edukasi() {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <PageHeader
        title="Edukasi"
        breadcrumb="Edukasi"
        children="Add Edukasi"
        onClick={() => setShowContent((prev) => !prev)}
      >
        {showContent ? "Hide Edukasi" : "Add Edukasi"}
      </PageHeader>

      <h1 className="m-4 text-green-600"> Ini adalah halaman Edukasi </h1>

      {showContent && (
        <div className="flex flex-wrap gap-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="w-full sm:w-1/3 lg:w-1/4 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="font-bold text-lg">{order.orderId}</h2>

              <p className="text-sm text-gray-600">{order.customerName}</p>

              <p className="text-xs text-gray-400 mt-1">{order.orderDate}</p>

              <p className="mt-2 font-semibold text-gray-800">
                Rp {order.totalPrice.toLocaleString("id-ID")}
              </p>

              <span
                className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                }`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl">
            <h2>Add Order Form</h2>
            <button onClick={() => setOpen(false)} className="text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
