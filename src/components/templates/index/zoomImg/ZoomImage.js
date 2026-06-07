// import Image from 'next/image'
// import React from 'react'

// const ZoomImage = () => {
//   return (
//     <>
//       <div className="xl:w-[80%] mt-[-1900px] sm:mt-0 lg:w-[100%] flex-wrap md:flex-nowrap  m-auto md:h-[724px] h-[2000px]  flex">
//         {/* ستون چپ */}
//         <div className="md:w-[25%] hidden  w-full  md:h-full  sm:flex md:flex-col flex-row  m-6">
//           <span className=" xl:h-[290px] lg:h-[34%] md:h-[25%] h-[50%]  w-[90%] ml-5 overflow-hidden rounded-2xl relative group">
//             <Image
//               src="/images/bn1.jpg"
//               fill
//               alt="pic"
//               className="object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//           </span>

//           <span className="xl:h-[307px] lg:h-[34%] md:h-[25%] w-[90%]  h-[50%]  overflow-hidden rounded-2xl relative group md:mt-5">
//             <Image
//               src="/images/bn2.jpg"
//               fill
//               alt="pic"
//               className="object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//           </span>
//         </div>

//         {/* تصویر وسط */}
//         <div className="md:w-[50%] w-full hidden sm:flex p-3 xl:h-[610px] lg:h-[70%] md:h-[52%] h-[20%] mt-6 ml-5 overflow-hidden rounded-2xl relative group">
//           <Image
//             src="/images/bn3-rtl.jpg"
//             fill
//             alt="pic"
//             className="object-cover transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* ستون راست */}
//         <div className="md:w-[25%] w-full p-3">
//           <span className="xl:h-[610px] hidden sm:flex lg:h-[71%] md:h-[53%] w-full  overflow-hidden mt-3 rounded-2xl relative group  justify-center items-center">
//             <Image
//               src="/images/bn4.jpg"
//               alt="pic"
//               fill
//               className="object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//           </span>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ZoomImage
import Image from 'next/image'
import React from 'react'

const ZoomImage = () => {
  return (
    <>
      <div className="xl:w-[80%] sm:mt-0 lg:w-[100%] flex-wrap md:flex-nowrap m-auto flex gap-4 p-4">
        {/* ستون چپ */}
        <div className="md:w-[25%] w-full hidden sm:flex md:flex-col flex-row gap-4">
          <span className="w-[90%] ml-5 aspect-[4/5] overflow-hidden rounded-2xl relative group">
            <Image
              src="/images/bn1.jpg"
              fill
              alt="pic"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </span>

          <span className="w-[90%] ml-5 aspect-[4/5] overflow-hidden rounded-2xl relative group">
            <Image
              src="/images/bn2.jpg"
              fill
              alt="pic"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </span>
        </div>

        {/* تصویر وسط */}
        <div className="md:w-[50%] w-full hidden sm:flex p-3 overflow-hidden rounded-2xl relative group">
          <div className="w-full h-full min-h-[400px] overflow-hidden rounded-2xl relative group">
            <Image
              src="/images/bn3-rtl.jpg"
              fill
              alt="pic"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* ستون راست (هم‌ارتفاع با وسط) */}
        <div className="md:w-[25%] w-full p-3 flex">
          <span className="hidden sm:flex w-full h-full min-h-[400px] overflow-hidden rounded-2xl relative group justify-center items-center">
            <Image
              src="/images/bn4.jpg"
              alt="pic"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </span>
        </div>
      </div>
    </>
  )
}

export default ZoomImage
