import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <>
      <div className="w-full flex">
        <span className="w-1/2 flex justify-center items-center ">
          <div className="w-[55%] m-auto  h-auto bg-white shadow-2xl pb-10">
            <div className="flex flex-col ">
              <div className="bg-[url('/images/uq-research-coffee-cup-2560x1440.jpg')] pt-14 bg-no-repeat  bg-cover">
                <div className="w-[400px]   h-auto border bg-white rounded-xl m-auto  pb-5  p-4">
                  <input
                    type="text "
                    className="w-full h-[40px] border border-gray-400 rounded-xl  mt-3  outline-none pr-5 "
                    placeholder="ایمیل / شماره همراه"
                  />

                  <button
                    type="submit"
                    className="w-full mt-5  h-[40px] rounded-xl bg-green-500 text-white border"
                  >
                    بازنشانی رمز عبور
                  </button>

                  <Link
                    href={'/login-register'}
                    className="text-center flex justify-center mt-3 text-bold cursor-pointer"
                  >
                    برگشت به ورود
                  </Link>
                </div>
                <Link
                
                  href={'/login-register'}
                  className="text-center text-black flex justify-center mt-2 cursor-pointer"
                >
                  لغو
                </Link>
              </div>
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

export default page
