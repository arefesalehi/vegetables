// 'use client'
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
// import ProductCard from '@/components/modules/ProductCards/ProductCard';

// import styles from '../../../../styles/uniqueProduct.module.css'
// import HeaderTitle from '../HeaderTitle/HeaderTitle';


// const UniqueProduct = ({ products }) => {
 
//   return (
//     <>
//       <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='xl:w-[80%] w-[95%] mt-[65px] sm:mt-0 md:mt-[100px] lg:mt-0 m-auto flex-wrap'>
//         <HeaderTitle title='  محصولات ویژه' />
//         {products?.length > 0 && (    <Swiper
//           style={{


//           }}
//           slidesPerView={1}
//           centeredSlides={false}
//           slidesPerGroupSkip={1}
//           grabCursor={true}
//           keyboard={{
//             enabled: true,
//           }}
//           breakpoints={{
//             1024: {
//               slidesPerView: 4,

//             },
//             768: {
//               slidesPerView: 3,

//             },
//             640: {
//               slidesPerView: 2,

//             }, 320: {
//               slidesPerView: 1,

//             },

//           }}
//           scrollbar={true}
//           navigation={true}

//               autoplay={{ delay: 3000}}
//           loop={false}
//           rewind={true}
//           modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
//           className="mySwiper flex  bestseller-swiper "
//         >
//           {
//             products.map((product) => {
//               return (
//                 <SwiperSlide key={product._id}   >
//                   <ProductCard {...product} />
//                 </SwiperSlide>

//               )
//             })
//           }






//         </Swiper> )}
    
//       </div>



//     </>
//   )
// }

// export default UniqueProduct


// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Navigation } from 'swiper/modules'
// import ProductCard from '@/components/modules/ProductCards/ProductCard'
// import 'swiper/css'

// const UniqueProduct = ({ products }) => {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => setMounted(true), [])

//   if (!mounted || !products || products.length === 0) return null

//   const canAutoplay = products.length > 1

//   return (
//     <Swiper
//       key={products.length}
//       modules={[Autoplay, Navigation]}
//       autoplay={canAutoplay ? { delay: 3000 } : false}
//       // rewind
//       slidesPerView={1}
//       breakpoints={{
//         640: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         1024: { slidesPerView: 4 },
//       }}
//     >
//       {products.map(p => (
//         <SwiperSlide key={p._id}>
//           <ProductCard {...p} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

// export default UniqueProduct




'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from '@/components/modules/ProductCards/ProductCard';

import styles from '../../../../styles/uniqueProduct.module.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { canSwiperLoop } from '@/utils/swiperHelpers';

const UniqueProduct = ({ products }) => {
  const list = products ?? []
  const enableLoop = canSwiperLoop(list.length, 5)

  return (
    <>
   <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom"  className='xl:w-[80%] w-[95%] mt-[65px] sm:mt-0 md:mt-[100px] lg:mt-0 m-auto flex-wrap unique-product-section'>
   <HeaderTitle  title='  محصولات ویژه' />
   {list.length === 0 && (
     <p className="w-full text-center py-10 text-gray-600">محصولی برای نمایش وجود ندارد.</p>
   )}
   {list.length > 0 && (
   <Swiper
     style={{
      
     
    }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}

        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
             
          },
          768: {
            slidesPerView: 3,
            
          },
            640: {
            slidesPerView: 2,
            
          },  320: {
            slidesPerView: 1,
            
          },

        }}
        scrollbar={true}
        navigation={true}
           
   autoplay={{ delay: 3000 }}
          loop={enableLoop}
          rewind={!enableLoop}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper flex"
      >
        {list.map((product) => (
              <SwiperSlide key={product._id}>
              <ProductCard {...product} />
              </SwiperSlide>
        ))}
      </Swiper>
      )}
   </div>



    </>
  )
}

export default UniqueProduct