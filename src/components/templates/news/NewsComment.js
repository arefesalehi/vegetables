import React from 'react'
import { CgProfile } from 'react-icons/cg'
const NewsComment = () => {
  return (
    <>
      <h1 className="font-bold text-3xl">8 دیدگاه</h1>
      <div className="w-full h-auto pb-3 pt-5  border-b-[1px]  mb-5  ">
        <div className="flex ">
          <div>
            <div className="w-[50px] h-[50px] border rounded-[50%] ml-4 bg-white">
              <CgProfile className="w-[50px] h-[50px] border  text-gray-500 rounded-[50%]" />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between ">
              <h1 className="mb-2 flex flex-col ">
                <strong> علی</strong>
                <span className="text-gray-400 mt-2">
                  {/* {new Date(date).toLocaleDateString("Fa-IR")} */}
                  27 آبان 1401 در 10:02 ق.ظ
                </span>
              </h1>
              <div className="flex">
                {/* {new Array(Number(score)).fill(0).map((item, index) => {
                  return <FaStar key={index} className="text-yellow-500" />;
                })}
                {new Array(5 - Number(score)).fill(0).map((item, index) => {
                  return <FaRegStar key={index} className="text-yellow-600" />;
                })} */}
              </div>
            </div>

            <div className="text-gray-400">
              {' '}
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </div>

            <p className='mt-10 text-xl mb-10'>پاسخ</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsComment
