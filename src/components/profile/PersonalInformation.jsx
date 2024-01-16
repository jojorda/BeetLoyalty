import React from "react";
import Ft1 from "../../assets/1.jpg";
import {
  BsCakeFill,
  BsFillEnvelopeAtFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const PersonalInformation = () => {
  return (
    <div className="mt-[130px] m-5">
        {/* information */}
      <div className="max-w-md mx-auto p-4 border rounded-lg bg-[#6E205E] ">
        <div className="flex justify-center -mt-[70px]">
          <img
            src={Ft1}
            className="w-[100px] rounded-full border-4 border-white"
          />
        </div>

        {/* information personal  */}
        <div className="mt-3">
          <div className="flex text-gray-100 ">
            <span className="mt-1">
              <BsFillTelephoneFill size={20} />
            </span>
            <h1 className="ml-3">021345678901</h1>
          </div>
          <div className="flex text-gray-100 mt-4">
            <span className="mt-1">
              <BsPersonFill size={20} />
            </span>
            <h1 className="ml-3">Personal Test1</h1>
          </div>
          <div className="flex text-gray-100 mt-4">
            <span className="mt-1">
              <BsFillEnvelopeAtFill size={20} />
            </span>
            <h1 className="ml-3">Personaltest1@gmail.com</h1>
          </div>
          <div className="flex text-gray-100 mt-4">
            <span className="mt-1">
              <BsCakeFill size={20} />
            </span>
            <h1 className="ml-3">22 Des 2023</h1>
          </div>
          <div className="flex text-gray-100 mt-4">
            <span className="mt-1">
              <BsFillGeoAltFill size={20} />
            </span>
            <h1 className="ml-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#6E205E] w-full md:ml-[438px] md:mr-[438px] mt-3 text-center p-2 text-gray-100 rounded-full font-semibold hover:hover:text-[#da36b9]">
          <Link >Edit Personal Info</Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
