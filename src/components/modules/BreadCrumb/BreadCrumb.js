import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const BreadCrumb = ({products}) => {
  return (
    <>

    <div className='w-full h-[80px]  flex items-center '>
        <div className='mycontainer flex items-center text-xl '>
       خانه <IoIosArrowBack/> 

        فروشگاه <IoIosArrowBack/>

        {products?.category} <IoIosArrowBack/>
          {products?.length > 1  ? <IoIosArrowBack/> :  products?.name }
        {/* {products?.name}<IoIosArrowBack/> */}



        </div>
    </div>


    </>
  )
}

export default BreadCrumb