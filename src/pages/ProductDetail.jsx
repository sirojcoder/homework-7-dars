import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

      const {id} = useParams()
      const [product , setProduct] = useState(null)


       const getProductDetail = async () =>{
        let res = await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(res?.data)
        console.log(res);
        
       
       } 
       useEffect(() => {
        getProductDetail()
       }, [])
       if (!product) {
        return <p>Yuklanmoqda...</p>;
      }
      
      const AddProduct = () =>{
        console.log("Porduct ishladi");
        
      }

      return (
        <div className="flex justify-center items-center pt-[110px] pb-11 bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[900px] flex gap-6">
            <div className="w-1/2 flex flex-col items-center ">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-74 h-94 object-contain rounded-lg shadow"
              />
            </div>
      
           
            <div className="w-1/2 flex flex-col justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
              <p className="text-gray-600 text-lg">Sotuvchi: <span className="font-semibold text-blue-700">TezBro</span></p>
              <p className='text-gray-600 text-md'>Izoh: <br />{product.description}</p>
              <p>Reyting:  {product.rating}</p>
              <div className="mt-4">
                <p className="text-gray-400 line-through text-lg">    $3.000</p>
                <p className="text-2xl font-bold text-black">${product.price}</p>
              </div>
      
             
              <button onClick={()=>{AddProduct()}} className="mt-4 bg-black !text-white px-1 py-1 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
                Savatga qo‘shish
              </button>
            </div>
          </div>
        </div>
      );
      
    
}

export default ProductDetail