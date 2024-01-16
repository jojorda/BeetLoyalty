import React from "react";
import PromoDetail from "../../components/Promo/PromoDetail";
import Navbar from "../../components/navbar/Navbar";
import Topbar from "../../components/navbar/Topbar";

const PromoDetailPages = () => {
  return (
    <div>
      <Topbar />
      <div>
        <PromoDetail />
      </div>
      <Navbar />
    </div>
  );
};

export default PromoDetailPages;
