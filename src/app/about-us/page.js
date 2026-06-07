import Detailbar from '@/components/modules/detailBar/Detailbar'
import React from 'react'
import Navbar from '@/components/modules/navbar/Navbar'
import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
import Footer from '@/components/modules/footer/Footer'
import NewsLetter from '@/components/templates/products/NewsLetter'

import Image from 'next/image'
import AboutBox from '@/components/templates/about-us/AboutBox'
import AboutDetail from './AboutDetail'
import AboutWhyUs from './AboutWhyUs'
import OnlineShopping from './OnlineShopping'
import { authUser } from '@/utils/serverHelpers'
import connectToDB from '@/configs/db'
const page =async () => {

  connectToDB()
  const user = await authUser()
  console.log('user about-us=>', user);



  return (
    <>
      <div className="w-full bg-black h-[100px]">
        {/* <Navbar isLogin={ user ? true : false}  /> */}
      </div>
      <Detailbar />
      <AllBreadCrumb route="درباره ما" />

      <div className="w-[80%] m-auto  text-xl ">
      <AboutDetail/>

      <AboutBox   title='  این نکته اصلی فناوری است. از یک طرف اشتهای جاودانگی ایجاد می
                  کند. از طرف دیگر نابودی جهانی را تهدید می کند. فناوری هوس از
                  طبیعت برداشته شده است.'  desc=' عارفه صالحی -نویسنده'/>


      <AboutWhyUs/>
      <OnlineShopping/>
      </div>

      <NewsLetter />
      <Footer />
    </>
  )
}

export default page
