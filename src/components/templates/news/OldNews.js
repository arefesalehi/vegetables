import React from 'react'

const OldNews = () => {
  return (
    <div>

<div className='w-full h-[358px]  bg-white border border-gray-200 mt-10 rounded-[30px]'>
            <h1 className="text-xl font-bold p-10 "> بایگانی ها</h1>
            
            <div className=" w-full rounded-t-[20px]  ">
              <ul className=" pr-10 font-semibold text-xl text-gray-700">
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> اسفند 1402</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href="">  مرداد 1402</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href="">  آبان 1401</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> تیر 1401</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href="">  فروردین 1401</a>
                </li>
                <li className="list-circle mb-8 mr-5">
                  {' '}
                  <a href=""> مهر 1400</a>
                </li>
                
              </ul>
            </div>
            </div>
    </div>
  )
}

export default OldNews