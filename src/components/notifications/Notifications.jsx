import axios from "axios";
import React, { useEffect } from "react";
import Nt from "../../assets/notif.png";

const Notifications = () => {
  const API_URL = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${API_URL}/api/v1/customer-app/customer-notification?customer_account_id=26&page=1&per_page=10`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);
        // setPromo(response.data.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getProduct();
  }, []);

  const tempData = [
    {
      desc: "Segera mendapatkan harga khusus pembelian switzal baby shampoo",
    },
    {
      desc: "Khusus hari ini! Pembelian minimal Rp 50.0000 akan mendapatkan double points",
    },
    {
      desc: "Minggu ceria untuk si bunda, pembelian minimal Rp. 100.000 akan mendapatkan potongan spesial",
    },
    {
      desc: "Pembelian produk johnson & johnson akan mendapatkan promo spesial",
    },
    {
      desc: "Point anda akan hangus pada tanggal 29 February 2024 sebanyak 3000 points",
    },
    {
      desc: "Segera kumpulkan point sebanyak banyaknya untuk mendapatkan promo yang menarik",
    },
  ];
  return (
    <div className="mt-20">
      <div className="mt-20" style={{ maxWidth: "600px", margin: "0 auto" }}>
        {tempData.map((item, index) => (
          <div className=" bg-gray-100 m-2 p-2 rounded-md" key={index}>
            <div className="flex">
              <img src={Nt} alt="" className="w-[40px] h-[50px]" />
              <div className="ml-3 text-justify">
                <div className="">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
