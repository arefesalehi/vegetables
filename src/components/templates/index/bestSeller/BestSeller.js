// // 'use client'

// // import HeaderTitle from '../HeaderTitle/HeaderTitle'
// // import ProductCard from '@/components/modules/ProductCards/ProductCard'

// // import React, { useRef, useState } from 'react'
// // import { Swiper, SwiperSlide } from 'swiper/react'
// // import 'swiper/css'
// // import 'swiper/css/scrollbar'
// // import 'swiper/css/navigation'
// // import 'swiper/css/pagination'
// // import { Keyboard, Scrollbar, Navigation, Pagination, Grid, Autoplay } from 'swiper/modules'
// // import 'swiper/css/grid';
// // import styles from '../../../../styles/bestseller.module.css'

// // const Swiper = dynamic(
// //   () => import('swiper/react').then(mod => mod.Swiper),
// //   { ssr: false }
// // )

// // const SwiperSlide = dynamic(
// //   () => import('swiper/react').then(mod => mod.SwiperSlide),
// //   { ssr: false }
// // )
// // const BestSeller = ({ products, user }) => {
// //   const [mounted, setMounted] = useState(false)

// //   useEffect(() => {
// //     setMounted(true)
// //   }, [])

// //   if (!mounted) return null
// //   const canAutoPlay = items.length > 1
// //   return (
// //     <div data-aos="fade-up" className={`w-full xl:w-[80%] md:mt-20 lg:mt-0 sm:mt-20  m-auto best-seller-wrapper relative`} data-aos-anchor-placement="top-bottom">
// //       <HeaderTitle title="پرفروش ترین ها" />

// //       <div className="w-[98%] m-auto   flex flex-wrap flex-row    ">
// //         {products?.length > 0 && (
          
// //        <>
       
// //           <Swiper
// //           slidesPerView={2}
// //           grid={{
// //             rows: 2,
// //             fill: 'row', // ردیفی پر می‌کنه (بالا به پایین)
// //           }}
// //           spaceBetween={10}
// //           pagination={false}
// //           navigation={true}
// //           breakpoints={{
// //             320: {
// //               slidesPerView: 1,
// //               grid: {
// //                 rows: 2,
// //               },
// //             },
// //             640: {
// //               slidesPerView: 2,
// //               grid: {
// //                 rows: 2,
// //               },
// //             },
// //             768: {
// //               slidesPerView: 3,
// //               grid: {
// //                 rows: 2,
// //               },
// //             },
// //             1024: {
// //               slidesPerView: 4,
// //               grid: {
// //                 rows: 2,
// //               },
// //             },
// //           }}

// //               autoplay={canAutoPlay ? { delay: 3000, disableOnInteraction: false } : false}
// //           loop={false}
// //           rewind={true}
// //           modules={[Grid, Navigation, Pagination, Scrollbar, Autoplay]}
// //           centeredSlides={false}
// //           slidesPerGroupSkip={8}
// //           grabCursor={true}
// //           className={`mySwiper  bestseller-swiper relative z-50 ${styles.bullet} `}
// //         >

// //           {
// //             products.map((product) => {
// //               return (
// //                 < >
// //                   <SwiperSlide key={product._id} >
// //                     <ProductCard   {...product} user={user} />
// //                   </SwiperSlide>
                 
// //                 </>
// //               )
// //             })
// //           }

          



// //         </Swiper>
// //        <style jsx global>{`
// //                            .best-seller-wrapper .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
// //                              display: none !important;
// //                            }
// //                       `}</style>
// //        </>
// //       )}



// //       </div>
// //     </div>
// //   )
// // }

// // export default BestSeller


// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Grid, Autoplay } from 'swiper/modules'
// import ProductCard from '@/components/modules/ProductCards/ProductCard'
// // import 'swiper/css'

// const BestSeller = ({ products, user }) => {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => setMounted(true), [])

//   if (!mounted || !products || products.length === 0) return null

//   const canAutoplay = products.length > 1

//   return (
//     <Swiper
//       key={products.length}
//       modules={[Grid, Autoplay]}
//       slidesPerView={2}
//       grid={{ rows: 2 }}
//       autoplay={canAutoplay ? { delay: 3000 } : false}
//       // rewind
//     >
//       {products.map(p => (
//         <SwiperSlide key={p._id}>
//           <ProductCard {...p} user={user} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

// export default BestSeller




'use client'

import HeaderTitle from '../HeaderTitle/HeaderTitle'
import ProductCard from '@/components/modules/ProductCards/ProductCard'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Scrollbar, Navigation, Pagination, Grid, Autoplay } from 'swiper/modules'
import 'swiper/css/grid';
import styles from '../../../../styles/bestseller.module.css'
import { canSwiperLoop } from '@/utils/swiperHelpers'

const BestSeller = ({ products, user }) => {
  const list = products ?? []
  const enableLoop = canSwiperLoop(list.length, 8)

  return (
    <div data-aos="fade-up" className={`w-full xl:w-[80%] md:mt-20 lg:mt-0 sm:mt-20  m-auto best-seller-wrapper relative`} data-aos-anchor-placement="top-bottom">
      <HeaderTitle title="پرفروش ترین ها" />

      <div className="w-[98%] m-auto flex flex-wrap flex-row min-h-[200px]">
        {list.length === 0 && (
          <p className="w-full text-center py-10 text-gray-600">محصولی در دیتابیس ثبت نشده است.</p>
        )}
        {list.length > 0 && (
        <Swiper
          slidesPerView={2}
          grid={{
            rows: list.length >= 4 ? 2 : 1,
            fill: 'row',
          }}
          spaceBetween={10}
          pagination={false}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: {
                rows: 2,
              },
            },
            640: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
            },
            768: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
            },
            1024: {
              slidesPerView: 4,
              grid: {
                rows: 2,
              },
            },
          }}
              
 autoplay={{ delay: 3000 }}
          loop={enableLoop}
          rewind={!enableLoop}
          modules={[Grid, Navigation, Pagination, Scrollbar, Autoplay]}
          centeredSlides={false}
          slidesPerGroupSkip={8}
          grabCursor={true}
          className={`bestseller-swiper relative z-50 ${styles.bullet}`}
        >
          {list.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard {...product} user={user} />
            </SwiperSlide>
          ))}



        </Swiper>
        )}
        <style jsx global>{`
          .best-seller-wrapper .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
            display: none !important;
          }
        `}</style>

      </div>
    </div>
  )
}

export default BestSeller



