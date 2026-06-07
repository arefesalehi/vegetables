// 'use client'
// import React, { useRef, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import { Pagination, Navigation, Autoplay } from 'swiper/modules'
// import HeaderTitle from '../HeaderTitle/HeaderTitle'
// import NewsCard from './NewsCard'
// import styles from '../../../../styles/Banner.module.css'




// const LatestNews = ({ newses, user }) => {


//   return (
//     <>
//       <div className=" h-auto  sm:h-[815px] w-full pt-[60px]  sm:pt-0  bg-[#01693A] flex flex-col text-white   ">
//         <HeaderTitle title="آخرین خبرها" />
//         <div
//           className="xl:mr-[210px] pt-28 mr-[2%] ml-[2%] text-black "
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           {
//             newses?.length > 0 && (<Swiper
//               slidesPerView={4}
//               spaceBetween={200}
//               loop={false}
//               pagination={false}
//               key={items.length}
//               autoplay={ { delay: 3000}}

//               rewind={true}
//               modules={[Pagination, Navigation, Autoplay]}
//               className={`mySwiper mr-40 mb-20  ${styles.myswiper} `}

//               style={{
//                 '--swiper-pagination-color': '#ffffff !important',
//                 '--swiper-pagination-bullet-size': '10px',
//                 '--swiper-pagination-bullet-horizontal-gap': '15px',
//               }}

//               breakpoints={{
//                 320: { slidesPerView: 1, spaceBetween: 10 },
//                 480: { slidesPerView: 1, spaceBetween: 15 },
//                 768: { slidesPerView: 2, spaceBetween: 20 },
//                 1024: { slidesPerView: 3, spaceBetween: 10 },
//                 1280: { slidesPerView: 4, spaceBetween: '20%' },
//               }}



//             >

//               {newses.map((news) => {
//                 return (
//                   <SwiperSlide key={news._id}   >
//                     <NewsCard  {...news} user={user} />
//                   </SwiperSlide>
//                 )
//               })}
//             </Swiper>)
//           }

//         </div>
//       </div>
//     </>
//   )
// }

// export default LatestNews

// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import HeaderTitle from '../HeaderTitle/HeaderTitle'
// import NewsCard from './NewsCard'

// const LatestNews = ({ newses, user }) => {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => setMounted(true), [])

//   if (!mounted || !newses || newses.length === 0) return null

//   const canAutoplay = newses.length > 1

//   return (
//     <div className="bg-[#01693A]">
//       <HeaderTitle title="آخرین خبرها" />
//       <Swiper
//         key={newses.length}
//         modules={[Autoplay]}
//         slidesPerView={4}
//         spaceBetween={20}
//         autoplay={canAutoplay ? { delay: 3000, disableOnInteraction: false } : false}
//         breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
//       >
//         {newses.map(news => (
//           <SwiperSlide key={news._id}>
//             <NewsCard {...news} user={user} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

// export default LatestNews





'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import NewsCard from './NewsCard'
import styles from '../../../../styles/Banner.module.css'
import { canSwiperLoop } from '@/utils/swiperHelpers'

const LatestNews = ({ newses, user }) => {
  const enableLoop = canSwiperLoop(newses?.length ?? 0, 5)

  return (
    <>
      <div className=" h-auto  sm:h-[815px] w-full pt-[60px]  sm:pt-0  bg-[#01693A] flex flex-col text-white   ">
        <HeaderTitle title="آخرین خبرها" />
        <div
          className="xl:mr-[210px] pt-28 mr-[2%] ml-[2%] text-black "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={200}
            loop={enableLoop}
            pagination={false}
            autoplay={{ delay: 3000 }}
            rewind={!enableLoop}
            modules={[Pagination, Navigation, Autoplay]}
            className={`mySwiper mr-40 mb-20  ${styles.myswiper} `}

            style={{
              '--swiper-pagination-color': '#ffffff !important',
              '--swiper-pagination-bullet-size': '10px',
              '--swiper-pagination-bullet-horizontal-gap': '15px',
            }}

            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
              1280: { slidesPerView: 4, spaceBetween: '20%' },
            }}

           
         
          >

            {newses.map((news) => {
              return (
                <SwiperSlide key={news._id}   >
                  <NewsCard  {...news} user={user} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default LatestNews




