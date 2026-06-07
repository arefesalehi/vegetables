


'use client'
import Image from 'next/image'
import Navbar from '@/components/modules/navbar/Navbar'
import Stepper from '@/components/templates/cart/Stepper'
import Footer from '@/components/modules/footer/Footer'
import { useEffect, useState } from 'react'
import Detailbar from '@/components/modules/detailBar/Detailbar'

const page = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotal] = useState(0)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(savedCart)
  }, [])

  useEffect(() => {
    const price = localStorage.getItem('totalPrice')
    if (price) setTotal(price)
  }, [])

  const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.counter, 0)

  return (
    <>
      <div className="w-full bg-black h-[100px]">
        {/* <Navbar /> */}
      </div>

      <Detailbar />
      <Stepper step="checkout" />

      <div className="w-[95%] sm:w-[85%] md:w-[70%] xl:w-[40%] mb-10 rounded-[10px] overflow-hidden mt-10 sm:mt-20 pb-8 mx-auto bg-gray-200">
        <h1 className="flex justify-center items-center font-bold pt-8 text-2xl sm:text-3xl">
          سفارش شما
        </h1>

        <div className="w-[95%] sm:w-[90%] mt-5 bg-white mx-auto h-auto rounded-[10px]">
          <div className="w-full flex justify-between items-center border-b-2 p-3 sm:p-5">
            <div className="w-1/2 font-bold text-sm sm:text-base">محصول</div>
            <div className="w-1/2 font-bold flex justify-end text-sm sm:text-base">
              جمع جزء
            </div>
          </div>

          <div className="w-full border-b-2 p-3 sm:p-5">
            <div className="w-full flex flex-col gap-2">
              {cart.map((cards) => (
                <div key={cards.id} className="flex justify-between text-xs sm:text-sm md:text-base">
                  <div className="basis-1/2 text-gray-600">
                    {cards.name} - {cards.counter} عدد
                  </div>
                  <div className="basis-1/2 flex justify-end text-gray-800">
                    {cards.price.toLocaleString()} تومان
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border-b-2 p-3 sm:p-5 flex justify-between items-center text-sm sm:text-base">
            <div className="font-bold">جمع کل</div>
            <div className="font-semibold flex justify-end">
              {cart.map((cards) => cards.price * cards.counter).join(' + ')}
            </div>
          </div>

          <div className="w-full border-b-2 p-3 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm sm:text-base">
            <div className="font-bold">حمل و نقل</div>
            <div className="flex justify-end text-gray-700 text-xs sm:text-base">
              ارسال با پیک موتوری:
              <span className="font-semibold mr-2 sm:mr-5">50,000 تومان</span>
            </div>
          </div>

          <div className="w-full p-3 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm sm:text-base">
            <div className="font-bold">مجموع بدون تخفیف</div>
            <div className="font-bold text-end w-full sm:w-auto">
              <p className="flex justify-end">{calculatedTotal.toLocaleString()} تومان</p>
              <p className="flex justify-end text-gray-500 pt-1 text-xs sm:text-sm">
                (شامل 17,682 تومان ارزش افزوده)
              </p>
            </div>
          </div>
        </div>

        {/* روش‌های پرداخت */}
        <div className="w-[95%] sm:w-[90%] mx-auto mt-5 flex items-center gap-3">
          <input className="ml-2" type="radio" name="bank" />
          <p className="ml-2 text-sm sm:text-base">بانک ملی</p>
          <Image
            src="/images/Melli-Meli-Small-banner-way2pay-94-10-13.jpg"
            alt="بانک ملی"
            width={40}
            height={40}
            className="w-[30px] sm:w-[40px] h-auto"
          />
        </div>

        <div className="w-[95%] sm:w-[90%] mx-auto mt-3 flex items-center gap-3">
          <input className="ml-2" type="radio" name="bank" />
          <p className="ml-2 text-sm sm:text-base">ایران کیش</p>
          <Image
            src="/images/494520_258.jpg"
            alt="ایران کیش"
            width={40}
            height={40}
            className="w-[30px] sm:w-[40px] h-auto"
          />
        </div>

        <p className="w-[95%] sm:w-[90%] mx-auto pt-3 pb-3 mt-5 mb-5 border-y-2 border-gray-300 text-xs sm:text-sm text-gray-700 leading-relaxed">
          اطلاعات شخصی شما برای پردازش سفارش و پشتیبانی از تجربه شما در این وبسایت و
          برای اهداف دیگری که در سیاست حفظ حریم خصوصی توضیح داده شده است استفاده می‌شود.
        </p>

        <div className="w-[95%] sm:w-[90%] mx-auto mb-5 flex items-start gap-2 text-xs sm:text-sm">
          <input type="checkbox" />
          <p>من شرایط و مقررات سایت را خوانده‌ام و آن را می‌پذیرم. *</p>
        </div>

        <button
          type="submit"
          className="w-[95%] sm:w-[90%] mx-auto flex justify-center items-center bg-green-600 text-white p-3 rounded-md text-sm sm:text-base"
        >
          پرداخت
        </button>
      </div>

      <Footer />
    </>
  )
}

export default page
