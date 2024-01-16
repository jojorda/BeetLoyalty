import React, { useState } from "react";
import ft1 from "../../assets/1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Profile = () => {
  const [spendingPower, setSpendingPower] = useState(500);

  const handleSpendingPowerChange = (e) => {
    setSpendingPower(parseInt(e.target.value, 10));
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="mt-20  mb-20 md:pl-52 md:pr-52">
      <div className="ml-3">
        <span className="text-lg text-gray-900 font-bold">My Membership</span>
      </div>

      {/* membership */}
      {/* <div className="bg-[#6E205E] m-3 rounded-md">
        <div className="tex-center text-gray-100 flex items-center justify-center pt-3">
          {" "}
          <div>Test Profile</div>
        </div>
        <div className=" text-gray-100 flex items-center justify-center">
          {" "}
          <div className="font-bold mb-2">Regular</div>
        </div>
        <div className="ml-3 mr-3">
          <label className="text-gray-100">Spending Power</label>{" "}
          <span className="bg-white rounded-full pl-2 pr-2 font-semibold">
            0 / 5
          </span>
          <input
            type="range"
            min="0"
            max="1000"
            value={spendingPower}
            onChange={handleSpendingPowerChange}
            className="w-full mt-2 appearance-none bg-blue-200 h-2 rounded-full"
            style={{ outline: "none", transition: "all 0.2s" }}
          />
        </div>

        <div className="text-gray-100 text-center pb-4">
          Spend <b>1000</b> more to reach <b>Gold</b>
        </div>
      </div> */}

      {/* MemberShip Rank */}
      <div className="bg-[#6E205E] m-3 rounded-md">
        <span className="flex justify-center pt-2 items-center text-gray-100 font-bold">
          Membership Rank
        </span>
        <div className="m-3 pb-4 flex justify-center">
          <div className="rounded-full ">
            {" "}
            <img src={ft1} alt="" className="w-14 rounded-full mb-3" />
            <span className="text-sm text-gray-100 flex justify-center ">
              Reguler
            </span>
          </div>
          <div className="rounded-full ml-5">
            {" "}
            <img
              src={ft1}
              alt=""
              className="w-14 rounded-full mb-3 opacity-50"
            />
            <span className="text-sm text-gray-100 flex justify-center ">
              Gold
            </span>
          </div>
          <div className="rounded-full ml-5 ">
            {" "}
            <img
              src={ft1}
              alt=""
              className="w-14 rounded-full mb-3 opacity-50"
            />
            <span className="text-sm text-gray-100 flex justify-center ">
              VIP
            </span>
          </div>
          <div className="rounded-full ml-5">
            {" "}
            <img
              src={ft1}
              alt=""
              className="w-14 rounded-full mb-3 opacity-50"
            />
            <span className="text-sm text-gray-100 flex justify-center ">
              VVIP
            </span>
          </div>
        </div>
      </div>

      {/* information */}

      <div className="bg-[#6E205E] m-3 p-3 rounded-md">
        <div>
          <div className="text-gray-100 m pt-3 hover:text-[#da36b9] flex justify-between">
            <div className="mt-0.5 mr-1">
              <BsPersonFill size={20} className="mr-2" />
            </div>
            <Link to={"/personal-information"} className="mr-20 font-semibold">
              Personal Information
            </Link>
            <div>
              {" "}
              <TfiArrowCircleRight size={20} className="mr-2 mt-0.5" />
            </div>
          </div>
          <hr className="border-1 rounded-md mt-2 " />
        </div>
        <div>
          <div className="text-gray-100 m pt-3 hover:text-[#da36b9]  flex justify-between">
            <div className="mt-0.5 mr-1">
              <BsPersonFill size={20} className="mr-2" />
            </div>
            <Link className="mr-20 font-semibold">Personal Information</Link>
            <div>
              {" "}
              <TfiArrowCircleRight size={20} className="mr-2 mt-0.5" />
            </div>
          </div>
          <hr className="border-1 rounded-md mt-2 " />
        </div>
        <div>
          <div className="text-gray-100 m pt-3 hover:text-[#da36b9] flex justify-between">
            <div className="mt-0.5 mr-1">
              <BsPersonFill size={20} className="mr-2" />
            </div>
            <Link className="mr-20 font-semibold">Personal Information</Link>
            <div>
              {" "}
              <TfiArrowCircleRight size={20} className="mr-2 mt-0.5" />
            </div>
          </div>
          <hr className="border-1 rounded-md mt-2 " />
        </div>
      </div>

      <div className="flex justify-center">
        <div
          onClick={handleLogout}
          className="bg-[#6E205E] w-full m-3 text-center p-2 text-gray-100 rounded-full font-semibold hover:hover:text-[#da36b9]"
        >
          <Link>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
