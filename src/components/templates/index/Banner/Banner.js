// 'use client'
// import dynamic from "next/dynamic";
// import React, { useRef, useState } from 'react'
// import { useEffect } from "react";
// import 'swiper/css'
// import 'swiper/css/pagination'

// import styles from '../../../../styles/Banner.module.css'
// import Image from 'next/image'
// import { FaArrowLeftLong } from 'react-icons/fa6'
// import { FaCaretRight } from 'react-icons/fa'

// import { Navigation, Autoplay, Pagination } from 'swiper/modules'
// const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false })
// const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false })


// const Banner = () => {
//   const [mounted, setMounted] = useState(false)
//   const [swiperReady, setSwiperReady] = useState(false)

//   useEffect(() => setMounted(true), [])

//   if (!mounted) return null

//   return (
//     <>
//       <div className="w-full   xl:h-[1000px] lg:h-[700px] md:h-[600px] sm:h-[640px] h-[560px]  bg-red-500 relative   ">


//         <Swiper
//           className=" lg:h-[700px]  md:h-[600px] sm:h-[640px] h-[560px]  xl:h-[1000px]   "
//           style={{
//             '--swiper-pagination-color': '#017446',
//             '--swiper-pagination-bullet-size': '10px',
//             '--swiper-pagination-bullet-horizontal-gap': '15px',

//           }}
//           spaceBetween={30}
       

//           // navigation={true}
//           modules={[Navigation, Autoplay, Pagination]}
//           loop={false}
//           rewind={true}



//         key="banner-swiper"

//         slidesPerView={1}
//         autoplay={swiperReady ? { delay: 3000 } : false}
//         pagination={{ clickable: true }}
//         onInit={() => setTimeout(() => setSwiperReady(true), 100)}

//         // className={styles.myswiper}
//         >

//           <SwiperSlide className=" overflow-hidden">
//             <div className="w-full     h-[560px] sm:h-[640px]   lg:h-[700px] xl:h-[1000px]   md:h-[600px]   bg-[#fff5e9] flex flex-col  md:flex-row md:justify-center ">
//               <div className="w-full  md:w-[1200px]  lg:pt-[200px] xl:pt-[320px]   md:pt-[50px]  lg:pr-0 xl:pr-[197px]   md:pr-[40px]">

//                 <div className="text-[#c20012] font-bold justify-center text-2xl  sm:text-3xl sm:font-bold lg:w-full md:w-full   flex   sm:justify-center  md:justify-start lg:justify-start  md:text-right lg:text-right md:text-4xl lg:text-7xl pt-[150px] lg:pt-0 md:pr-20 lg:font-bold">
//                   سفارش پیتزا
//                 </div>
//                 <h1 className="  lg:text-7xl md:text-3xl md:pr-20 sm:pt-5 lg:w-full md:w-full   flex justify-center md:justify-start lg:justify-start text-2xl font-bold ">تحویل سریع</h1>
//                 <p className="lg:text-2xl  text-center pr-5 pl-5 sm:pr-0 sm:pl-0 md:text-lg  text-xl  sm:text-lg md:pr-20 pt-8 lg:w-full md:w-full   flex justify-center md:justify-start lg:justify-start">
//                   با کیفیت ترین و خوشمزه ترین پیتزای دنیا را دریافت کنید. می‌توانید همه آن‌ها را در بوتانیکا تهیه کنید.
//                 </p>
//                 <div className="flex mt-10 lg:w-full md:w-full   justify-center md:justify-start lg:justify-start">
//                   <button
//                     type="button"
//                     className=" pr-3 pl-3 lg:pt-3 lg:pb-3 lg:pr-7 md:text-lg lg:pl-7 md:pt-3 md:pb-3 md:pr-7 md:mr-20 md:pl-7 flex rounded-[30px] bg-[#007a4c] justify-center items-center text-white"
//                   >
//                     سفارش دهید
//                     <div className="w-[25px] h-[25px] sm:w-[40px]  lg:ml-[-11px] md:ml-[-11px] ml-[-5px]  hover:bg-[#7dc70a] mr-5 flex justify-center items-center sm:h-[40px] rounded-[50%] bg-white">
//                       <FaArrowLeftLong className="text-[#007a4c]" />
//                     </div>
//                   </button>
//                   <div className=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] circle mr-5 mt-1 rounded-[50%] flex justify-center items-center bg-white">
//                     <FaCaretRight />
//                   </div>
//                   <p className="flex cursor-pointer justify-center  items-center md:text-lg mr-5 text-lg sm:text-xl font-bold">
//                     چگونه سفارش دهیم
//                   </p>
//                 </div>
//               </div>

//               <div className="w-full lg:w-[100%] lg:pt-20  sm:pr-[40px]   md:ml-0 lg:ml-[-110px]">
//                 <Image
//                   alt="pic"
//                   width={1008}
//                   height={823}

//                   src="/images/img3-1-rtl (1).png"
//                   className="  pt-5  md:ml-20 md:pt-[200px] lg:pt-[100px]  lg:w-full md:w-full w-[40%]  sm:w-1/2 m-auto  flex justify-center md:justify-start lg:justify-start"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide className="">
//             <div className="w-full sm:h-[640px] xl:h-[1000px] lg:h-[700px] md:h-[600px]   h-[560px] flex flex-col  md:flex-row md:justify-center bg-[#dbe3e6]     ">
//               <span className=" pt-40  leading-6  flex flex-col items-center md:items-start md:flex md:flex-col  lg:items-start   xl:pt-[300px] lg:pt-40 md:pt-64  lg:w-[50%] md:pr-10 l lg:md-0  xl:pr-[197px] lg:pr-5 ">
//                 <h1 className=" lg:text-6xl lg:pt-40 xl:pt-0 md:text-3xl text-2xl  sm:pt-5 font-semibold " >
//                   {' '}
//                   لذت ببرید از
//                   <br />
//                   <p className="mt-5 md:text-4xl"> غذای خوشمزه</p>
//                 </h1>
//                 <p className="md:text-lg p-3 sm:p-0 sm:px-10 md:px-0 text-justify text-lg sm:pt-8 md:w-[80%] lg:w-[100%] pr-20 pl-20 md:pr-0 md:pl-0 ">
//                   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
//                   با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
//                   مجله در ستون و سطرآنچنان که لازم است، کاربردی می باشد
//                 </p>

//                 <div className="flex lg:mt-10   lg:w-full md:w-full   justify-center md:justify-start lg:justify-start">
//                   <button
//                     type="button"
//                     className=" pr-3 pl-3 lg:pt-3 lg:pb-3 lg:pr-7 md:text-lg lg:pl-7 md:pt-3 md:pb-3 md:pr-7 md:mr-5 lg:mr-0 md:pl-7 flex rounded-[30px] bg-[#007a4c] justify-center items-center text-white"
//                   >
//                     سفارش دهید
//                     <div className="w-[25px] h-[25px] sm:w-[40px]  lg:ml-[-11px] md:ml-[-11px] ml-[-5px]  hover:bg-[#7dc70a] mr-5 flex justify-center items-center sm:h-[40px] rounded-[50%] bg-white">
//                       <FaArrowLeftLong className="text-[#007a4c]" />
//                     </div>
//                   </button>
//                   <div className=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] circle mr-5 mt-1 rounded-[50%] flex justify-center items-center bg-white">
//                     <FaCaretRight />
//                   </div>
//                   <p className="flex cursor-pointer justify-center  items-center md:text-lg mr-5 text-lg sm:text-xl font-bold">
//                     چگونه سفارش دهیم
//                   </p>
//                 </div>
//               </span>

//               <span className=" w-[30%] m-auto mt-10  xl:right-[-5%] xl:pt-[100px] lg:pt-60  md:pt-64 xl:w-[600px] lg:w-[400px] md:w-[700px] md:ml-20 lg:ml-0   lg:mr-[150px] relative    ">
//                 <Image
//                   width={600}
//                   height={523}
//                   className="relative"
//                   src="/images/chicken.png"
//                   alt='pic'
//                 />

//                 <Image
//                   className="absolute bottom-[13%] left-[30%] w-[50%]  md:absolute xl:bottom-[-5%] xl:right-[-20%] lg:w-[230px] md:w-[120px] xl:w-[265px]  lg:bottom-[-5%] md:bottom-[-10%] xl:left-[100px] lg:left-[80%] md:left-[220px] moving-left "
//                   width={265}
//                   height={233}
//                   src="/images/vegetable (2).png"
//                   alt='pic'
//                 />

//                 <Image
//                   className="absolute md:absolute   bottom-[25%] xl:right-[80%] w-[30%] right-[85%] xl:bottom-[-5%]  lg:bottom-[-5%] lg:w-[100px] xl:w-[180px]   lg:right-[68%]  moving-left md:bottom-[-3%] md:w-[25%] md:right-[78%] "
//                   width={180}
//                   height={200}
//                   src="/images/lemon.png"
//                   alt='pic'
//                 />

//                 <Image
//                   className="absolute md:absolute sm:w-[85px] sm:bottom-[300px] sm:left-[100px]   bottom-[220px]  left-[40px]  w-[50px]  md:bottom-[50%] md:left-[87%] md:w-[30%]   xl:w-[180px] lg:w-[130px]  xl:left-[98%] lg:right-[-30%]  moving-left xl:bottom-[60%] lg:bottom-[55%]"
//                   width={180}
//                   height={200}
//                   src="/images/sale-label-rtl.png"
//                   alt='pic'
//                 />
//               </span>

//             </div>
//           </SwiperSlide>



//           <SwiperSlide className="">
//             <div className="w-full sm:h-[640px]  xl:h-[1000px] lg:h-[700px] md:h-[600px]   h-[640px]  flex-col  md:flex-row md:justify-center bg-white flex   ">
//               <span className="md:w-full xl:w-[57%] flex flex-col m-auto justify-center items-center md:flex-row md:justify-start md:items-start md:block  lg:pt-0  xl:pt-0  md:pt-[14%]  sm:pt-[55px] pt-[45px]  w-[90%] sm:m-auto   xl:pr-[197px] lg:pr-[130px] md:pr-[10%] ">
//                 <h1 className=" xl:text-7xl lg:text-6xl md:text-5xl  text-2xl  md:pt-5  font-semibold ">
//                   {' '}
//                   خوشمزه-لذیذ
//                   <br />
//                   <p className="mt-5 "> سالاد روز</p>
//                 </h1>
//                 <p className="text-lg text-justify mb-2 pt-8 w-[70%]">
//                   سالاد تازه و سالم با دستور آشپز خود ما درست شده است. غذای سالم
//                   و بدون چربی مخصوص کسانی که می خواهند وزن کم کنند
//                 </p>
//                 <div className="flex lg:mt-10  lg:w-full md:w-full   justify-center md:justify-start lg:justify-start">
//                   <button
//                     type="button"
//                     className=" pr-3 pl-3 lg:pt-3 lg:pb-3 lg:pr-7 md:text-lg lg:pl-7 md:pt-3 md:pb-3 md:pr-7 md:mr-20 lg:mr-0 md:pl-7 flex rounded-[30px] bg-[#007a4c] justify-center items-center text-white"
//                   >
//                     سفارش دهید
//                     <div className="w-[25px] h-[25px] sm:w-[40px]  lg:ml-[-11px] md:ml-[-11px] ml-[-5px]  hover:bg-[#7dc70a] mr-5 flex justify-center items-center sm:h-[40px] rounded-[50%] bg-white">
//                       <FaArrowLeftLong className="text-[#007a4c]" />
//                     </div>
//                   </button>
//                   <div className=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] circle mr-5 mt-1 rounded-[50%] flex justify-center items-center bg-gray-100">
//                     <FaCaretRight />
//                   </div>
//                   <p className="flex cursor-pointer justify-center  items-center md:text-lg mr-5 text-lg sm:text-xl font-bold">
//                     چگونه سفارش دهیم
//                   </p>
//                 </div>
//               </span>

//               <span className=" w-[50%] xl:w-[45%]  flex justify-center items-center m-auto  sm:flex sm:justify-center sm:items-center sm:m-auto md:pt-[100px] xl:ml-20  lg:w-[600px] relative  ">
//                 <Image
//                   width={700}
//                   height={523}
//                   src="/images/food-image-rtl.png"
//                   alt='pic'
//                   className='absolute lg:left-[50%] lg:bottom-[-20px] w-[190px] sm:w-[70%] sm:bottom-[-30px] bottom-[24px] md:bottom-[-28px] md:w-[100%]  xl:left-[12%] xl:top-[-130px] md:left-[30%]    '

//                 />

//                 <Image
//                   className="absolute sm:w-[15%]  w-[60px] bottom-[88px] sm:bottom-[-60%] sm:left-[20%]  lg:w-[40%] lg:bottom-[-150px] lg:left-[430px]  md:left-[370px] md:w-[30%] md:top-[65%] md:bottom-[-150px]   xl:w-[50%] xl:top-[50%] xl:right-[-70%] xl:bottom-[-204px] left-[60px]  moving-up"
//                   width={300}
//                   height={323}
//                   src="/images/kiwi-rtl.png"
//                   alt='pic'
//                 />

//                 <Image
//                   className="absolute xl:absolute  left-[-120px] bottom-[-65px]  xl:left-[-20%] xl:bottom-[-93%] xl:w-[60%] w-[60px] sm:w-[30%] sm:bottom-[-90%] sm:left-[-50%] m:w-[30%]  lg:w-[74%] lg:bottom-[-207px] lg:left-[-110px]  md:left-[-60px] md:bottom-[-185px] md:w-[200px]   moving-up"
//                   width={400}
//                   height={323}
//                   src="/images/lettuce-rtl.png"
//                   alt='pic'
//                 />

//                 <Image
//                   className="absolute xl:bottom-[271px] bottom-[80px]  left-[-70px]   xl:w-[35%] w-[60px] xl:left-[-145px]  lg:bottom-[225px] lg:left-[60px] lg:w-[50%]  sm:w-[10%] sm:bottom-[90%] sm:left-[-30%] md:bottom-[147px] md:left-[36px] md:w-[60px]  moving-up"
//                   width={230}
//                   height={250}
//                   src="/images/orange-rtl (1).png"
//                   alt='pic'
//                 />
//               </span>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   )
// }

// export default Banner


'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '../../../../styles/Banner.module.css'
import Image from 'next/image'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaCaretRight } from 'react-icons/fa'

import { Navigation, Autoplay, Pagination } from 'swiper/modules'
const Banner = () => {
  return (
    <>
      <div className="w-full   xl:h-[1000px] lg:h-[700px] md:h-[600px] sm:h-[640px] h-[560px]  bg-red-500 relative   ">
        <Swiper
          className=" lg:h-[700px]  md:h-[600px] sm:h-[640px] h-[560px]  xl:h-[1000px]   "
          style={{
            '--swiper-pagination-color': '#017446',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '15px',

          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}

          // navigation={true}
          modules={[Navigation, Autoplay , Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          rewind={false}
        
        // className={styles.myswiper}
        >

          <SwiperSlide className=" overflow-hidden">
            <div className="w-full     h-[560px] sm:h-[640px]   lg:h-[700px] xl:h-[1000px]   md:h-[600px]   bg-[#fff5e9] flex flex-col  md:flex-row md:justify-center ">
              <div className="w-full  md:w-[1200px]  lg:pt-[200px] xl:pt-[320px]   md:pt-[50px]  lg:pr-0 xl:pr-[197px]   md:pr-[40px]">

                <div className="text-[#c20012] font-bold justify-center text-2xl  sm:text-3xl sm:font-bold lg:w-full md:w-full   flex   sm:justify-center  md:justify-start lg:justify-start  md:text-right lg:text-right md:text-4xl lg:text-7xl pt-[150px] lg:pt-0 md:pr-20 lg:font-bold">
                  سفارش پیتزا
                </div>
                <h1 className="  lg:text-7xl md:text-3xl md:pr-20 sm:pt-5 lg:w-full md:w-full   flex justify-center md:justify-start lg:justify-start text-2xl font-bold ">تحویل سریع</h1>
                <p className="lg:text-2xl  text-center pr-5 pl-5 sm:pr-0 sm:pl-0 md:text-lg  text-xl  sm:text-lg md:pr-20 pt-8 lg:w-full md:w-full   flex justify-center md:justify-start lg:justify-start">
                  با کیفیت ترین و خوشمزه ترین پیتزای دنیا را دریافت کنید. می‌توانید همه آن‌ها را در بوتانیکا تهیه کنید.
                </p>
                <div className="flex mt-10 lg:w-full md:w-full   justify-center md:justify-start lg:justify-start">
                  <button
                    type="button"
                    className=" pr-3 pl-3 lg:pt-3 lg:pb-3 lg:pr-7 md:text-lg lg:pl-7 md:pt-3 md:pb-3 md:pr-7 md:mr-20 md:pl-7 flex rounded-[30px] bg-[#007a4c] justify-center items-center text-white"
                  >
                    سفارش دهید
                    <div className="w-[25px] h-[25px] sm:w-[40px]  lg:ml-[-11px] md:ml-[-11px] ml-[-5px]  hover:bg-[#7dc70a] mr-5 flex justify-center items-center sm:h-[40px] rounded-[50%] bg-white">
                      <FaArrowLeftLong className="text-[#007a4c]" />
                    </div>
                  </button>
                  <div className=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] circle mr-5 mt-1 rounded-[50%] flex justify-center items-center bg-white">
                    <FaCaretRight />
                  </div>
                  <p className="flex cursor-pointer justify-center  items-center md:text-lg mr-5 text-lg sm:text-xl font-bold">
                    چگونه سفارش دهیم
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[100%] lg:pt-20  sm:pr-[40px]   md:ml-0 lg:ml-[-110px]">
                <Image
                  alt="pic"
                  width={1008}
                  height={823}

                  src="/images/imgg.png"
                  className="  pt-5  md:ml-20 md:pt-[200px] lg:pt-[100px]  lg:w-full md:w-full w-[40%]  sm:w-1/2 m-auto  flex justify-center md:justify-start lg:justify-start"
                />
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide className="">
            <div className="w-full sm:h-[640px] xl:h-[1000px] lg:h-[700px] md:h-[600px]   h-[560px] flex flex-col  md:flex-row md:justify-center bg-[#dbe3e6]     ">
              <span className=" pt-40  leading-6  flex flex-col items-center md:items-start md:flex md:flex-col  lg:items-start   xl:pt-[300px] lg:pt-40 md:pt-64  lg:w-[50%] md:pr-10 l lg:md-0  xl:pr-[197px] lg:pr-5 ">
                <h1 className=" lg:text-6xl lg:pt-40 xl:pt-0 md:text-3xl text-2xl  sm:pt-5 font-semibold " >
                  {' '}
                  لذت ببرید از
                  <br />
                  <p className="mt-5 md:text-4xl"> غذای خوشمزه</p>
                </h1>
                <p className="md:text-lg p-3 sm:p-0 sm:px-10 md:px-0 text-justify text-lg sm:pt-8 md:w-[80%] lg:w-[100%] pr-20 pl-20 md:pr-0 md:pl-0 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، کاربردی می باشد
                </p>

                <div className="flex lg:mt-10   lg:w-full md:w-full   justify-center md:justify-start lg:justify-start">
                  <button
                    type="button"
                    className=" pr-3 pl-3 lg:pt-3 lg:pb-3 lg:pr-7 md:text-lg lg:pl-7 md:pt-3 md:pb-3 md:pr-7 md:mr-5 lg:mr-0 md:pl-7 flex rounded-[30px] bg-[#007a4c] justify-center items-center text-white"
                  >
                    سفارش دهید
                    <div className="w-[25px] h-[25px] sm:w-[40px]  lg:ml-[-11px] md:ml-[-11px] ml-[-5px]  hover:bg-[#7dc70a] mr-5 flex justify-center items-center sm:h-[40px] rounded-[50%] bg-white">
                      <FaArrowLeftLong className="text-[#007a4c]" />
                    </div>
                  </button>
                  <div className=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] circle mr-5 mt-1 rounded-[50%] flex justify-center items-center bg-white">
                    <FaCaretRight />
                  </div>
                  <p className="flex cursor-pointer justify-center  items-center md:text-lg mr-5 text-lg sm:text-xl font-bold">
                    چگونه سفارش دهیم
                  </p>
                </div>
              </span>

              <span className=" w-[30%] m-auto mt-10  xl:right-[-5%] xl:pt-[100px] lg:pt-60  md:pt-64 xl:w-[600px] lg:w-[400px] md:w-[700px] md:ml-20 lg:ml-0   lg:mr-[150px] relative    ">
                <Image
                  width={600}
                  height={523}
                  className="relative"
                  src="/images/chicken.png"
                  alt='pic'
                />

                <Image
                  className="absolute bottom-[13%] left-[30%] w-[50%]  md:absolute xl:bottom-[-5%] xl:right-[-20%] lg:w-[230px] md:w-[120px] xl:w-[265px]  lg:bottom-[-5%] md:bottom-[-10%] xl:left-[100px] lg:left-[80%] md:left-[220px] moving-left "
                  width={265}
                  height={233}
                  src="/images/vegetablee.png"
                  alt='pic'
                />

                <Image
                  className="absolute md:absolute   bottom-[25%] xl:right-[80%] w-[30%] right-[85%] xl:bottom-[-5%]  lg:bottom-[-5%] lg:w-[100px] xl:w-[180px]   lg:right-[68%]  moving-left md:bottom-[-3%] md:w-[25%] md:right-[78%] "
                  width={180}
                  height={200}
                  src="/images/lemon.png"
                  alt='pic'
                />

                <Image
                  className="absolute md:absolute sm:w-[85px] sm:bottom-[300px] sm:left-[100px]   bottom-[220px]  left-[40px]  w-[50px]  md:bottom-[50%] md:left-[87%] md:w-[30%]   xl:w-[180px] lg:w-[130px]  xl:left-[98%] lg:right-[-30%]  moving-left xl:bottom-[60%] lg:bottom-[55%]"
                  width={180}
                  height={200}
                  src="/images/sale-label-rtl.png"
                  alt='pic'
                />
              </span>

            </div>
          </SwiperSlide>



          <SwiperSlide className="">
            <div className="w-full sm:h-[640px]  xl:h-[1000px] lg:h-[700px] md:h-[600px]   h-[640px]  flex-col  md:flex-row md:justify-center bg-white flex   ">
              <span className="md:w-full xl:w-[57%] flex flex-col m-auto justify-center items-center md:flex-row md:justify-start md:items-start md:block  lg:pt-0  xl:pt-0  md:pt-[14%]  sm:pt-[55px] pt-[45px]  w-[90%] sm:m-auto   xl:pr-[197px] lg:pr-[130px] md:pr-[10%] ">
                <h1 className=" xl:text-7xl lg:text-6xl md:text-5xl  text-2xl  md:pt-5  font-semibold ">
                  {' '}
                  خوشمزه-لذیذ
                  <br />
                  <p className="mt-5 "> سالاد روز</p>
                </h1>
                <p className="text-lg text-justify mb-2 pt-8 w-[70%]">
                  سالاد تازه و سالم با دستور آشپز خود ما درست شده است. غذای سالم
                  و بدون چربی مخصوص کسانی که می خواهند وزن کم کنند
                </p>
                <div className="flex lg:mt-10  lg:w-full md:w-full   justify-center md:justify-start lg:justify-start">
                  <button
                    type="button"
                    className=" pr-3 pl-3 lg:pt-3 lg:pb-3 lg:pr-7 md:text-lg lg:pl-7 md:pt-3 md:pb-3 md:pr-7 md:mr-20 lg:mr-0 md:pl-7 flex rounded-[30px] bg-[#007a4c] justify-center items-center text-white"
                  >
                    سفارش دهید
                    <div className="w-[25px] h-[25px] sm:w-[40px]  lg:ml-[-11px] md:ml-[-11px] ml-[-5px]  hover:bg-[#7dc70a] mr-5 flex justify-center items-center sm:h-[40px] rounded-[50%] bg-white">
                      <FaArrowLeftLong className="text-[#007a4c]" />
                    </div>
                  </button>
                  <div className=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] circle mr-5 mt-1 rounded-[50%] flex justify-center items-center bg-gray-100">
                    <FaCaretRight  />
                  </div>
                  <p className="flex cursor-pointer justify-center  items-center md:text-lg mr-5 text-lg sm:text-xl font-bold">
                    چگونه سفارش دهیم
                  </p>
                </div>
              </span>

              <span className=" w-[50%] xl:w-[45%]  flex justify-center items-center m-auto  sm:flex sm:justify-center sm:items-center sm:m-auto md:pt-[100px] xl:ml-20  lg:w-[600px] relative  ">
                <Image
                  width={700}
                  height={523}
                  src="/images/food-image-rtl.png"
                  alt='pic'
                  className='absolute lg:left-[50%] lg:bottom-[-20px] w-[190px] sm:w-[70%] sm:bottom-[-30px] bottom-[24px] md:bottom-[-28px] md:w-[100%]  xl:left-[12%] xl:top-[-130px] md:left-[30%]    '

                />

                <Image
                  className="absolute sm:w-[15%]  w-[60px] bottom-[88px] sm:bottom-[-60%] sm:left-[20%]  lg:w-[40%] lg:bottom-[-150px] lg:left-[430px]  md:left-[370px] md:w-[30%] md:top-[65%] md:bottom-[-150px]   xl:w-[50%] xl:top-[50%] xl:right-[-70%] xl:bottom-[-204px] left-[60px]  moving-up"
                  width={300}
                  height={323}
                  src="/images/kiwi-rtl.png"
                  alt='pic'
                />

                <Image
                  className="absolute xl:absolute  left-[-120px] bottom-[-65px]  xl:left-[-20%] xl:bottom-[-93%] xl:w-[60%] w-[60px] sm:w-[30%] sm:bottom-[-90%] sm:left-[-50%] m:w-[30%]  lg:w-[74%] lg:bottom-[-207px] lg:left-[-110px]  md:left-[-60px] md:bottom-[-185px] md:w-[200px]   moving-up"
                  width={400}
                  height={323}
                  src="/images/lettuce-rtl.png"
                  alt='pic'
                />

                <Image
                  className="absolute xl:bottom-[271px] bottom-[80px]  left-[-70px]   xl:w-[35%] w-[60px] xl:left-[-145px]  lg:bottom-[225px] lg:left-[60px] lg:w-[50%]  sm:w-[10%] sm:bottom-[90%] sm:left-[-30%] md:bottom-[147px] md:left-[36px] md:w-[60px]  moving-up"
                  width={230}
                  height={250}
                  src="/images/orange-rtl (1).png"
                  alt='pic'
                />
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Banner
