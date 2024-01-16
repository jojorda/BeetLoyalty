// Register.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { register, sendOtpEmail } from '../redux/actions'; // Sesuaikan dengan struktur direktori Anda

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState({
    dialCode: '',
    iso2: '',
  });

  const firstRender = () => {
    console.log('Hello World');
  };

  const pushToLoginEmail = () => {
    history.push('/LoginEmail');
  };

  const onSelect = (event) => {
    setCountryCode({
      dialCode: event.dialCode,
      iso2: event.iso2,
    });
  };

  const goBack = () => {
    history.goBack();
  };

  const handleRegister = async () => {
    if (
      (email.length >= 1 && !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) ||
      (password.length >= 1 && !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!#%*?&]{8,20}$/)) ||
      !name.length ||
      !phoneNumber
    ) {
      // Handle invalid input
    } else {
      const payload = {
        name,
        phone_number: countryCode.dialCode + phoneNumber,
        email,
        password,
        code_4: 1,
      };
      try {
        const dataRegistrasi = await dispatch(register(payload));
        await handleSendOtpEmail(dataRegistrasi.result);
        history.push({ pathname: '/RegisterVerificationEmail', params: { session: dataRegistrasi.accessToken } });
      } catch (error) {
        console.log('error register', error);
        Swal.fire(error, '', 'error');
      }
    }
  };

  const handleSendOtpEmail = async (dataRegistrasi) => {
    try {
      await dispatch(sendOtpEmail({ email, code: dataRegistrasi.verification_code }));
      Swal.fire({
        text: 'OTP verification sent, please check your email',
        icon: 'success',
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 7000,
      });
    } catch (error) {
      Swal.fire({
        text: 'Verify code not sent, please try again',
        icon: 'error',
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  return (
    <div className="content">
      <div>
        <div className="back-button feedback" onClick={goBack}>
          <img src="@/assets/images/icons8-chevron-left-90.png" alt="Back" />
        </div>
        <h2 className="welcome-babyshop">Welcome to Beet Loyalty Promo.</h2>
        <h6>Sign up to your account</h6>
        <div className="title-input mt-4" htmlFor="name">
          Name
        </div>
        <input className="name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="title-input" htmlFor="phone-number">
          Mobile Phone Number
        </div>
        <div className="d-flex justify-content-between">
          {/* Placeholder for vue-country-code component */}
          <input
            className="phone-number"
            type="text"
            placeholder="Phone Number"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="title-input" htmlFor="email">
          Email
        </div>
        <input className="email" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="text-danger" style={{ display: email.length >= 1 && !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? 'block' : 'none' }}>
          email must be a valid email
        </p>
        <div className="title-input" htmlFor="password">
          Password
        </div>
        <input className="password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p
          className="text-danger"
          style={{
            display: password.length >= 1 && !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!#%*?&]{8,20}$/) ? 'block' : 'none',
          }}
        >
          password should be a combination of one uppercase, one lowercase, one number and min 8, max 20 char long
        </p>
      </div>
      <div>
        <div className={`button ${name && email && phoneNumber && password ? 'active' : 'inactive'}`} onClick={handleRegister}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Register;
