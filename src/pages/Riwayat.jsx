import PageHeader from "../components/PageHeader";
import { useState } from "react";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function Riwayat() {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const dataRiwayat = [
    {
      tanggal: "07/05/2026",
      jenis: "Organik",
      berat: "5kg",
      point: "5",
      status: "Diterima",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <PageHeader
        breadcrumb="Riwayat"
        onClick={() => setShowContent((prev) => !prev)}
      >
        {showContent ? "Hide Riwayat" : "Add Riwayat"}
      </PageHeader>

      {/* CONTENT */}
      <div className="p-6">
        {showContent && (
          <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
            
            {/* TITLE */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">
              Riwayat Input Sampah
            </h1>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                
                <thead className="bg-[#f3f3f3]">
                  <tr className="border-b border-gray-300">
                    <th className="py-4 px-4 text-lg font-medium border-r">
                      Tanggal
                    </th>

                    <th className="py-4 px-4 text-lg font-medium border-r">
                      Jenis Sampah
                    </th>

                    <th className="py-4 px-4 text-lg font-medium border-r">
                      Berat(kg)
                    </th>

                    <th className="py-4 px-4 text-lg font-medium border-r">
                      Point
                    </th>

                    <th className="py-4 px-4 text-lg font-medium">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {dataRiwayat.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 text-center"
                    >
                      <td className="py-5 border-r">
                        {item.tanggal}
                      </td>

                      <td className="py-5 border-r">
                        {item.jenis}
                      </td>

                      <td className="py-5 border-r">
                        {item.berat}
                      </td>

                      <td className="py-5 border-r">
                        {item.point}
                      </td>

                      <td className="py-5 text-green-700 font-bold">
                        {item.status}
                      </td>
                    </tr>
                  ))}

                  {/* EMPTY ROW */}
                  {[1, 2, 3, 4].map((row) => (
                    <tr
                      key={row}
                      className="border-b border-gray-300 h-16"
                    >
                      <td className="border-r"></td>
                      <td className="border-r"></td>
                      <td className="border-r"></td>
                      <td className="border-r"></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-8">
              
              <p className="text-gray-700 text-lg">
                Menampilkan 5 dari 12 data
              </p>

              <div className="flex items-center gap-4">
                
                <FiChevronLeft className="cursor-pointer text-lg" />

                <button className="font-semibold text-black">
                  1
                </button>

                <button className="text-gray-500">
                  2
                </button>

                <button className="text-gray-500">
                  3
                </button>

                <FiChevronRight className="cursor-pointer text-lg" />
              </div>
            </div>
          </div>
        )}

        {/* MODAL */}
        {open && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-[400px]">
              
              <h2 className="text-2xl font-semibold mb-4">
                Add Customer Form
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}