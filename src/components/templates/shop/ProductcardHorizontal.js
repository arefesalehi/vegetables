import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaShoppingBasket, FaImages } from 'react-icons/fa'

const ProductcardHorizontal = ({ name, img, price, shortDescription }) => {
    return (
        <>
            <div className='w-[90%] m-auto justify-center items-center pb-5 h-auto md:h-[320px] border-solid border-2 border-gray-300 rounded-[20px] mt-10 flex'>
                <div className='basis-1/3'>
                    <div className="w-full h-[280px] sm:p-10 p-2  flex justify-center items-center">
                        <Link href='/'>
                            <Image width={300} height={300} alt="pic" src={img} className=" w-[200px] h-[200px] sm:h-[280px] sm:w-[300px]" />
                        </Link>
                    </div>
                </div>


                <div className='basis-2/3 flex flex-col'>
                    <div className='text-2xl mt-10 '>
                        {name}

                    </div>
                    <div className='text-xl mt-10 flex '>
                        <p className='text-green-700'>{price} تومان</p>
                        <p className='line-through mr-10 decoration-2 decoration-green-600'>  4895222 تومان </p>

                    </div>

                    <div className='mt-10 text-lg pl-10'>
                        {shortDescription}  
                    </div>


                    <div className='flex  mt-10'>
                        <Link href='/cart' className="w-[40px] h-[40px] rounded-full ml-5 hover:bg-[#02693a] hover:text-white bg-[#ececec] flex justify-center items-center">
                            <FaShoppingBasket className="w-[40px]  h-[20px] cursor-pointer" />
                        </Link>

                        <div className="w-[40px] h-[40px] rounded-full ml-5 hover:bg-[#02693a] hover:text-white bg-[#ececec] flex justify-center items-center">
                            <FaImages className="w-[40px] h-[20px] " />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full hover:bg-[#02693a] hover:text-white bg-[#ececec] flex justify-center items-center">
                            <FaImages className="w-[40px] h-[20px]" />
                        </div>
                    </div>



                </div>




            </div>





        </>

    )
}

export default ProductcardHorizontal