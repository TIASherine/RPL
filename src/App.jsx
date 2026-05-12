import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/InputSampah"));
const Customers = React.lazy(() => import("./pages/Riwayat"));
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/inputSampah" element={<InputSampah />} />
          <Route path="/riwayat" element={<Riwayat />} />
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
