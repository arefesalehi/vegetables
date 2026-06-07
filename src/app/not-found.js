import Footer from '@/components/modules/footer/Footer'
import React from 'react'
import Navbar from '@/components/modules/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { authUser } from '@/utils/serverHelpers'

const notFound = async() => {
  const user = await authUser()
  return (
    <>
      <div className='w-full bg-black h-[100px]'>
    {/* <Navbar  isLogin={user ? true : false}  /> */}
    </div>
       <div className="flex justify-center items-center">
        <Image
          width={500}
          height={400}
          className=" mt-[50px]"
          src='/images/404-error-page.gif'
          alt="404-page"
        />
      </div>
      <div>
        <p className="text-center font-bold mt-10 text-3xl mb-4">
          صفحه مورد نظر یافت نشد
        </p>
        <Link
          href="/"
          className="text-center  flex justify-center mb-20 font-bold  underline underline-offset-8 text-2xl"
        >
          برگشت به صفحه اصلی
        </Link>
      </div>

      <Footer/>


    </>
  )
}

export default notFound