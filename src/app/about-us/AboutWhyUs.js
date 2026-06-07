import Image from 'next/image'
import React from 'react'

const AboutWhyUs = () => {
  return (
    <>
      <div className="w-full mt-20 md:mt-40 mb-40 flex flex-col md:flex-row  h-[409px] items-center">
        <span className="basis-full md:basis-1/2">
          <h1 className='font-bold text-3xl mb-10'>چرا ما را انتخاب کنید ؟</h1>
          <p className='text-justify pl-10'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است. و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد.
          </p>
        </span>
        <span className="basis-1/2 ">
          <Image
         
         
           alt='pic'
            src="/images/swipe-for-shopping.gif"
            width={913}
            height={661}
            className='w-[640px]'
          />
        </span>
      </div>
    </>
  )
}

export default AboutWhyUs
