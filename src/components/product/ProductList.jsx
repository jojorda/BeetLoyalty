import React from "react";
import ft from "../../assets/1.jpg";
import ft2 from "../../assets/2.jpg";
import ft3 from "../../assets/3.jpg";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="flex flex-wrap p-2 mt-16 md:pl-10 md:pr-10 md:ml-16">
      <Link
        to={"/product/detail"}
        className="bg-gray-200 w-[105px]  md:w-1/6 m-2 rounded-md"
      >
        <div>
          <img src={ft} alt="" className="rounded-t-md w-full  object-cover " />
        </div>
        <div className="text-xs md:text-lg p-1 font-semibold text-gray-800">
          Nasi Goreng
        </div>
      </Link>
      <div className="bg-gray-200 w-[105px]  md:w-1/6 m-2 rounded-md">
        <div>
          <img src={ft2} alt="" className="rounded-t-md w-full object-cover " />
        </div>
        <div className="text-xs md:text-lg p-1 font-semibold text-gray-800">Nasi Uduk</div>
      </div>
      <div className="bg-gray-200 w-[105px]  md:w-1/6 m-2 rounded-md">
        <div>
          <img src={ft3} alt="" className="rounded-t-md w-full object-cover " />
        </div>
        <div className="text-xs md:text-lg p-1 font-semibold text-gray-800">
          Nasi Kuning
        </div>
      </div>
      <div className="bg-gray-200 w-[105px]  md:w-1/6 m-2 rounded-md">
        <div>
          <img src={ft} alt="" className="rounded-t-md w-full object-cover " />
        </div>
        <div className="text-xs md:text-lg p-1 font-semibold text-gray-800">
          Ayam Goreng
        </div>
      </div>
      <div className="bg-gray-200 w-[105px]  md:w-1/6 m-2 rounded-md">
        <div>
          <img src={ft2} alt="" className="rounded-t-md w-full object-cover " />
        </div>
        <div className="text-xs md:text-lg p-1 font-semibold text-gray-800">
          Ayam Bakar
        </div>
      </div>
      <div className="bg-gray-200 w-[105px]  md:w-1/6 m-2 rounded-md">
        <div>
          <img src={ft3} alt="" className="rounded-t-md w-full object-cover " />
        </div>
        <div className="text-xs md:text-lg p-1 font-semibold text-gray-800">
          Ayam Geprek
        </div>
      </div>

      {/* Menambahkan produk selanjutnya sesuai kebutuhan */}
    </div>
  );
};

export default ProductList;
