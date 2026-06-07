'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import swal from 'sweetalert'


const OffForm = () => {
  const [code, setCode] = useState()
  const [percent, setPercent] = useState()
  const [maxUse, setMaxUse] = useState()
  const router =  useRouter()



  const addDiscount = async (e) => {
    e.preventDefault()
    const newCode = {
      code,
      maxUse,
      percent,
    }

    const res = await fetch('/api/discount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCode),
    })

    if (res.status === 200) {
      swal({
        title: 'کد تخفیف جدید با موفقیت ثبت شد',
        icon: 'success',
        buttons: 'ok',
      }).then(() => {
        router.refresh()
      })
    }
  }

  return (
    <>
      <div className="mycontainer  flex  ">
        <div className="w-1/2 mt-20 ml-10">
          <div className="mb-5">
            <label>
              <strong className="mt-2 mb-2">نام کد تخفیف :</strong>
            </label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              className="w-full  pr-3 h-[43px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
        <div className="w-1/2 mt-20">
          <div className="mb-3">
            <label>
              <strong className="mt-2 mb-2">درصد کد تخفیف :</strong>
            </label>
            <input
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
              type="text"
              className="w-full  pr-3 h-[43px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="mycontainer  flex ">
        <div className="w-1/2 m-2  ">
          <div className="mb-5  ml-10">
            <label>
              <strong className="mt-2 mb-2 "> بیشترین تعداد استفاده :</strong>
            </label>
            <input
              value={maxUse}
              onChange={(e) => setMaxUse(e.target.value)}
              type="text"
              className="w-full  pr-3 h-[43px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="mycontainer">
        <button
          onClick={addDiscount}
          type="submit"
          className="bg-[#02693a] text-white h-[43px] rounded-[5px] mt-10 pt-2 w-1/3 pb-2 pr-3 pl-3 mb-3"
        >
          ثبت
        </button>
      </div>
    </>
  )
}

export default OffForm
