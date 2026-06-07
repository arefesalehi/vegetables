'use client'



import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Scrollbar, Navigation, Pagination, Grid, Autoplay } from 'swiper/modules'
import 'swiper/css/grid';



const ShopSlider = ({ menues }) => {
 
   return (
      <div data-aos="fade-up" className={`w-[80%] m-auto best-seller-wrapper relative`} data-aos-anchor-placement="top-bottom">


         <div className="w-[98%] m-auto    flex flex-wrap flex-row  relative bottom-[80px]  ">
{menues?.length > 0 && (  <Swiper
               slidesPerView={4}
               grid={{
                  rows: 1,
                  fill: 'row', // ردیفی پر می‌کنه (بالا به پایین)
               }}
               spaceBetween={10}
               pagination={false}
               loop={false}
               rewind={true}
              autoplay={{ delay: 3000}}
               // navigation={true}
               breakpoints={{
                  320: {
                     slidesPerView: 1,
                     grid: {
                        rows: 1,
                     },
                  },
                  640: {
                     slidesPerView: 2,
                     grid: {
                        rows: 1,
                     },
                  },
                  768: {
                     slidesPerView: 3,
                     grid: {
                        rows: 1,
                     },
                  },
                  1024: {
                     slidesPerView: 4,
                     grid: {
                        rows: 1,
                     },
                  },
               }}
               modules={[Grid, Navigation, Pagination, Scrollbar, Autoplay]}
               centeredSlides={false}
               slidesPerGroupSkip={8}
               grabCursor={true}
               className={`mySwiper  relative z-50   `}
            >
               {
                  menues.map((menu) => {
                     return (
                        <SwiperSlide key={menu._id} className='w-[300px] h-[400px] ' >
                           <div className='flex justify-center' >

                              <img src={menu.img} alt='pic' className='w-[200px] h-[200px] rounded-[50%] absolute top-[-108]' />

                           </div>
                           <span className='flex justify-center'><p className='pt-[250px] text-start text-xl'>{menu.title}</p></span>

                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>)}
          


         </div>

      </div>
   )
}

export default ShopSlider



// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Grid, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/grid'

// const ShopSlider = ({ menues }) => {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => setMounted(true), [])

//   if (!mounted || !menues || menues.length === 0) return null

//   const canAutoplay = menues.length > 1

//   return (
//     <Swiper
//       key={menues.length}
//       modules={[Grid, Autoplay]}
//       slidesPerView={4}
//       grid={{ rows: 1 }}
//       autoplay={canAutoplay ? { delay: 3000 } : false}
//       // loop={false}
//       // rewind={true}
//     >
//       {menues.map(menu => (
//         <SwiperSlide key={menu._id}>
//           <img src={menu.img} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

// export default ShopSlider
