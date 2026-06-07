import React from 'react'
import { FaStar } from 'react-icons/fa'

const NewsCommentForm = () => {
  return (
    <div className="w-full text-xl mt-20">
      <strong>دیدگاه خود را بنویسید</strong>
      <p className="text-gray-400 mt-5 mb-5">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *
      </p>

      <strong className="mb-2">دیدگاه شما * :</strong>

      <div className="w-full flex   ">
        <div className="w-1/3 m-2">
          <div className="mb-5">
            <label>
              <strong className="mt-2 mb-2">نام *:</strong>
            </label>
            <input
              type="text"
              className="w-full  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
        <div className="w-1/3 m-2">
          <div className="mb-3">
            <label>
              <strong className="mt-2 mb-2">ایمیل *:</strong>
            </label>
            <input
              type="email"
              className="w-full  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
        <div className="w-1/3 m-2">
          <div className="mb-3">
            <label>
              <strong className="mt-2 mb-2">وب سایت :</strong>
            </label>
            <input
              type="email"
              className="w-full  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-400"
            />
          </div>
        </div>
      </div>
      <label>
        <strong className="mt-2 mb-2">دیدگاه*  :</strong>
      </label>
      <textarea className="w-full   h-[100px] mt-3 rounded-[5px] border border-gray-400 pr-2 pt-2 outline-none"></textarea>

      <div className="flex mt-5 mb-5">
        <input type="checkbox" />
        <p className="mr-2">
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </p>
      </div>

      <button
        type="submit"
        className="bg-[#02693a] text-white h-[50px] rounded-[5px] pt-2 w-full pb-2 pr-3 pl-3 mb-3"
      >
        فرستادن دیدگاه
      </button>
    </div>
  )
}

export default NewsCommentForm
