'use client'
import { showswal } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import swal from 'sweetalert'

const Sms = ({ hideOtpForm, phone }) => {
  const [code, setCode] = useState()

  const router = useRouter()

  const verifyCode = async () => {
    const res = await fetch('/api/auth/sms/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, code }),
    })

    console.log('res=>', res);
    

    if (res.status === 409) {
      return showswal('کد وارد شده معتبر نمی باشد', 'error', 'تلاش مجدد')
    } else if (res.status === 410) {
      return showswal('کد وارد شده منقضی می باشد', 'error', 'تلاش مجدد')
    } else if (res.status === 200) {
      swal({
        title: 'ثبت نام شما با موفقیت انجام شد',
        icon: 'success',
        buttons: 'ok',
      }).then(() => {
        router.replace('/user-account')
      })
    }
  }

  return (
    <>
      <div className="w-full flex">
        <span className="w-1/2 flex justify-center items-center ">
          <div className="w-[55%] m-auto  h-auto bg-white shadow-2xl pb-10">
            <div className="flex flex-col ">
              <p className="flex justify-center items-center text-2xl mt-10 text-[#00a551] font-bold">
                کد تایید
              </p>
              <span className="flex justify-center items-center text-xl mt-10">
                لطفاً کد تأیید ارسال شده را تایپ کنید
              </span>

              <span className="flex justify-center items-center text-xl mt-10 mb-5">
                {phone}
              </span>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                placeholder="کد را وارد نمایید"
                className="w-[80%] bg-[#f4f4f4] border-[#2cb571]   m-auto rounded-[10px] h-[45px] mt-1 mb-5"
              />

              <button
                onClick={verifyCode}
                className="w-[80%] m-auto h-[45px] bg-[#00a551] text-white mt-5 rounded-[10px]"
              >
                ثبت کد تایید
              </button>

              <p className="flex justify-center items-center mt-10">
                ارسال مجدد کد یکبار مصرف
              </p>

              <p
                onClick={hideOtpForm}
                className="flex justify-center items-center mt-5"
              >
                لغو
              </p>
            </div>
          </div>
        </span>

        <span className="w-1/2 h-full  ">
          <Image
            src="/images/banner-blog1.jpg"
            className="w-full h-screen"
            width={500}
            height={800}
             alt='pic'
          />
        </span>
      </div>
    </>
  )
}

export default Sms
