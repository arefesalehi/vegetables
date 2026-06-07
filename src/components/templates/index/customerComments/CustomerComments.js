// 'use client'

// import Image from 'next/image'
// import { FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa'
// import React, { useRef, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import { Autoplay, Pagination } from 'swiper/modules'
// import { FaArrowLeftLong } from 'react-icons/fa6'
// import styles from '../../../../styles/Banner.module.css'

// const Swiper = dynamic(
//   () => import('swiper/react').then(mod => mod.Swiper),
//   { ssr: false }
// )

// const SwiperSlide = dynamic(
//   () => import('swiper/react').then(mod => mod.SwiperSlide),
//   { ssr: false }
// )
// const CustomerComments = ({ comments }) => {
//     const [mounted, setMounted] = useState(false)
  
//     useEffect(() => {
//       setMounted(true)
//     }, [])
  
//     if (!mounted) return null
//     const canAutoPlay = items.length > 1
//   return (
//     <>
//       <div
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         className="w-full  sm:mt-[80px] lg:w-full md:w-full h-[500px] md:h-[850px] lg:h-[500px] sm:h-[800px] lg:flex lg:justify-between md:flex  md:justify-center md:flex-col  lg:items-start lg:flex-row  flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap   md:mr-[15%] lg:mr-[50px] xl:mr-[10%] "
//       >
//         <div className="lg:w-[30%]  md:justify-center md:items-center lg:justify-start lg:items-start md:w-[90%] flex flex-col lg:mt-40  md:mt-10 lg:mr-0  md:mr-[-80px]  ">
//           <h1 className="text-[#247654] lg:text-5xl md:text-4xl sm:text-3xl text-2xl flex justify-center  font-bold md:font-normal    md:justify-center ">پیشنهاد ویژه</h1>
//           <p className="lg:font-bold md:font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg justify-center md:justify-center  pt-5 flex ">
//             برگر با پیاز و چیپس سیب زمینی
//           </p>
//           <p className=" lg:text-xl md:text-lg p-10 sm:px-5  mt-10  text-gray-600 ">
//             <strong> در هر وعده:</strong> 510 کالری؛ چربی 26 گرم؛ چربی اشباع شده
//             10 گرم؛ کلسترول 88 میلی گرم; سدیم 883 میلی گرم; پروتئین 31 گرم؛
//             کربوهیدرات 36 گرم؛ شکر 9 گرم؛ فیبر 1 گرم؛ آهن 4 میلی گرم؛ کلسیم 97
//             میلی گرم
//           </p>

//           <div className="flex mt-20 md:mb-20 lg:mb-0 md:justify-center items-center justify-center">
//             <button
//               type=""
//               className=" pt-3 lg:w-[160px] md:w-[220px]  pb-3 pr-7 pl-7  flex rounded-[30px]  bg-[#007a4c] justify-center items-center text-white"
//             >
//               سفارش دهید
//               <div className="w-[40px] ml-[-11px] hidden  hover:bg-[#7dc70a] mr-5 sm:flex justify-center  items-center h-[40px] rounded-[50%] bg-white">
//                 <FaArrowLeftLong className="text-[#007a4c] " />
//               </div>
//             </button>
//             <p className="sm:text-4xl text-2xl text-[#fb6f09] font-bold mr-10 ">125 ت</p>
//             <p className="sm:text-3xl text-xl text-[#d7d7d7] font-bold mr-10 line-through ">
//               250 تومان
//             </p>
//           </div>
//         </div>

//         <div className=" md:w-[100%] sm:w-[100%]  ">
//           <Image
//             src="/images/Capture54565.PNG"
//             width={1150}
//             height={700}
//             alt="pic"
//           />
//         </div>
//       </div>







//       <div
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         className="w-full lg:h-[470px] xl:h-[720px] md:mt-[100px] xl:mt-[295px] lg:mt-[100px] md:h-[1000px] flex justify-between flex-col lg:flex-row    "
//       >
//         <div className="lg:w-1/2 md:w-[90%] mt-20 md:mt-0 md:margin-auto lg:margin-0 h-[300px] sm:h-[490px] xl:h-[700px]  ">
//           <Image
//             src="/images/Capture620.PNG"
//             width={850}
//             height={700}
//             alt="pic"
//             className=' '
//           />
//         </div>

//         <div className=" w-full sm:w-1/2 mt-[35px] sm:mt-[23px] sm:m-auto    xl:ml-0  lg:mt-[52px] xl:mt-[120px] h-[320px] sm:h-[490px] xl:h-[700px]  ">
//           <h1 className="text-[#247654] text-5xl md:mt-20 lg:mt-0 flex justify-center items-center w-[370px] md:w-[400px] m-auto">
//             نظرات مشتریان
//           </h1>
//           <h3 className="font-bold text-2xl pt-10 flex justify-center items-center  w-[400px] m-auto">
//             مشتری درباره ما چه می گوید
//           </h3>
// {comments?.length > 0 && ( <Swiper
//             style={{
//               '--swiper-pagination-color': '#017446',
//               '--swiper-pagination-bullet-size': '10px',
//               '--swiper-pagination-bullet-horizontal-gap': '15px',
//             }}
//             spaceBetween={30}
//             pagination={{
//               clickable: true,
//             }}
//             loop={false}
//               autoplay={canAutoPlay ? { delay: 2000, disableOnInteraction: false } : false}
//             rewind={true}
//             modules={[Pagination, Autoplay]}
//             className={`commentswiper ${styles.myswiper}`}
//           >
//             {comments.map((comment) => {
//               return (
//                 <SwiperSlide key={comment._id} >
//                   <div className="flex w-[350px]  lg:w-[500px] md:w-auto  justify-center items-center h-auto pb-10 md:pb-20 p-5 md:mr-0   text-xl">
//                     <FaQuoteRight className="  h-[200px]  text-[#cccccc] md:mr-[-100px] xl:mr-0" />
//                     <h3 className='flex flex-col   text-justify'>
                     
                    
//                       {comment.body}
//                       <span className="flex mt-5 mb-5 justify-center items-center ">
//                         {
//                           new Array(comment.score).fill(0).map((item, index)=>{
//                             return (
//                               <FaStar key={index}  className='text-yellow-400'  />
//                             )
//                           })
//                         }
//                             {
//                           new Array(5-comment.score).fill(0).map((item, index)=>{
//                             return (
//                               <FaRegStar key={index}  className='text-yellow-400'/>
//                             )
//                           })
//                         }
//                       </span>
//                       <p className="flex mt-5 mb-5 justify-center items-center ">
//                         {comment.username}- مشتری
//                       </p>
//                     </h3>
//                   </div>
//                 </SwiperSlide>
//               )
//             })}
//           </Swiper>)}
         
//         </div>
//       </div>
//     </>
//   )
// }

// export default CustomerComments


// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
// import 'swiper/css'

// const CustomerComments = ({ comments }) => {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => setMounted(true), [])

//   if (!mounted || !comments || comments.length === 0) return null

//   const canAutoplay = comments.length > 1

//   return (
//     <Swiper
//       key={comments.length}
//       modules={[Autoplay, Pagination]}
//       autoplay={canAutoplay ? { delay: 2000 } : false}
//       // loop={false}
//       // rewind={true}
//       pagination={{ clickable: true }}
//     >
//       {comments.map(c => (
//         <SwiperSlide key={c._id}>
//           {c.body}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

// export default CustomerComments



'use client'

import Image from 'next/image'
import { FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaArrowLeftLong } from 'react-icons/fa6'
import styles from '../../../../styles/Banner.module.css'
import { canSwiperLoop } from '@/utils/swiperHelpers'

const CustomerComments = ({ comments }) => {
  const enableLoop = canSwiperLoop(comments?.length ?? 0, 2)

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full  sm:mt-[80px] lg:w-full md:w-full h-[500px] md:h-[850px] lg:h-[500px] sm:h-[800px] lg:flex lg:justify-between md:flex  md:justify-center md:flex-col  lg:items-start lg:flex-row  flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap   md:mr-[15%] lg:mr-[50px] xl:mr-[10%] "
      >
        <div className="lg:w-[30%]  md:justify-center md:items-center lg:justify-start lg:items-start md:w-[90%] flex flex-col lg:mt-40  md:mt-10 lg:mr-0  md:mr-[-80px]  ">
          <h1 className="text-[#247654] lg:text-5xl md:text-4xl sm:text-3xl text-2xl flex justify-center  font-bold md:font-normal    md:justify-center ">پیشنهاد ویژه</h1>
          <p className="lg:font-bold md:font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg justify-center md:justify-center  pt-5 flex ">
            برگر با پیاز و چیپس سیب زمینی
          </p>
          <p className=" lg:text-xl md:text-lg p-10 sm:px-5  mt-10  text-gray-600 ">
            <strong> در هر وعده:</strong> 510 کالری؛ چربی 26 گرم؛ چربی اشباع شده
            10 گرم؛ کلسترول 88 میلی گرم; سدیم 883 میلی گرم; پروتئین 31 گرم؛
            کربوهیدرات 36 گرم؛ شکر 9 گرم؛ فیبر 1 گرم؛ آهن 4 میلی گرم؛ کلسیم 97
            میلی گرم
          </p>

          <div className="flex mt-20 md:mb-20 lg:mb-0 md:justify-center items-center justify-center">
            <button
              type=""
              className=" pt-3 lg:w-[160px] md:w-[220px]  pb-3 pr-7 pl-7  flex rounded-[30px]  bg-[#007a4c] justify-center items-center text-white"
            >
              سفارش دهید
              <div className="w-[40px] ml-[-11px] hidden  hover:bg-[#7dc70a] mr-5 sm:flex justify-center  items-center h-[40px] rounded-[50%] bg-white">
                <FaArrowLeftLong className="text-[#007a4c] " />
              </div>
            </button>
            <p className="sm:text-4xl text-2xl text-[#fb6f09] font-bold mr-10 ">125 ت</p>
            <p className="sm:text-3xl text-xl text-[#d7d7d7] font-bold mr-10 line-through ">
              250 تومان
            </p>
          </div>
        </div>

        <div className=" md:w-[100%] sm:w-[100%]  ">
          <Image
            src="/images/Capture54565.PNG"
            width={1150}
            height={700}
            alt="pic"
          />
        </div>
      </div>







      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full lg:h-[470px] xl:h-[720px] md:mt-[100px] xl:mt-[295px] lg:mt-[100px] md:h-[1000px] flex justify-between flex-col lg:flex-row    "
      >
        <div className="lg:w-1/2 md:w-[90%] mt-20 md:mt-0 md:margin-auto lg:margin-0 h-[300px] sm:h-[490px] xl:h-[700px]  ">
          <Image
            src="/images/Capture620.PNG"
            width={850}
            height={700}
            alt="pic"
            className=' '
          />
        </div>

        <div className=" w-full sm:w-1/2 mt-[35px] sm:mt-[23px] sm:m-auto    xl:ml-0  lg:mt-[52px] xl:mt-[120px] h-[320px] sm:h-[490px] xl:h-[700px]  ">
          <h1 className="text-[#247654] text-5xl md:mt-20 lg:mt-0 flex justify-center items-center w-[370px] md:w-[400px] m-auto">
            نظرات مشتریان
          </h1>
          <h3 className="font-bold text-2xl pt-10 flex justify-center items-center  w-[400px] m-auto">
            مشتری درباره ما چه می گوید
          </h3>

          <Swiper
            style={{
              '--swiper-pagination-color': '#017446',
              '--swiper-pagination-bullet-size': '10px',
              '--swiper-pagination-bullet-horizontal-gap': '15px',
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={enableLoop}
            autoplay={{ delay: 2000 }}
            rewind={!enableLoop}
            modules={[Pagination, Autoplay]}
            className={`commentswiper ${styles.myswiper}`}
          >
            {comments.map((comment) => {
              return (
                <SwiperSlide key={comment._id} >
                  <div className="flex w-[350px]  lg:w-[500px] md:w-auto  justify-center items-center h-auto pb-10 md:pb-20 p-5 md:mr-0   text-xl">
                    <FaQuoteRight className="  h-[200px]  text-[#cccccc] md:mr-[-100px] xl:mr-0" />
                    <h3 className='flex flex-col   text-justify'>
                     
                    
                      {comment.body}
                      <span className="flex mt-5 mb-5 justify-center items-center ">
                        {
                          new Array(comment.score).fill(0).map((item, index)=>{
                            return (
                              <FaStar key={index}  className='text-yellow-400'  />
                            )
                          })
                        }
                            {
                          new Array(5-comment.score).fill(0).map((item, index)=>{
                            return (
                              <FaRegStar key={index}  className='text-yellow-400'/>
                            )
                          })
                        }
                      </span>
                      <p className="flex mt-5 mb-5 justify-center items-center ">
                        {comment.username}- مشتری
                      </p>
                    </h3>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default CustomerComments
