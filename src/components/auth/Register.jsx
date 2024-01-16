import React, { useEffect, useState } from "react";
import Bg from "../../assets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";

import { RegisterUser, reset } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userRegister, isSuccess, isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (userRegister || isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [userRegister, dispatch, navigate, isSuccess]);

  const Register = (e) => {
    e.preventDefault();
    dispatch(RegisterUser({ name, email, password, phone_number }));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg w-96 m-2">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-2">
            Create an account
          </h2>
        </div>

        <form onSubmit={Register}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 bg-gray-100 border-none text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Username..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="flex items-center">
              {/* <IntlTelInput
                inputClassName="p-2 border border-gray-300 rounded-l"
                onFlagClick={onSelect}
                preferredCountries={["id", "us", "gb"]}
              /> */}

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-3 py-2 text-sm bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 text-sm bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 text-sm bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-2">
            {/* The rest of your existing code for Remember me and Forgot password */}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#844176] to-indigo-800 text-white font-semibold py-2 rounded-md hover:opacity-90 focus:outline-none transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-5">
          <div>
            Sudah punya akun?{" "}
            <Link
              to={"/"}
              className="font-medium text-indigo-800 hover:text-indigo-700 hover:underline"
            >
              Login
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
