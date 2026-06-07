import React from 'react'
import Ticket from './Ticket'
import { authUser } from '@/utils/serverHelpers'
import ticketModel from '@/models/ticket'
const AllTickets =async () => {

  const user = await authUser()
  const tickets = await ticketModel.find({user:user._id , isAnswer:false}).populate('department').sort({_id:-1})
  console.log('tickets===>',tickets);
  

  return (
    <>
      {/* <div className="flex  w-full justify-between ml-10 mb-36 mt-10 items-end">
        <div className="flex justify-center items-center">
          <select className="mt-10  w-[200px] outline-none border-solid border-[1px] border-b-2 border-[#02693a]">
            <option value="-1">همه</option>
            <option value="">فرستاده شده</option>
            <option value="">دریافت</option>
          </select>

          <select
            id=""
            className="mt-10 mr-10 w-[200px] outline-none border-solid border-[1px] border-b-2 border-[#02693a]"
          >
            <option value="-1">همه</option>
            <option value="">بسته</option>
            <option value="">پاسخ داده شده</option>
            <option value="">پایان یافته</option>
          </select>

          <select
            id=""
            className="mt-10 mr-10 w-[200px] outline-none border-solid border-[1px] border-b-2 border-[#02693a]"
          >
            <option value="-1">تاریخ پاسخ</option>
            <option value="">تاریخ ایجاد</option>
          </select>
        </div>

        <div>
          <button className="bg-[#02693a] text-white pt-2 pb-2 pr-5 pl-5 rounded ">
            اعمال
          </button>
        </div>
      </div> */}



      <Ticket  tickets={JSON.parse(JSON.stringify(tickets))} />
      
    </>
  )
}

export default AllTickets
