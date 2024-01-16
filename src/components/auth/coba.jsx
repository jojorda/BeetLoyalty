// RegisterVerificationEmail.jsx
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtpEmail,
  customerByJwt,
  customerIsVerified,
} from "path-to-your-actions"; // Sesuaikan dengan path Anda
import ModalInformation from "../../components/ModalInformation";

const RegisterVerificationEmail = () => {
  const dispatch = useDispatch();
  const [id01, setId01] = useState(null);
  const [id02, setId02] = useState(null);
  const [id03, setId03] = useState(null);
  const [id04, setId04] = useState(null);
  const [showModalInformation, setShowModalInformation] = useState(false);

  const getDataRegistration = useSelector(
    (state) => state.auth.getDataRegistration
  );
  const getDataCustomer = useSelector((state) => state.auth.getDataCustomer);

  const id01Ref = useRef(null);
  const id02Ref = useRef(null);
  const id03Ref = useRef(null);
  const id04Ref = useRef(null);

  const firstRender = async () => {
    dispatch({ type: "SET_TOKEN", payload: $route.params.session });
    await dispatch(customerByJwt());
  };

  useEffect(() => {
    firstRender();
    console.log("refs", id03Ref);
    id01Ref.current.focus();
  }, []);

  const handleResendCode = async () => {
    try {
      await dispatch(
        sendOtpEmail({
          email: getDataRegistration.email,
          code: getDataRegistration.verification_code,
        })
      );
      console.log("OTP verification sent, please check your email");
    } catch (error) {
      console.log("error resend Code", error);
      console.log("Verify code not sent, please try again");
    }
  };

  const handleRegister = () => {
    if (id01 && id02 && id03 && id04) {
      setShowModalInformation(true);
    }
  };

  const handleClose = () => {
    setShowModalInformation(false);
    $router.push({ name: "Auth" });
    console.log("Registration successful, please login");
  };

  const goBack = () => {
    $router.go(-1);
  };

  const checkCode = () => {
    const code_of_input = id01 + id02 + id03 + id04;
    if (code_of_input === getDataCustomer.verification_code) {
      dispatch(
        customerIsVerified({ customer_id: getDataCustomer.id, is_verified: 1 })
      );
      handleRegister();
    } else {
      console.log("Invalid verification code");
    }
    console.log("code_of_input", code_of_input);
  };

  return (
    <div className="content">
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
            <input
              type="text"
              ref={id01Ref}
              className="verify"
              maxLength="1"
              value={id01}
              onChange={(e) => setId01(e.target.value)}
            />
            <input
              type="text"
              ref={id02Ref}
              className="verify"
              maxLength="1"
              value={id02}
              onChange={(e) => setId02(e.target.value)}
            />
            <input
              type="text"
              ref={id03Ref}
              className="verify"
              maxLength="1"
              value={id03}
              onChange={(e) => setId03(e.target.value)}
            />
            <input
              type="text"
              ref={id04Ref}
              className="verify"
              maxLength="1"
              value={id04}
              onChange={(e) => setId04(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className={`button ${
            id01 && id02 && id03 && id04 ? "active" : "inactive"
          }`}
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
