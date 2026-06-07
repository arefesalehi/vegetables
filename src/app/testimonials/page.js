import React from 'react'
import Detailbar from '@/components/modules/detailBar/Detailbar'
import Navbar from '@/components/modules/navbar/Navbar'
import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
import AboutBox from '@/components/templates/about-us/AboutBox'
import NewsLetter from '@/components/templates/products/NewsLetter'
import Footer from '@/components/modules/footer/Footer'
const page = () => {
  return (
    <>
      <div className="w-full bg-black h-[100px]">
        {/* <Navbar /> */}
      </div>
      <Detailbar />
      <AllBreadCrumb route="نظر مشتریان" />
      <div className="mycontainer">
        <AboutBox
          title="مشتریان خوشحال چه می گویند
"
          desc="ببینید چرا هزاران مشتری ما را دوست دارند!
"
        />
      </div>

      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default page
