import React from 'react'

const NewsTags = () => {
  return (
    <div>

<div className="w-full h-[217px] bg-white border border-gray-200 mt-10 rounded-[30px]">
           <h1 className="text-xl font-bold p-10 ">  برچسب ها</h1>

           <div className='flex pr-10 pl-10  flex-wrap'>
            <span className='p-5  ml-3 mt-2 bg-[#f2f2f2]'>آشپزی</span>
            <span className='p-5  ml-3 mt-2 bg-[#f2f2f2]'>غذای خیابانی</span>
            <span className='p-5  ml-3 mt-2 bg-[#f2f2f2]'>فراوری غذا</span>
            <span className='p-5  ml-3 mt-2 bg-[#f2f2f2]'>موز</span>
           </div>

          </div>
    </div>
  )
}

export default NewsTags