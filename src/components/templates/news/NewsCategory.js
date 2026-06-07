import React from 'react'
import { IoMenu } from 'react-icons/io5'
const NewsCategory = () => {
  return (
    <div>

<div className="w-full h-[70px] bg-[#02693a] font-bold flex pt-5 rounded-t-[30px] text-white  text-2xl pr-10 overflow-hidden">
              <IoMenu className="w-[30px] h-[30px] text-[#61c159]" />
              <p className="mr-3  ">دسته بندی ها</p>
            </div>

            <div className="bg-[#f2f2f2] w-full rounded-t-[20px] relative top-[-14px] ">
              <ul className="pt-10 pr-10 font-semibold text-xl text-gray-700">
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> تغذیه</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> دانشنامه عمومی</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> دستور پخت</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> عسل</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> فراوری غذا</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> قهوه</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> نکات آشپزی</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> نگهداری غذا</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> کاهش وزن</a>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default NewsCategory