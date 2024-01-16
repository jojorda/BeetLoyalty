import React from "react";
import { Link } from "react-router-dom";
import ft from "../../assets/1.jpg";

const Detail = () => {
  return (
    <div className="md:flex md:flex-col md:items-center md:p-4">
      <div className="md:bg-gray-200 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:p-4 rounded-md mt-10">
        <img src={ft} alt="" className="rounded-t-md w-full  h-[350px]" />
        <div className="text-sm p-4">
          <h2 className="text-lg font-bold mb-2">Nasi Goreng</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            hendrerit, eros in faucibus sodales, libero felis pharetra libero.
          </p>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-lg font-bold">Rp 25,000</span>
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Tambah ke Keranjang
          </button> */}
        </div>
      </div>

      {/* <Link to="/" className="mt-4 text-blue-500 underline">
        Kembali ke Produk
      </Link> */}
    </div>
  );
};

export default Detail;
