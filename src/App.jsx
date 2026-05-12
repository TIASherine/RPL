import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Beranda = React.lazy(() => import("./pages/Dashboard"));
const InputSampah = React.lazy(() => import("./pages/InputSampah"));
const Riwayat = React.lazy(() => import("./pages/Riwayat"));
const Poin = React.lazy(() => import("./pages/Poin"));
const Leaderboard = React.lazy(() => import("./pages/Leaderboard"));
const Reward = React.lazy(() => import("./pages/Reward"));
const Edukasi = React.lazy(() => import("./pages/Edukasi"));
import NotFound from "./pages/NotFound";

const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";
import "./assets/tailwind.css";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/inputSampah" element={<InputSampah />} />
          <Route path="/Riwayat" element={<Riwayat />} />
          <Route path="/Poin" element={<Poin />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Reward" element={<Reward />} />
          <Route path="/Edukasi" element={<Edukasi />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
