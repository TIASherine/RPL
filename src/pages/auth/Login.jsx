
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { ImSpinner2 } from "react-icons/im";

import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";

import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.username,
        password: dataForm.password,
      })
      .then((response) => {
        // Jika status bukan 200, tampilkan pesan error
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* Kiri */}
      <div className="flex bg-gray-100">
        <img
          src="/img/sampah.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Kanan */}
      <div className="flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div id="sidebar-logo" className="w-full flex items-center justify-center  mb-6">

            <img src="/img/logo.png" className="w-35 mb-2" />

            <span className="text-base font-semibold text-gray-700 text-center leading-relaxed">
              Sistem Daur Ulang Sampah Perumahan
            </span>

          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Masuk Ke Akun Anda
          </h2>

          {errorInfo}

          {loadingInfo}

          <form onSubmit={handleSubmit}>

            {/* Username */}
            <div className="mb-5 relative">
              <GoPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />

              <input
                type="text"
                id="username"
                className="w-full pl-14 pr-4 py-4 bg-gray-50 border border-gray-400 rounded-2xl shadow-md placeholder-gray-500"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="mb-3 relative">
              <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />

              <input
                type="password"
                id="password"
                className="w-full pl-14 pr-4 py-4 bg-gray-50 border border-gray-400 rounded-2xl shadow-md placeholder-gray-500"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between mb-6">

              <label className="flex items-center gap-2 text-gray-600 text-sm">
                <input type="checkbox" />
                Ingat saya
              </label>

                <Link id="exit" to="*" className="text-green-600 font-semibold text-sm hover:underline">
                  Lupa Password?
                </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-2xl transition duration-300"
            >
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}