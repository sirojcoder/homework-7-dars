import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from 'antd';
import { HiShoppingBag } from "react-icons/hi2";






const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [categories , setCategories] = useState([])
  const [category , setCategory] = useState(null)
  const [search , setSearch] = useState(null)

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const getProducts = async () => {
    setLoading(true);
    try {
        let res;
        if (category) {
          res = await axios.get(`https://dummyjson.com/products/category/${category}`);
        } else {
            res = await axios.get("https://dummyjson.com/products");
            console.log(res?.data?.products);
        }
        if (res?.status === 200) {
            setData(res?.data?.products);
        }
    } catch (error) {
        console.error("Mahsulotlarni olishda xatolik:", error);
    } finally {
        setLoading(false);
    }
};

  const getCategories = async () => {
    try {
        let res = await axios.get("https://dummyjson.com/products/category-list");
        if (res?.status === 200) {
            setCategories(res?.data);
        }
    } catch (error) {
        console.error("Kategoriya olishda xatolik:", error);
    }
};

  useEffect(() => {
    getProducts();
    setCurrentPage(1);
  }, [category]);
  
  useEffect(() =>{
    getCategories()
  },[])

  const searchHandle = async () => {
    try {
        let res = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
        if (res?.status === 200) {
            setData(res?.data?.products);
            setCurrentPage(1);
        }
    } catch (error) {
        console.error("Qidiruvda xatolik:", error);
    }
};

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);


  

  return (
    <div className="bg-gray-50 min-h-screen py-[10px]">
       
  <div className="container max-w-screen-xl mx-auto p-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center py-2">Products</h2>
          <div className="flex items-center gap-2 p-4 bg-white mb-7 rounded-lg shadow-md">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Mahsulot nomini kiriting..."
          onChange={(val) =>{
            setSearch(val?.target.value)
          }}
        />
        <button onClick={()=>{searchHandle()}} className="px-4 py-2 bg-blue-600 !text-white rounded-md hover:bg-blue-700 transition-colors">
          Qidirish
        </button>
      </div>

    <div className="flex flex-col lg:flex-row gap-6">
      <div className="bg-white  p-6 shadow-lg rounded-xl min-w-[200px] lg:min-h-[400px]">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Kategoriyalar</h3>
        <div
          className={`py-3 px-5 mb-2 cursor-pointer rounded-lg transition-all
          ${!category ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
          onClick={() => setCategory(null)}
        >
          Barchasi
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto">
          {categories?.map((res) => (
            <div
              key={res}
              className={`py-2 px-4 cursor-pointer rounded-md transition-all
              ${category === res ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              onClick={() => setCategory(res)}
            >
              {res}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
        {paginatedData?.map((item) => (
          <div
            className="bg-white h-[360px] shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105"
            key={item?.id}
          >
            <Link to={`/product-detail/${item?.id}`}>
              <div className="w-full h-[200px] flex justify-center items-center">
                <img
                  className="w-40 h-40 object-contain"
                  src={item?.thumbnail}
                  alt={item?.title}
                />
              </div>
              </Link>
              <div className="p-2">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {item?.title}
                </h3>
                <p className="text-gray-500 line-through text-lg">3.000 $</p>
               
                <div className="flex items-center justify-between">
                      <p className="text-xl font-bold text-black ">{item?.price} $</p>
                      <button
  className="bg-blue-500 !text-white px-2 py-1 rounded-md hover:bg-blue-600"
  onClick={() => AddCart() }
>
  <HiShoppingBag size={20} /> 
</button>


                </div>
                
                
                
              </div>
              
          </div>
        ))}
      </div>
    </div>

   

  </div>
  <Pagination
      className="mt-6 flex justify-center"
      current={currentPage}
      pageSize={pageSize}
      total={data.length}
      onChange={handlePageChange}
    />
</div>

  );
  
};

export default Products;
