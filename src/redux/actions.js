// actions.js
export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  // File: src/redux/actions/userActions.js

export const registerUser = (userData) => {
  // Di sini, Anda dapat menyertakan logika atau panggilan API untuk mendaftarkan pengguna
  // Misalnya, simpan data pengguna di server atau dalam penyimpanan lokal

  // Untuk contoh, kita hanya mengembalikan objek tindakan dengan tipe "REGISTER_USER"
  return {
    type: 'REGISTER_USER',
    payload: userData,
  };
};
