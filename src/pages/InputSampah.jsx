import PageHeader from "../components/PageHeader";
import { useState } from "react";

export default function InputSampah() {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#efefef] p-5">
      <PageHeader
        title="Input Sampah"
        breadcrumb="Input Sampah"
        children="Input Sampah"
        onClick={() => setShowContent((prev) => !prev)}
      >
        {showContent ? "Hide Input Sampah" : "Show Input Sampah"}
      </PageHeader>

      {showContent && (
        <div className="mt-6 flex flex-wrap gap-25 justify-center">

          {/* FORM CARD */}
          <div className="bg-[#e8ebe6] border border-gray-400 rounded-[20px] p-6 w-full lg:w-[420px]">

            <h2 className="text-[24px] font-medium underline mb-6 text-center">
              Input Sampah Baru
            </h2>

            {/* Jenis Sampah */}
            <div className="mb-5">
              <label className="block text-[20px] mb-2">
                Jenis Sampah
              </label>

              <select className="w-full h-[55px] rounded-[18px] border border-gray-400 px-4 text-[15px] outline-none bg-white">
                <option>Pilih Jenis Sampah</option>
                <option>Organik</option>
                <option>Anorganik</option>
                <option>Kertas</option>
                <option>Lainnya</option>
              </select>
            </div>

            {/* Berat */}
            <div className="mb-5">
              <label className="block text-[20px] mb-2">
                Berat (KG)
              </label>

              <input
                type="text"
                placeholder="Masukkan Berat"
                className="w-full h-[55px] rounded-[18px] border border-gray-400 px-4 text-[15px] outline-none bg-white"
              />
            </div>

            {/* Tanggal */}
            <div className="mb-5">
              <label className="block text-[20px] mb-2">
                Tanggal
              </label>

              <input
                type="date"
                className="w-full h-[55px] rounded-[15px] border border-gray-400 px-4 text-[16px] outline-none bg-white"
              />
            </div>

            {/* Catatan */}
            <div className="mb-5">
              <label className="block text-[20px] mb-2">
                Catatan (Opsional)
              </label>

              <textarea
                className="w-full h-[100px] rounded-[18px] border border-gray-400 p-4 text-[15px] outline-none bg-white resize-none"
                placeholder="Masukkan Catatan"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full h-[55px] bg-green-700 hover:bg-green-800 transition text-white rounded-xl text-[20px] font-regular">
              Simpan Data
            </button>
          </div>

          {/* GUIDE CARD */}
          <div className="bg-[#e8ebe6] border border-gray-400 rounded-[20px] p-6 w-full lg:w-[430px]">

            <h2 className="text-[24px] font-medium underline mb-6 text-center">
              Panduan Pemilahan
            </h2>

            <div className="flex flex-col gap-5">

              {/* ORGANIK */}
              <div className="bg-white border border-gray-300 rounded-[18px] p-4 flex items-center gap-4">
                <img
                  src="img/organic.png"
                  alt="organic"
                  className="w-[60px] h-[60px] object-contain"
                />

                <div>
                  <h3 className="text-[20px] font-semibold">
                    Sampah Organik
                  </h3>

                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    Sisa makanan, daun, kulit buah, sayuran, dll
                  </p>
                </div>
              </div>

              {/* ANORGANIK */}
              <div className="bg-white border border-gray-300 rounded-[18px] p-4 flex items-center gap-4">
                <img
                  src="img/anorganic.png"
                  alt="anorganic"
                  className="w-[60px] h-[60px] object-contain"
                />

                <div>
                  <h3 className="text-[20px] font-semibold">
                    Sampah Anorganik
                  </h3>

                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    Plastik, botol, kaleng, kaca, logam, dll
                  </p>
                </div>
              </div>

              {/* KERTAS */}
              <div className="bg-white border border-gray-300 rounded-[18px] p-4 flex items-center gap-4">
                <img
                  src="img/paper.png"
                  alt="paper"
                  className="w-[60px] h-[60px] object-contain"
                />

                <div>
                  <h3 className="text-[20px] font-semibold">
                    Sampah Kertas
                  </h3>

                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    Kertas, kardus, koran, buku, berkas, dll
                  </p>
                </div>
              </div>

              {/* OTHER */}
              <div className="bg-white border border-gray-300 rounded-[18px] p-4 flex items-center gap-4">
                <img
                  src="img/other.png"
                  alt="other"
                  className="w-[60px] h-[60px] object-contain"
                />

                <div>
                  <h3 className="text-[20px] font-semibold">
                    Lainnya
                  </h3>

                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    Sampah B3 atau lainnya (tidak termasuk kategori di atas)
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}