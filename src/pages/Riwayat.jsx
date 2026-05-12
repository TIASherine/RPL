import PageHeader from "../components/PageHeader";
import customers from "../data/customers.json";
import { useState } from "react";

export default function Riwayat() {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <PageHeader
        title="Riwayat"
        breadcrumb="Riwayat"
        children="Add Riwayat"
        onClick={() => setShowContent((prev) => !prev)}
      >
        {showContent ? "Hide Riwayat" : "Add Riwayat"}
      </PageHeader>

      <h1 className="m-4 text-green-600"> Ini adalah halaman Riwayat </h1>

      {showContent && (
        <div className="flex flex-wrap gap-4">
          {customers.map((customer) => (
            <div
              key={customer.customerId}
              className="w-full sm:w-1/3 lg:w-1/4 bg-white p-4 rounded-xl shadow"
            >
              <h2 className="font-semibold text-lg">{customer.customerName}</h2>
              <p className="text-sm text-gray-500">{customer.email}</p>
              <p className="text-sm">{customer.phone}</p>

              <span
                className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                  customer.loyalty === "Gold"
                    ? "bg-yellow-100 text-yellow-600"
                    : customer.loyalty === "Silver"
                      ? "bg-gray-200 text-gray-600"
                      : "bg-orange-100 text-orange-600"
                }`}
              >
                {customer.loyalty}
              </span>
            </div>
          ))}
        </div>
      )}

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl">
            <h2>Add Customer Form</h2>
            <button onClick={() => setOpen(false)} className="text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
