import React from 'react'
import Link from 'next/link'

const Ticket = ({ tickets }) => {
  return (



    tickets.length > 0 ?

      tickets.map((ticket) => {
        return (
          <>
            <div className="flex w-full m-auto justify-center items-center pr-5 pl-5 mb-2 mt-10 bg-[#02693a] text-white rounded h-[100px]">

              <div className="w-1/2 ">
                <p ><Link className='text-white' href={`/p-user/tickets/answer/${ticket._id}`} >   {ticket.title} </Link></p>
                <button type="" className="mt-3 bg-white text-black p-2 rounded">
                  واحد {ticket.department?.title}
                </button>
              </div>
              <div className="w-1/2  flex flex-col justify-start items-end ">
                <p>{new Date(ticket.createdAt).toLocaleDateString('fa-ir')}</p>
                <p className={`mt-3 p-2 bg-white rounded ${ticket.hasAnswer ? 'text-green-800' : 'text-red-600' }`}> {ticket.hasAnswer === true ? "پاسخ داده شده " : "پاسخ داده نشده "}</p>
              </div>
            </div>
          </>
        )
      }) : <div className="flex w-full m-auto text-xl  justify-center items-center pr-5 pl-5 mb-2 mt-10 bg-red-800 text-white rounded h-[100px]">
        هیچ تیکتی ثبت نشده است
      </div>















  )
}

export default Ticket