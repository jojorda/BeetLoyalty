// Import semua yang diperlukan dari React
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Gantilah dengan metode manajemen state yang sesuai

// Import komponen ModalInformation
import ModalInformation from "../../components/ModalInformation";

// Gantilah dengan metode routing yang sesuai
import { useHistory } from "react-router-dom";

const RegisterVerificationEmail = () => {
  // Gunakan useDispatch dan useSelector untuk manajemen state
  const dispatch = useDispatch();
  const getDataRegistration = useSelector((state) => state.getDataRegistration);
  const getDataCustomer = useSelector((state) => state.getDataCustomer);

  const history = useHistory(); // Gantilah dengan metode routing yang sesuai

  // State untuk menyimpan nilai input
  const [id01, setId01] = useState(null);
  const [id02, setId02] = useState(null);
  const [id03, setId03] = useState(null);
  const [id04, setId04] = useState(null);

  // State untuk menampilkan modal
  const [showModalInformation, setShowModalInformation] = useState(false);

  // Gunakan useEffect untuk melakukan operasi yang dijalankan setelah render pertama
  useEffect(() => {
    firstRender();
    console.log("refs", id03); // Ganti dengan cara yang sesuai untuk merujuk ke elemen
    // Fokus pada input pertama setelah render
    // Gantilah dengan cara yang sesuai untuk merujuk ke elemen
    document.getElementById("id01").focus();
  }, []);

  // Fungsi untuk melakukan render pertama
  const firstRender = async () => {
    dispatch({
      type: "SET_TOKEN",
      payload: { session: history.location.params.session },
    });
    await dispatch(customerByJwt());
  };

  // Fungsi untuk mengirim ulang kode
  const handleResendCode = async () => {
    try {
      await dispatch(
        sendOtpEmail({
          email: getDataRegistration.email,
          code: getDataRegistration.verification_code,
        })
      );
      alert("OTP verification sent, please check your email");
    } catch (error) {
      console.log("error resend Code", error);
      alert("Verify code not sent, please try again");
    }
  };

  // Fungsi untuk mengatur nilai input
  const inputVerify = (e) => {
    // Lakukan sesuatu sesuai kebutuhan
  };

  // Fungsi untuk menangani registrasi
  const handleRegister = () => {
    if (id01 && id02 && id03 && id04) {
      setShowModalInformation(true);
    }
  };

  // Fungsi untuk menangani penutupan modal
  const handleClose = () => {
    setShowModalInformation(false);
    history.push({ pathname: "/Auth" }); // Gantilah dengan cara yang sesuai untuk routing
    alert("Registration successful, please login");
  };

  // Fungsi untuk kembali
  const goBack = () => {
    history.goBack();
  };

  // Fungsi untuk memeriksa kode
  const checkCode = () => {
    const code_of_input = id01 + id02 + id03 + id04;
    if (code_of_input === getDataCustomer.verification_code) {
      dispatch(
        customerIsVerified({ customer_id: getDataCustomer.id, is_verified: 1 })
      );
      handleRegister();
    } else {
      alert("Invalid verification code");
    }
    console.log("code_of_input", code_of_input);
  };

  // Gunakan useEffect untuk memantau perubahan pada input dan memicu aksi yang sesuai
  useEffect(() => {
    if (id01 && id02 && id03 && id04) {
      checkCode();
    }
  }, [id01, id02, id03, id04]);

  return (
    <div className="content">
      {/* Gunakan komponen ModalInformation */}
      <ModalInformation
        title="Success! Your Register is Successful"
        message="Press okay to continue"
        buttonTitle="Okay"
        show={showModalInformation}
        handleClose={handleClose}
      />
      <div className="content-top">
        <div className="d-flex justify-content-between align-items-center">
          <div className="back-button feedback" onClick={goBack}>
            <img src="@/assets/images/icons8-chevron-left-90.png" alt="Back" />
          </div>
          <div className="change-number">Change Email</div>
        </div>
        <div
          className="d-flex flex-column align-items-center"
          style={{ height: "100%" }}
        >
          <h4 className="my-2">Enter authentication code</h4>
          <div className="desc-4-digit">
            Enter the 4-digit that we have sent via the email{" "}
            <span className="font-weight-bold">{getDataCustomer.email}</span>
          </div>
          <div className="wrapper-input-verify mt-5">
            {/* Gunakan input JSX untuk mendefinisikan input */}
            <input
              type="text"
              ref={(el) => document.getElementById("id01").focus()}
              className="verify"
              id="id01"
              maxLength="1"
              value={id01}
              onChange={(e) => setId01(e.target.value)}
            />
            <input
              type="text"
              ref={(el) => document.getElementById("id02").focus()}
              className="verify"
              id="id02"
              maxLength="1"
              value={id02}
              onChange={(e) => setId02(e.target.value)}
            />
            <input
              type="text"
              ref={(el) => document.getElementById("id03").focus()}
              className="verify"
              id="id03"
              maxLength="1"
              value={id03}
              onChange={(e) => setId03(e.target.value)}
            />
            <input
              type="text"
              ref={(el) => document.getElementById("id04").focus()}
              className="verify"
              id="id04"
              maxLength="1"
              value={id04}
              onChange={(e) => setId04(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        {/* Gunakan class dinamis */}
        <div
          className={`${
            id01 && id02 && id03 && id04 ? "active" : "inactive"
          } button`}
          onClick={handleRegister}
        >
          Continue
        </div>
        <div className="button-email" onClick={handleResendCode}>
          Resend Code
        </div>
      </div>
    </div>
  );
};

export default RegisterVerificationEmail;
