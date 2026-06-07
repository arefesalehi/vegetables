import Link from 'next/link'
import React from 'react'
import { IoAlert } from 'react-icons/io5'
const UserPanelAlert = ({title , icon, link, to}) => {
  return (
    <div className="h-[65px]  flex  justify-between  pr-10 items-center bg-[#f2f2f2] w-full rounded-b-[8px] border-t-4 border-[#01512c] ">
   <div className='w-full flex '>
   <span className="w-[25px] h-[25px]  bg-[#01512c] flex justify-center items-center rounded-[50%]">
      {icon}
    </span>
    <span> 
      <p className="mr-5 lg:text-xl text-lg">
       {title} (
        <span className="text-[#01512c]">خارج شوید</span>)
      </p>
    </span>
   </div>

   <div className=' w-1/2 pl-10 lg:text-xl text-lg justify-end hidden lg:flex text-[#01512c]'>
    <Link href='tickets/sendTicket'> {link}</Link>
    
   </div>

  
  </div>
  )
}

export default UserPanelAlert