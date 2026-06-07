import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaImages, FaStar} from 'react-icons/fa'
import AddToWishlist from '../index/addtowishlist/AddToWishlist'
import { FaShoppingBasket } from "react-icons/fa";
import { RiStarFill } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'


const ProductcardShop = ({img, name , price, score }) => {
  const safeScore = Math.max(0, Math.min(parseFloat(score) || 0, 5));
  const [status, setStatus]=useState("default")



  return (
    <>
       <div className='xl:w-[300px] lg:w-[240px] mt-10'>
      <div className="relative  shadow-[0_3px_8px_rgba(0,0,0,0.24)] group w-[95%] h-[465px] border mb-10 p-3 ml-5 bg-white border-gray-200 rounded-[30px] transition-all duration-300">

        <div
          className="absolute inset-0 bg-[#7dc502] rounded-[30px] opacity-0 transition-all duration-500 ease-in-out transform rotate-0 group-hover:opacity-100 group-hover:-rotate-3 -z-10"
        ></div>

        {/* ✅ تصویر محصول */}
        <div className="w-full h-[280px] p-10 flex justify-center items-center">
          <Link href='/'>
            <Image width={290} height={200} alt="pic" src={img} className="h-[200px] w-[180px]" />
          </Link>
        </div>

        {/* ❤️ افزودن به علاقه‌مندی‌ها */}
        <AddToWishlist   />

        {/* ⭐ امتیاز و نمایش جزئیات */}
        <div className="flex justify-between items-center p-10 pt-5 text-[#c4c4c4]">
          <span className="flex">
            
              {
              Array(safeScore).fill(0).map((item, index)=>{
                return (
                  <RiStarFill  key={index.toString()}  />
                )
              })
             }
              {
              Array(5-safeScore).fill(0).map((item, index)=>{
                return (
                  <AiOutlineStar  key={index.toString()} />
                )
              })
             }
           
           
            <p className="text-black mr-2">(0)</p>
          </span>

          {/* <span>
            <div className="w-[40px] h-[40px] rounded-full hover:bg-[#02693a] hover:text-white bg-[#ececec] flex justify-center items-center">
              <FaImages className="w-[40px] h-[20px]"  />
            </div>
          </span> */}
        </div>

        {/* ✅ نام و قیمت محصول */}
        <p className="pr-10 font-bold text-xl">{name} </p>
        <div className="flex justify-between items-center pr-10 pl-10">
          <p className="text-xl text-[#3fa180]">{price} تومان</p>
          <Link href='/cart' className="w-[40px] h-[40px] rounded-full hover:bg-[#02693a] hover:text-white bg-[#ececec] flex justify-center items-center">
            <FaShoppingBasket className="w-[40px] h-[20px] cursor-pointer"  />
          </Link>
        </div>
      </div>

    </div>


    </>
  )
}

export default ProductcardShop