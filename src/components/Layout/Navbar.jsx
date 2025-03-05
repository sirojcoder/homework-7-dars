import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi2";
import { CartContex } from '../../Context/CartList';






const Navbar = () => {
   
  // const cartData = useContext(CartContex)
  // console.log(carData);
  

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 mx-auto fixed top-0 left-0 right-0 z-10 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="self-center text-3xl text-blue-700  font-semibold whitespace-nowrap dark:text-white">S|R</span>
        </Link>
        
        <div className="flex md:order-2 gap-5">
          
        <div className=" border  border-blue-500 rounded-lg w-[46px] h-[36px] flex justify-center items-center">
        <Link to="/context-list" className="relative">
  <HiShoppingBag size={30} className="text-gray-700" />
</Link>

        </div>
        <div className='pt-2'>
          <Link 
            to="Login" 
            className=" bg-blue-500 text-white px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Log in
          </Link>
        </div>

        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
