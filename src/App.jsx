import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductList from "./pages/product/ProductList";
import Detail from "./pages/product/Detail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./pages/profile/Profile";
import PersonalInformasi from "./pages/profile/PersonalInformasi";
import OtpVerification from "./components/auth/OtpVerification";
import PromoPages from "./pages/Promo/PromoPages";
import PromoDetail from "./components/Promo/PromoDetail";
import PromoDetailPages from "./pages/Promo/PromoDetailPages";
import NotificationsPages from "./pages/notifications/NotificationsPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/personal-information" element={<PersonalInformasi />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/promo" element={<PromoPages />} />
        <Route path="/promo-detail/:id" element={<PromoDetailPages />} />
        <Route path="/notifications" element={<NotificationsPages />} />
      </Routes>
    </Router>
  );
}

export default App;
