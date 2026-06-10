'use client'
import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { showswal } from '@/utils/helper'
const ContactForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [body, setBody] = useState()

  const sendMessage = async (e) => {
    e.preventDefault()
      //(validation)

    const newContact = {
      name,
      email,
      subject,
      body,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })

    console.log('res=>', res)

    if (res.status === 201) {
      showswal('پیام شما با موفقیت ارسال شد', 'success', ' فهمیدم')
      setName('')
      setBody('')
      setSubject('')
      setEmail('')
      
    }
  }

  return (
    <>
      <div className="w-[80%] md:w-[95%] lg:w-[80%] m-auto flex  flex-wrap md:flex-row ">
        <span className="  basis-full md:basis-2/3 ">
          <div className="w-full text-xl mt-20">
            <strong> در تماس باشید</strong>
            <p className="text-gray-400 mt-5 mb-5">
              لطفا جزئیات درخواست خود را وارد کنید. تیم پشتیبانی ما در اسرع وقت
              پاسخ خواهد داد.
            </p>

            <strong className="mb-2">دیدگاه شما * :</strong>

            <div className="w-full flex ">
              <div className="w-1/2 m-2">
                <div className="mb-5">
                  <label>
                    <strong className="mt-2 mb-2">نام :</strong>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full   pr-3 h-[53px] rounded-[5px] "
                  />
                </div>
              </div>
              <div className="w-1/2 m-2">
                <div className="mb-3">
                  <label>
                    <strong className="mt-2 mb-2">ایمیل :</strong>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label>
                <strong className="mt-2 mb-2"> موضوع</strong>
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                className="w-full  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
              />
            </div>

            <label>
              <strong className="mt-2 mb-2">پیام شما</strong>
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full   h-[100px] mt-3 rounded-[5px] border border-gray-400 pr-2 pt-2 outline-none"
            ></textarea>

            <button
              onClick={sendMessage}
              type="submit"
              className="bg-[#02693a] text-white h-[50px] rounded-[5px] mt-10 pt-2 w-1/3 pb-2 pr-3 pl-3 mb-3"
            >
              ارسال پیام
            </button>
          </div>
        </span>



        <span className=" basis-full md:basis-1/3 mt-20 sm:mt-0 md:mt-20 text-xl pr-20 pb-20 pl-20 sm:pr-0 sm:pl-0 md:pr-20 md:pl-20   lg:pl-20 ">
          <p className="mt-10">
            <strong className="ml-3">آدرس:</strong>
            ایران، استان تهران، تهران، خیابان حافظ، خیابان غفار زاده پلاک
            01، کد پستی 1234567890
          </p>
          <p className="mt-10">
            <strong className="ml-3">ایمیل:</strong>
            arefesalehi.it@gmail.com
          </p>

          <p className="mt-10">
            <strong className="ml-3">شماره تلفن::</strong>
            09355789137
          </p>

          <p className="mt-10">
            <strong className="ml-3">ساعات کاری:</strong>
            فروشگاه ما دوباره برای خرید باز شد، همه روزه از 11 صبح تا 7 عصر
          </p>

          <div className="flex">
            <CgFacebook className="w-[30px] h-[30px] bg-green-700 ml-3 p-2 rounded  text-white mt-10 hover:bg-[#80c605] " />
            <MdEmail className="w-[30px] h-[30px] bg-green-700 ml-3 p-2 rounded  text-white mt-10 hover:bg-[#80c605] " />
            <FaPinterest className="w-[30px] h-[30px] bg-green-700 ml-3 p-2 rounded  text-white mt-10 hover:bg-[#80c605] " />
            <FaTwitter className="w-[30px] h-[30px] bg-green-700 ml-3 p-2 rounded  text-white mt-10 hover:bg-[#80c605] " />
            <RiInstagramFill className="w-[30px] h-[30px] bg-green-700 ml-3 p-2 rounded  text-white mt-10 hover:bg-[#80c605] " />
          </div>
        </span>
      </div>
    </>
  )
}

export default ContactForm
