import Image from 'next/image'
import React from 'react'
import { IoMdPerson } from 'react-icons/io'
import { IoCalendarSharp } from 'react-icons/io5'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Link from 'next/link'

const NewsCard = ({ img, title, date, author, _id }) => {
  return (
    <>
      <Link href={`/news/${_id}`} className='flex justify-center items-center md:block '>
        <div className="2xl:w-[407px]   2xl:h-[490px]  xl:w-[320px] xl:h-[430px]  lg:w-[315px]  lg:h-[460px] md:h-[430px] sm:w-[355px] sm:h-[480px] h-[450px]  bg-white rounded-[30px]">
          <Image
            src={img}
            width={377}
            alt="pic"
            height={242}
            className="rounded-[30px] m-auto p-5  w-[377px] h-[270px]  "
          />
          <div className="flex items-center mt-10 mb-10 text-gray-500 ">
            <span className="flex items-center mr-5 ">
              <IoMdPerson />
              <p className="mr-2">توسط {author} </p>
            </span>
            <span className="flex items-center mr-10">
              <IoCalendarSharp />
              <p className="mr-2"> {date} </p>
            </span>
          </div>

          <h1 className="font-bold pr-3 pl-3 text-xl xl:text-2xl mr-5">{title}</h1>

          <div  className='absolute bottom-[30px]'>
            <div className="flex items-center mr-8    ">
              <p  className="ml-2 font-bold ">ادامه مطلب</p>
              <FaArrowLeftLong />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default NewsCard
