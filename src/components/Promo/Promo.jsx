import axios from "axios";
import React, { useEffect, useState } from "react";
import Lg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import PromoDetail from "./PromoDetail";

const Promo = () => {
  const [promo, setPromo] = useState([]);
  const API_URL = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${API_URL}/api/v1/customer-app/promo`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data.data);
        setPromo(response.data.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getProduct();
  }, []);


  const handleClick = (promoId) => {
    // Temukan data promo yang sesuai dengan promoId
    const selectedPromo = promo.find((p) => p.id === promoId);

    // Simpan data promo yang dipilih di localStorage
    localStorage.setItem("selectedPromo", JSON.stringify(selectedPromo));
  };

  return (
    <div className="md:m-10 m-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {promo.map(
          (p) =>
            // Menampilkan data hanya jika status "active"
            p.Automatic_Promo?.status === "active" && (
              <Link
                to={`/promo-detail/${p.id}`}
                key={p.id}
                onClick={() => handleClick(p.id)}
              >
                <div className="bg-gray-300 shadow p-3 rounded overflow-hidden group hover:shadow-xl">
                  <div className="flex">
                    <div className="mr-2 flex items-center">
                      {p.Automatic_Promo?.Automatic_Promo_XY?.Product_X[0]
                        ?.Product?.image ? (
                        <img
                          src={`${API_URL}${p.Automatic_Promo?.Automatic_Promo_XY?.Product_X[0]?.Product?.image}`}
                          alt="Image"
                          className="w-[130px] h-full object-cover max-w-[300px] min-w-[100px] items-center rounded-md h-auto border border-red-500"
                          onError={(e) =>
                            console.error("Image failed to load:", e)
                          }
                          onLoad={() =>
                            console.log(
                              `${API_URL}${p.Automatic_Promo?.Automatic_Promo_XY?.Product_X[0]?.Product?.image}`
                            )
                          }
                        />
                      ) : (
                        <div>
                          <img
                            src={Lg}
                            alt=""
                            className="w-[130px] object-cover h-[130px] "
                          />
                        </div>
                      )}
                    </div>

                    <div className="">
                      <div className="font-bold text-gray-800">
                        {p.Automatic_Promo?.name}
                      </div>
                      <div className="text-gray-600 bg-blue-500 rounded-md w-[140px] p-1 text-gray-50">
                        {p.Promo_Category?.name}
                      </div>
                      <div className="text-gray-600">
                        {p.Automatic_Promo?.promo_days} days
                      </div>

                      <div className="text-gray-600">
                        {p.Automatic_Promo?.promo_hour_start} -{" "}
                        {p.Automatic_Promo?.promo_hour_end}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Promo;
