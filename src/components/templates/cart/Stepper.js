
import Link from 'next/link';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const Stepper = ({step}) => {
  return (
    <>
      <div className="w-full h-[375px] bg-[#e2edf0]  flex flex-col justify-center items-center">
        <h1 className={`  flex justify-center items-center mb-5 font-bold text-3xl lg:text-6xl`}>
          <p >سبد خرید</p>
        </h1>
        <p className=" text-center text-2xl lg:text-3xl mt-5 flex justify-center items-center  ">
         <Link href='/cart' className={`${step=== 'cart' && 'text-green-600'}`}> صفحه اصلی </Link>
          <FaArrowLeft className='ml-5 mr-2' />
           <Link href='/checkout'  className={`${step=== 'checkout' && 'text-green-600'}`}>پرداخت</Link>{' '}<FaArrowLeft className='ml-5 mr-2' />
           
      <Link href='/order-tracking' className={`${step=== 'complete' && 'text-green-600'}`}>   رسید</Link>
        </p>
      </div>
    </>
  )
}

export default Stepper
