import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import Lg from "../../assets/logo1.png";

const Topbar = () => {
  const [isProfilePage, setIsProfilePage] = useState(false);
  const [isPersonalProfilePage, setIsPersonalProfilePage] = useState(false);
  const [isProductPage, setIsProductPage] = useState(false);
  const [isPromoPage, setIsPromoPage] = useState(false);
  const [isNotifPage, setIsNotifPage] = useState(false);
  const [isPromoDetailPage, setIsPromoDetailPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    // Kembali ke halaman sebelumnya
    navigate(-1);
  };

  useEffect(() => {
    // Update state based on the current location
    setIsProfilePage(location.pathname === "/profile");
    setIsPersonalProfilePage(location.pathname === "/personal-information");
    setIsProductPage(location.pathname === "/products");
    setIsPromoPage(location.pathname === "/promo");
    setIsNotifPage(location.pathname === "/notifications");
    setIsPromoDetailPage(location.pathname.includes("/promo-detail/"));

    // Add additional conditions for other pages if needed
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-800 md:p-5 p-2 flex justify-between items-center">
      <div>
        <button
          onClick={handleBack}
          className="flex items-center text-lg font-bold cursor-pointer"
        >
          <TfiArrowCircleLeft size={30} className="mr-2" />
        </button>
      </div>
      <div>
        {isProfilePage && <span className="text-lg font-bold">Profile</span>}
        {isPersonalProfilePage && (
          <span className="text-lg font-bold">Personal Information</span>
        )}
        {isProductPage && (
          <span className="text-lg font-bold">Special Offers</span>
        )}
        {isPromoPage && <span className="text-lg font-bold">Promo</span>}
        {isPromoDetailPage && (
          <span className="text-lg font-bold">Detail Promo</span>
        )}
        {isNotifPage && (
          <span className="text-lg font-bold">Notifications</span>
        )}
      </div>
      <div>
        <img src={Lg} alt="Logo" className="sm:w-[120px] md:w-[150px] h-10" />
      </div>
    </header>
  );
};

export default Topbar;
