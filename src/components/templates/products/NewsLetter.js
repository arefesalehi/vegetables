import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
  return (
    <>

      <div className='w-[93%] m-auto relative top-[90px] p-20 flex justify-between items-center h-auto flex-wrap md:flex-row text-white bg-[#01512c] rounded-[30px] ' >
      <div
          className="absolute inset-0 bg-[#7dc502] rounded-[30px] opacity-0 transition-all duration-500 ease-in-out transform rotate-0 group-hover:opacity-100 group-hover:-rotate-3 -z-10"
        ></div>
        <div className='basis-full md:basis-2/3 lg:basis-1/3 mb-5 lg:mb-0'>
          <h1 className='sm:text-4xl lg:text-5xl mb-5 text-3xl   '>عضویت در خبرنامه</h1>
          <p className='text-justify '>برای دریافت پیشنهادات ویژه و اخبار انحصاری درباره
            محصولات بوتانیکا در خبرنامه ثبت نام کنید</p>
        </div>

        <div className='w-1/3 flex justify-center items-center sm:hidden'>
          <Image src='/images/1111.PNG'  alt='pic' width={150} height={100} />
        </div>

        <div className='basis-full md:basis-2/3 mt-10  md:mt-0'>
          <div className="w-full flex hover:border hover:border-[#007A4B]  h-[58px] rounded-[30px] bg-[#0c4329] ">
            <input
              type="text"
              placeholder="ایمیل خود را وارد نمایید..."
              className="bg-[#0c4329]   border-none overflow-hidden outline-none w-[90%]  mr-8 mt-2"
            />
            <div className="w-[130px]  h-[58px] flex justify-center items-center text-white  bg-[#007A4B] rounded-[30px] ">
              <p>عضویت</p>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default NewsLetter