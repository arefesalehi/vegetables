import React from 'react'
import { FaRegChartBar } from "react-icons/fa";



const PishkhanCard = ({title , value}) => {
  return (
    <>
      <div className="w-[280px] border-solid  border-green-600 border-2 text-xl pr-10 pl-10 justify-between items-center rounded-[10px] h-[100px] flex  ml-10 mt-10  mb-10">
        <div className="1/2 ">
          <p className='text-xl mb-2'>{value}</p>
          <p className='text-gray-800'> {title}</p>
        </div>
        <div className="1/2 flex justify-end">
         <FaRegChartBar className=' w-[30px] h-[30px] text-green-600 '/>
        </div>
      </div>
    </>
  )
}

export default PishkhanCard
