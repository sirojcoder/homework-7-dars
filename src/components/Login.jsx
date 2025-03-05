import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // Inputlar uchun state yaratamiz
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Login funksiyasi
  const LoginProduct = async () => {
    try {
      const res = await axios.post('https://dummyjson.com/auth/login', {
        username, // inputdan olingan qiymat
        password, 
      });

      if (res?.data) {
        localStorage.setItem('accessToken', res.data?.accessToken);
        navigate('/');
      
      }else{
        alert("Xato kiritingiz")
      }
      console.log(res.data?.accessToken);

    } catch (error) {
      console.error('Login xatosi:', error.response?.data || error.message);
      alert("Xato kiritingiz")
    }
  };
console.log("login :  ");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="flex flex-col gap-6 p-8 max-w-sm w-full bg-white bg-opacity-80 shadow-2xl rounded-2xl backdrop-blur-sm">
        
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
          Log in
        </h2>
        
        <input 
          type="text" 
          name="username" 
          placeholder="Login kiriting" 
          value={username} // qiymatni bog'lash
          onChange={(e) => setUsername(e.target.value)} // qiymatni yangilash
          className="border-b-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-pink-500 transition-all"
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Parol kiriting" 
          value={password} // qiymatni bog'lash
          onChange={(e) => setPassword(e.target.value)} // qiymatni yangilash
          className="border-b-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-pink-500 transition-all"
        />
        
        <button 
          className="bg-gradient-to-r from-purple-500 to-pink-500 !text-white py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-red-500 transition-all duration-300 shadow-md"
          onClick={LoginProduct} // to'g'ridan-to'g'ri chaqirish
        >
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
