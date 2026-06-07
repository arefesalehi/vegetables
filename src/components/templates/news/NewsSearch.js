import React from 'react'
import { FiSearch } from 'react-icons/fi'
const NewsSearch = () => {
  return (
    <div>
      <div className="w-full h-[106px] bg-[#f2f2f2] flex items-center justify-center rounded-[30px]">
        <div className="w-[280px] border border-[#61c159]  flex hover:border   h-[50px] rounded-[30px] bg-white ">
          <input
            type="text"
            placeholder="جست و جو کنید ..."
            className="bg-white  border-none  overflow-hidden outline-none w-[90%]  mr-8 mt-2"
          />
          <div className="w-[60px]  h-[48px] flex justify-center items-center text-white  bg-[#007A4B] rounded-[30px] ">
            <p>
              <FiSearch />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSearch
