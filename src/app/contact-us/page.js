
// import Navbar from '@/components/modules/navbar/Navbar'
// import Detailbar from '@/components/modules/detailBar/Detailbar'
// import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
// import Footer from '@/components/modules/footer/Footer'
// import NewsLetter from '@/components/templates/products/NewsLetter'
// import Map from '@/components/templates/contact-us/Map'
// import ContactForm from '@/components/templates/contact-us/ContactForm'
// const page = () => {
 

//   return (
//     <>
//       <div className="w-full bg-black h-[100px]">
       
//       </div>
//       <Detailbar />
//       <AllBreadCrumb route="تماس با ما" />

//       <div className="w-[80%] m-auto  bg-red-200 flex justify-center items-center ">
//         <div className=" w-full  h-[614px] border  rounded-[20px] mt-20 flex justify-center items-center ">
//           <Map   />
//         </div>
//       </div>

 



//       <ContactForm />

//       <NewsLetter />
//       <Footer />


     
//     </>
//   )
// }

// export default page


'use client';

import dynamic from 'next/dynamic'
import Detailbar from '@/components/modules/detailBar/Detailbar'
import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
import Footer from '@/components/modules/footer/Footer'
import NewsLetter from '@/components/templates/products/NewsLetter'
import ContactForm from '@/components/templates/contact-us/ContactForm'

// 🧭 نقشه را به صورت داینامیک ایمپورت می‌کنیم تا فقط سمت مرورگر رندر شود
const Map = dynamic(() => import('@/components/templates/contact-us/Map'), {
  ssr: false,
})

export default function ContactUsPage() {
  return (
    <>
      {/* نوار بالای صفحه */}
      <div className="w-full bg-black h-[100px]" />

      {/* مسیر صفحه و جزئیات */}
      <Detailbar />
      <AllBreadCrumb route="تماس با ما" />

      {/* بخش نقشه */}
      <div className="w-[80%] m-auto  flex justify-center items-center">
        <div className="w-full z-0 h-[614px] border rounded-[20px] mt-20 flex justify-center items-center">
          <Map />
        </div>
      </div>

      {/* فرم تماس و سایر بخش‌ها */}
      <ContactForm />
      <NewsLetter />
      <Footer />
    </>
  )
}
