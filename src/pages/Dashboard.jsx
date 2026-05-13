import { FaStar, FaTrash, FaHistory } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f3f3f3] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-black">Dashboard Saya</h1>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 flex justify-between items-start shadow-sm">
          <div>
            <p className="font-semibold text-sm text-black">Total Point</p>

            <h1 className="text-5xl font-bold mt-4 text-black">1.250</h1>

            <p className="text-gray-500 mt-2">Point</p>
          </div>

          <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center text-2xl text-white">
            <FaStar />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 flex justify-between items-start shadow-sm">
          <div>
            <p className="font-semibold text-sm text-black">Sampah Terinput</p>

            <h1 className="text-5xl font-bold mt-4 text-black">25,4 Kg</h1>

            <p className="text-gray-500 mt-2">Total Berat</p>
          </div>

          <div className="w-14 h-14 rounded-full bg-green-300 flex items-center justify-center text-2xl text-white">
            <FaTrash />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 flex justify-between items-start shadow-sm">
          <div>
            <p className="font-semibold text-sm text-black">Riwayat Input</p>

            <h1 className="text-5xl font-bold mt-4 text-black">12</h1>

            <p className="text-gray-500 mt-2">Pengumpulan</p>
          </div>

          <div className="w-14 h-14 rounded-full bg-blue-300 flex items-center justify-center text-2xl text-white">
            <FaHistory />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-[#dfead8] border border-gray-200 rounded-3xl p-7 mt-7">
        <h2 className="text-2xl font-semibold leading-relaxed text-black">
          Yuk, terus pilah sampah dan
          <br />
          kumpulkan poin!
        </h2>
      </div>

      {/* Bottom Content */}
      <div className="grid grid-cols-2 gap-5 mt-7">
        {/* Bar Chart */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6">
          <h2 className="font-semibold text-xl mb-6 text-black">
            Ringkasan Aktivitas
          </h2>

          <div className="flex items-end gap-4 h-[220px]">
            <div className="w-9 bg-[#6b8f5d] h-[120px] rounded-t"></div>

            <div className="w-9 bg-[#6b8f5d] h-[70px] rounded-t"></div>

            <div className="w-9 bg-[#6b8f5d] h-[180px] rounded-t"></div>

            <div className="w-9 bg-[#6b8f5d] h-[100px] rounded-t"></div>

            <div className="w-9 bg-[#6b8f5d] h-[160px] rounded-t"></div>

            <div className="w-9 bg-[#6b8f5d] h-[120px] rounded-t"></div>

            <div className="w-9 bg-[#6b8f5d] h-[170px] rounded-t"></div>

            <div className="w-9 bg-[#6b8f5d] h-[180px] rounded-t"></div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6">
          <h2 className="font-semibold text-xl mb-6 text-black">
            Kategori Sampah Terbanyak
          </h2>

          <div className="flex items-center justify-between mt-8">
            {/* Circle */}
            <div className="w-52 h-52 rounded-full bg-[conic-gradient(#a8c8e8_0_50%,#cfe7df_50%_80%,#4d774e_80%_100%)]"></div>

            {/* Legend */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#4d774e]"></div>

                <p className="text-lg text-black">Kaleng 20%</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a8c8e8]"></div>

                <p className="text-lg text-black">Botol 50%</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#cfe7df]"></div>

                <p className="text-lg text-black">Kaca 30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
