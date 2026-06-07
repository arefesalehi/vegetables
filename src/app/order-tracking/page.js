import Detailbar from '@/components/modules/detailBar/Detailbar'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'

import NewsLetter from '@/components/templates/products/NewsLetter'
import Image from 'next/image'
const page = () => {
  return (
    <>
      <div className="w-full bg-black h-[100px]">
        {/* <Navbar /> */}
      </div>
      <Detailbar />

      <div className=" flex flex-col justify-center items-center ">
        <h1 className="text-5xl font-bold mt-40">سفارشتان را پیگیری کنید</h1>
        <p className="mt-10 p-3 text-justify">
          برای پیگیری سفارش خود لطفا شناسه سفارش خود را در کادر زیر وارد کرده و
          دکمه “پیگیری” را فشار دهید. این در رسید و در ایمیل تأییدی که باید
          دریافت می کردید به شما داده شد.
        </p>
        <Image
          src="/images/order-tracking-rtl.png"
          className="mt-10"
          width={405}
          height={64}
           alt='pic'
        />

        <div className="w-[85%] mt-10 h-[411px] bg-[#f1f1f1] rounded-[5px]">
          <div className="mb-3 w-[80%] m-auto mt-20   ">
            <label>
              <strong className="mt-2 mb-2"> شناسه سفارش (ID):</strong>
            </label>
            <input
              placeholder="شماره سفارش در ایمیل ارسال شده به شما موجود است."
              type="text"
              className=" mt-5 hover:border-[#02693a]  w-full m-auto  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-300"
            />
          </div>

          <div className="mb-3 w-[80%] m-auto mt-10">
            <label>
              <strong className="mt-2 mb-2"> ایمیل صورت حساب :</strong>
            </label>
            <input
              placeholder="ایمیلی که در هنگام ثبت سفارش وارد کردید"
              type="text"
              className=" mt-5 hover:border-[#02693a]  w-full m-auto  pr-3 h-[53px] rounded-[5px]  outline-none border border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="bg-[#02693a] hover:bg-[#90db17] flex justify-center items-center text-white h-[50px] rounded-[5px] mt-10  w-[80%] m-auto "
          >
            پیگیری
          </button>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  )
}

export default page
