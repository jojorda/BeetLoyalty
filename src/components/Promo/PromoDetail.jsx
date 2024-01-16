import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ft from "../../assets/1.jpg";

const PromoDetail = () => {
  const [promoDetail, setPromoDetail] = useState([]);
  const API_URL = import.meta.env.VITE_API_KEY;
  console.log("dadas", promoDetail);
  useEffect(() => {
    // Set data detail promo
    const selectedPromo =
      JSON.parse(localStorage.getItem("selectedPromo")) || {};
    setPromoDetail([selectedPromo]); // Mengubah selectedPromo menjadi array
  }, []);

  return (
    <div className="md:flex md:flex-col md:items-center md:p-4 pb-20">
      {promoDetail.map((item) => (
        <div
          key={item.id}
          className="md:bg-gray-200 w-full md:w-1/3 md:p-4 rounded-md mt-10"
        >
          {item.Automatic_Promo?.Automatic_Promo_XY?.Product_X[0]?.Product
            ?.image ? (
            <img
              src={`${API_URL}${item.Automatic_Promo?.Automatic_Promo_XY?.Product_X[0]?.Product?.image}`}
              alt=""
              className="rounded-t-md w-full h-[350px]"
            />
          ) : (
            <div className="rounded-t-md w-full h-[350px] bg-gray-300 flex items-center justify-center">
              No Image
            </div>
          )}
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">
              {item.Automatic_Promo?.name}
            </h2>
            <h2 className="mb-2 text-justify">
              {item.Automatic_Promo?.Automatic_Promo_XY?.Product_X[0]?.Product
                ?.description
                ? item.Automatic_Promo?.Automatic_Promo_XY?.Product_X[0]
                    ?.Product?.description
                : "No Description"}
            </h2>

            <div className="mb-10 mt-10">
              <div className="font-bold text-lg">Free</div>
              <div className="flex">
                {" "}
                <img
                  src={`${API_URL}${item.Automatic_Promo?.Automatic_Promo_XY?.Product_Y[0]?.Product?.image}`}
                  alt=""
                  className="rounded-md w-[100px]  h-auto object-cover shadow-lg"
                />
                <div className="ml-3 font-semibold">
                  {
                    item.Automatic_Promo?.Automatic_Promo_XY?.Product_Y[0]
                      ?.Product?.name
                  }
                </div>
              </div>
            </div>
            <div className=" text-md">
              <div className="font-bold ">Time Promotion</div>
              <div className="flex font-semibold">
                {" "}
                <div>{item.Automatic_Promo?.promo_days} days</div>
                <div className="ml-2 mb-10">
                  ( {item.Automatic_Promo?.promo_hour_start} -{" "}
                  {item.Automatic_Promo?.promo_hour_end} )
                </div>
              </div>
            </div>

            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              hendrerit, eros in faucibus sodales, libero felis pharetra libero.
            </p> */}
          </div>
          {/* <div className="flex justify-between items-center p-4">
            <span className="text-lg font-bold">Rp 25,000</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
 Tambah ke Keranjang
</button>
          </div> */}
        </div>
      ))}

      {/* <Link to="/" className="mt-4 text-blue-500 underline">
    Kembali ke Produk
  </Link> */}
    </div>
  );
};

export default PromoDetail;
