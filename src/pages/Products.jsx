import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getProducts = () => {
    console.log("getProducts chaqirildi! ");
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (res) {
        console.log("API Response:", res); 
        if (res?.status === 200) {
          setData(res?.data);
        }
      })
      .catch(function (error) {
        console.log("API Xatosi :", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  useEffect(() => {
  
    getProducts();
  }, []);
  
  return (
    <div className="bg-gray-50 min-h-screen py-[10px]">
      <div className="container max-w-screen-xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((item) => (
            <div
              className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105"
              key={item?.id}
            >
              <Link to={`/product-detail/${item?.id}`}>
               
                <div className="w-full h-[220px] flex justify-center items-center ">
                  <img
                    className="w-40 h-40 object-contain"
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
  
              
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{item?.title}</h3>
                  <p className="text-gray-500 line-through text-lg"> 3.000 $</p>
                  <p className="text-xl font-bold text-black mt-2">{item?.price} $</p>
                  
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Products;
