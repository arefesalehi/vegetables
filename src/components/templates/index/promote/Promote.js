import Image from 'next/image'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
const Promote = () => {
  return (
    <>
      <div className="xl:w-[80%]  w-[95%] m-auto  ">
        <div className="lg:h-[551px] sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row lg:pr-12 lg:pl-12  lg:w-full lg:flex lg:justify-between md:justify-between lg:items-center md:items-center md:flex  md:flex-row    ">
          <div   className="lg:w-1/3   sm:order-3 md:order-none  flex flex-col justify-center sm:justify-center sm:items-center md:items-start  lg:justify-center md:justify-center lg:mt-0 lg:mb-0   md:mb-20 lg:mr-0 md:mr-5    md:h-auto ">
            <h1 className="text-[#0d623d] lg:text-4xl xl:text-5xl text-center md:text-right text-4xl mt-5  md:text-4xl lg:mt-0 md:mt-20 ">ما تضمین می کنیم</h1>
            <p className=" lg:text-3xl  xl:text-4xl md:text-3xl mt-5 text-center md:text-right text-3xl ">تحویل 30 دقیقه </p>
            <p className="mt-5  lg:text-xl text-center md:text-right md:text-lg" data-aos='fade-up'  data-aos-duration="2000">
              30 دقیقه ضمانت تحویل! بوتانیکا تنها شرکت غذایی است که
           <br/>
              تضمین می کند سفارش شما ظرف 30 دقیقه به دستتان می رسد یا
            <br/>
              یک ژتون رایگان به شما می دهیم.
            </p>

            <div className="flex mt-10  sm:justify-between sm:w-full md:w-[50px]  justify-center items-center md:justify-start mb-10 md:mb-0 md:items-start  ">
              <span>
                <Image
                  width={70}
                  height={70}
                  alt='pic'
                  src="/images/delivery-icon.png"
                  className=" border-l-gray-400"
                />
              </span>
              <span className="mr-5 ">
                <p className='text-xl'>   تماس با ما: </p>
                <p className="text-[#f2954d] text-2xl mt-2">09355789137</p>
              </span>
            </div>
          </div>

          <div  data-aos='fade-up' data-aos-delay="200" data-aos-duration="900" className=" lg:flex justify-center items-center sm:order-2 md:order-none ">
            <Image width={455} height={388} alt='pic' src="/images/delivery-image.png" className='   ' />
          </div>

          <div   className="lg:w-1/3 lg:flex lg:flex-col lg:justify-center lg:mt-0 lg:mb-0 md:mb-20 sm:order-3 md:order-none   lg:mr-20   md:mr-10  ">
            <p className=" lg:text-3xl xl:text-4xl md:text-2xl text-3xl mt-10    text-center md:text-right lg:mt-0 md:mt-20 lg:font-normal md:font-bold">
              آنچه را که می خواهید انتخاب کنید
            </p>
            <p className=" lg:text-3xl xl:text-4xl md:text-2xl mt-5 lg:font-normal text-2xl text-center md:text-right md:font-semi-bold ">زمان تحویل را انتخاب کنید</p>
            <p className='mt-5 lg:text-xl  md:text-lg' data-aos='fade-up'  data-aos-duration="2000">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              <br />
              و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
              <br />و مجله در ستون و سطرآنچنان که لازم است.
            </p>
            <button
              type=""
              className=" w-[170px]  p-2 m-auto md:m-0 md:mt-10 lg:mt-10  mt-10 flex rounded-[30px]  text-xl bg-[#007a4c] justify-center items-center text-white"
            >
               اطلاعات بیشتر
              <div className="w-[40px] ml-[-11px] hover:bg-[#7dc70a] mr-5 flex justify-center  items-center h-[40px] rounded-[50%] bg-white">
                <FaArrowLeftLong className="text-[#007a4c]" />
              </div>{' '}
            </button>
          </div>

        </div>
      </div>




    </>
  )
}

export default Promote
