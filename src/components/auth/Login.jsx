import React, { useEffect, useState } from "react";
import Bg from "../../assets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";

import { LoginUser, SendOtp, reset } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, dispatch, navigate, isSuccess]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const validateInputs = () => {
  //   return email && password;
  // };
  // const handleVerification = async () => {
  //   try {
  //     const verificationCode = user?.data?.dataCustomer?.verification_code;

  //     if (verificationCode) {
  //       const payload = {
  //         email: email,
  //         verification_code: verificationCode,
  //       };

  //       // Dispatch the SendOtp action to resend verification code
  //       await dispatch(SendOtp(payload));

  //       setError(
  //         "Akun belum diverifikasi. Kami telah mengirim ulang email verifikasi."
  //       );

  //       // Navigate to the OTP verification page
  //       navigate("/otp-verification");
  //     } else {
  //       setError("Tidak dapat menemukan kode verifikasi.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending verification code:", error);
  //   }
  // };
  // const handleVerifiedUser = () => {
  //   // Redirect to the dashboard
  //   navigate("/dashboard");
  // };
  // const Auth = async (e) => {
  //   e.preventDefault();

  //   if (validateInputs()) {
  //     // Dispatch the LoginUser action
  //     await dispatch(LoginUser({ email, password }));

  //     // Check if the user state has been updated
  //     if (user) {
  //       // Accessing the correct path in the data structure
  //       const isVerified = user.data?.dataCustomer.is_verified;

  //       if (isVerified) {
  //         // If the user is verified, proceed with login
  //         dispatch(LoginUser({ email, password }));

  //         // Handle actions for verified user
  //         await handleVerifiedUser();

  //         console.log("User is verified, redirecting to dashboard");
  //       } else {
  //         // If the user is not verified, handle the verification process
  //         await handleVerification();

  //         // Remove all items from local storage
  //         localStorage.clear();
  //       }
  //     }
  //   }
  // };

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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && user.is_verified && <p>Welcome, {user.email}!</p>}
        <form onSubmit={Auth}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 border-none text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="example@gmail.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="********"
            />
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-800 hover:text-indigo-700 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#844176] to-indigo-800 text-white font-semibold py-2 rounded-md hover:opacity-90 focus:outline-none transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-5">
          <div>
            Belum punya akun?{" "}
            <Link
              to={"/register"}
              className="font-medium text-indigo-800 hover:text-indigo-700 hover:underline"
            >
              Register
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
