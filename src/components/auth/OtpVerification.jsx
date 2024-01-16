import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendOtp, CustomerIsVerified } from "../../features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP is:", otp);
    checkCode();
  };

  const handleResendCode = () => {
    console.log("Resending authentication code...");
    // Tambahkan logika untuk mengirim ulang kode otentikasi di sini
  };

  const handleSendOtp = async () => {
    try {
      if (user && user.data && user.data.dataCustomer) {
        const userEmail = user.data.dataCustomer.email;
        const verificationCode = user.data.dataCustomer.verification_code;
        setEmail(userEmail);

        const payload = {
          email: userEmail,
          verification_code: verificationCode,
        };

        await dispatch(SendOtp(payload));

        console.log("SendOtp action dispatched successfully");
      }
    } catch (error) {
      console.error("Error dispatching SendOtp action:", error);
    }
  };

  const checkCode = () => {
    console.log("Entered OTP:", otp); // Tambahkan ini
    if (user && user.data && user.data.dataCustomer) {
      const enteredOtp = otp;
      const correctOtp = user.data.dataCustomer.verification_code;
      console.log("Correct OTP:", correctOtp); // Tambahkan ini

      if (enteredOtp === correctOtp) {
        dispatch(
          CustomerIsVerified({
            customer_id: user.data.dataCustomer.id,
            is_verified: 1,
          })
        );
        // handleRegister(); // Pastikan handleRegister ada atau sesuaikan dengan kebutuhan
        return;
      }
    }

    alert("Kode verifikasi tidak valid");
  };

  useEffect(() => {
    handleSendOtp();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 md:rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Enter authentication code
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter the code that we have sent via email to <b>{email}</b>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={handleChange}
            className="w-full p-3 border border-gray-400 rounded-full text-center text-2xl font-semibold focus:outline-none focus:ring focus:border-blue-300"
            maxLength="6"
            minLength="6"
            pattern="\d*"
            required
          />
          <div className="mt-6 flex justify-between">
            <Link
              to={"/"}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Back
            </Link>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-md hover:opacity-90 focus:outline-none transition duration-300"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={handleResendCode}
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
