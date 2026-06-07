import React from 'react'
import Image from 'next/image'
import { IoCalendarSharp } from 'react-icons/io5'

const NewsBox = () => {
  return (
    <div className=" border-t-gray-500 flex w-[83%] m-auto mb-14 ">
                <span>
                  <Image
                    src="/images/coffee-blog-3-150x150.jpg "
                    width={150}
                    height={150}
                    className='rounded-[10px]'
                     alt='pic'
                  />
                </span>
                <span>
                  <p className=' p-2 font-semibold'>هنر قهوه باریستا و جادوی خلق طعم های منحصر به فرد</p>
                  <span className="flex items-center mr-2 mt-5">
                    <IoCalendarSharp />
                    <p className="mr-2  text-gray-500">27 ام شهریور 1403</p>
                  </span>
                </span>
              </div>
  )
}

export default NewsBox