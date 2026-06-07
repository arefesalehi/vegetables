import React from 'react'
import NewsComment from './NewsComment'
import NewsCommentForm from './NewsCommentForm'
import Image from 'next/image'
import { FaQuoteRight } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPinterestP } from 'react-icons/fa'
import { CgTwitter } from 'react-icons/cg'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { IoMdPricetags } from 'react-icons/io'
import { IoCalendarSharp } from 'react-icons/io5'

import { IoMdPerson } from 'react-icons/io'
const NewsComponent = ({img, title , author, date, details}) => {
  return (
    <>
      <Image
        className="w-full rounded-[20px] h-[568px] relative "
        src={img}
        width={900}
        height={568}
          alt='pic'
      />
      <div className="absolute bottom-50 right-[38%]  bottom-[10%]">
        <span className="pt-5 pb-5 ml-5 pr-8 pl-8 bg-[#fffeff] hover:bg-[#007a4a] hover:text-white rounded-[30px]">
          تغذیه
        </span>
        <span className="pt-5 pb-5 ml-5 pr-8 pl-8 bg-[#fffeff]  hover:bg-[#007a4a] hover:text-white rounded-[30px]">
          دستور پخت
        </span>
        <span className="pt-5 pb-5 ml-5 pr-8 pl-8 bg-[#fffeff]  hover:bg-[#007a4a] hover:text-white rounded-[30px]">
          نگهداری غذا
        </span>
        <span className="pt-5 pb-5 ml-5 pr-8 pl-8 bg-[#fffeff]  hover:bg-[#007a4a] hover:text-white rounded-[30px]">
          کاهش وزن
        </span>
      </div>

      <div className="text-xl text-gray-600 text-justify">
        <h1 className="text-3xl font-bold text-black pt-5 pb-5">
         {title}
        </h1>
        <div className="flex items-center  mb-10 text-gray-500 ">
          <span className="flex items-center  ">
            <IoMdPerson />
            <p className="mr-2">توسط {author} </p>
          </span>
          <span className="flex items-center">
            <IoCalendarSharp />
            <p className="mr-2">{date} </p>
          </span>
        </div>
        <p className="text-black mt-14 mb-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>

        <p className="mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <p className="mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <h3 className="text-black font-bold text-2xl mb-5">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)
        </h3>

        <p className="mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className="flex border-r-4 w-[90%] m-auto mb-20 text-xl  border-r-[#84d712]">
          <span>
            <FaQuoteRight className="ml-5 w-[30px] h-[30px] mr-5 text-[#d5d5d5]" />
          </span>
          <span>
            <p>
              این نکته اصلی فناوری است. از یک طرف اشتهای جاودانگی ایجاد می کند.
              از طرف دیگر نابودی جهانی را تهدید می کند. فناوری هوس از طبیعت
              برداشته شده است.
            </p>

            <p className="text-[#16625a] text-2xl mt-3">دون دیلو – نویسنده</p>
          </span>
        </div>

        <p className="mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <div className="flex w-[97%] ">
          <Image
            src="/images/banner-blog1.jpg"
            width={400}
            height={348}
            className="w-1/2 "
             alt='pic'
          />
          <Image
            src="/images/banner-blog2.jpg"
            width={400}
            height={348}
            className="w-1/2 mr-10 "
          />
        </div>

        <h1 className="text-2xl  font-semibold text-[#574e4b] pt-10 pb-10">
          سیب میوه‌ای لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است. با خواص شگفت‌انگیز
        </h1>

        <p className="mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className="mb-10 mr-20">
          <ul>
            <li className="list-circle">
              <a href="">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک
              </a>
            </li>
            <li className="list-circle">
              <a href="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</a>
            </li>

            <li className="list-circle">
              <a href="">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </a>
            </li>

            <li className="list-circle">
              <a href="">لورم ایپسوم متن ساختگی است.</a>
            </li>

            <li className="list-circle">
              <a href="">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از طراحان
                گرافیک
              </a>
            </li>
          </ul>
        </div>

        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>

      <div className="flex w-full border-b-2 border-gray-100 h-[100px] mt-20 mb-5  text-xl">
        <FaShareAlt className="ml-5" />
        <p>
          <strong className="mr-5">اشتراک گذاری:</strong>
        </p>
        <MdEmail className="mr-5" />
        <FaPinterestP className="mr-5" />
        <CgTwitter className="mr-5" />
        <FaLinkedinIn className="mr-5" />
        <FaFacebookF className="mr-5" />
      </div>

      <div className="flex w-full  justify-start items-center h-[100px]  mb-20">
        <IoMdPricetags />
        <p>
          <strong className="mr-3"> برچسب:</strong>
        </p>
        <div className="flex pr-10 pl-10 justify-center items-center  ">
          <span className="p-3 rounded-[5px]  ml-3  bg-[#f2f2f2]">آشپزی</span>
          <span className="p-3 rounded-[5px]  ml-3  bg-[#f2f2f2]">
            غذای خیابانی
          </span>
          <span className="p-3 rounded-[5px]  ml-3  bg-[#f2f2f2]">
            فراوری غذا
          </span>
          <span className="p-3 rounded-[5px]  ml-3  bg-[#f2f2f2]">موز</span>
        </div>
      </div>

      <NewsComment />
      <NewsCommentForm />
    </>
  )
}

export default NewsComponent
