import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
const AllBreadCrumb = ({route}) => {
  return (
    <>
    <div className='w-full h-[375px] bg-[#e2edf0] flex flex-col justify-center items-center'>
        <h1 className='flex justify-center items-center font-bold text-4xl'>{route}</h1>
        <p className=' text-center text-xl mt-5 flex justify-center items-center  ' >خانه <IoIosArrowBack/>  {route}  </p> 
        
    </div>


    </>
  )
}

export default AllBreadCrumb