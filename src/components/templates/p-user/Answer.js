import React from 'react'
import Image from 'next/image'



const Answer = async ({ tickets }) => {

  return (
    <>

      <div className="w-full h-[140px] rounded bg-[#02693a] mb-3">
        <div className="flex justify-between ">
          <div className="w-1/2 flex pt-2">
            <div className="w-[60px] mr-3 h-[60px] rounded-[50%] bg-green-400">
              <Image width={100} height={100} src="asd" alt="pic" />
            </div>
            <div className="mr-3  flex flex-col justify-center ">
              <p className="text-white">{tickets.user.name}</p>
              <p className="text-white flex flex-col justify-center ">
                {tickets.user.role === 'ADMIN' ? "ادمین" : "کاربر"}

              </p>
            </div>
          </div>

          <div className="w-1/2 flex  ">
            <div className="w-[300px] justify-end  h-[80px] text-white ml-[20px] justify-left items-center rounded-[10px] flex">
              {new Date(tickets.createdAt).toLocaleDateString('fa-ir')}

            </div>
          </div>
        </div>

        <div className="w-[95%] h-auto pt-2 pb-2 bg-white rounded text-black m-auto flex pl-2 justify-right items-center  pr-2 ">
          {tickets.body}
        </div>
      </div>


    </>
  )
}

export default Answer
