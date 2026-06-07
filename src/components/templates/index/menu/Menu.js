

'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import styles from '../../../../styles/menu.module.css'

const Menu = ({ menus = [] }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const canAutoPlay = menus.length > 1

  return (
    <div className="w-full sm:h-[520px] h-auto pb-20 md:pb-0 lg:flex md:flex relative bg-[#02693a]">
      {/* Title section */}
      <div className="w-[25%] m-auto lg:flex lg:flex-col lg:justify-center md:flex md:flex-col md:justify-center lg:items-center md:items-center text-white text-4xl">
        <span className="p-2 lg:p-0 md:p-0">
          <p>منوی امروز</p>
          <p className="pt-5">منوی ما</p>
        </span>

        {/* Pagination */}
        <div className="absolute bottom-[170px] left-0 right-[40px] lg:bottom-[170px] lg:right-[180px] md:bottom-[170px] md:right-[80px] justify-center">
          <div className={`custom-pagination ${styles.customPagination}`}></div>
        </div>
      </div>

      {/* Slider */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[75%] mx-auto mt-10 md:mt-0 lg:mt-0 flex justify-center items-center"
      >
        {menus.length === 0 && (
          <p className="text-white text-center w-full py-10">منویی ثبت نشده است.</p>
        )}
        {mounted && menus.length > 0 && (
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
            }}
            autoplay={canAutoPlay ? { delay: 3000, disableOnInteraction: false } : false}
            loop={false}
            rewind={true}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 25 },
              1280: { slidesPerView: 5, spaceBetween: 30 },
            }}
            className="menu-swiper w-full"
          >
            {menus.map((menu, index) => (
              <SwiperSlide key={menu._id || index} className="h-full w-full">
                <div className="w-[191px] h-[334px] flex flex-col justify-start items-center bg-white rounded-[90px]">
                  <Image
                    width={150}
                    height={150}
                    src={menu.img}
                    alt={menu.title || 'menu image'}
                    className="w-[150px] h-[150px] mt-5 rounded-full"
                  />
                  <p className="font-bold mt-10 text-xl">{menu.title}</p>
                  <p className="text-lg p-8 flex justify-center text-center items-center">
                    {menu.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default Menu


// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
// import 'swiper/css'

// const Menu = ({ menus }) => {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => setMounted(true), [])

//   if (!mounted || !menus || menus.length === 0) return null

//   const canAutoplay = menus.length > 1

//   return (
//     <Swiper
//       key={menus.length}
//       modules={[Autoplay, Pagination]}
//       autoplay={canAutoplay ? { delay: 3000 } : false}
//       // rewind
//       slidesPerView={5}
//     >
//       {menus.map(menu => (
//         <SwiperSlide key={menu._id}>
//           {menu.title}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

// export default Menu
