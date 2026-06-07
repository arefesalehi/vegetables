'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegTrashCan } from 'react-icons/fa6'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { ImTruck } from 'react-icons/im'
import { HiMiniBellAlert } from 'react-icons/hi2'
import stateData from '@/utils/stateData'
import { showswal } from '@/utils/helper'
import swal from 'sweetalert'
import { useRouter } from 'next/navigation'
const stateOption = stateData()

const CartTable = () => {
  const [card, setCard] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState('')
  const [counter, setCounter] = useState(card)

  const router = useRouter()

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart')) || []
    setCard(localCart)
  }, [])

  // useEffect(()=>{
  //    totalPrice()
  // },[card])

  const totalPrice = () => {
    let totalPrice = 0
    if (card.length) {
      totalPrice = card.reduce(
        (prev, current) => prev + current.price * current.counter,
        0,
      )
    }
  
    if (discount && discount.percent) {
      return totalPrice - (totalPrice * discount.percent) / 100;
    }

    return totalPrice
  }


  const checkDiscount = async () => {
    setDiscount(null);

    const res = await fetch('/api/discount/use', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: discount })
    })

    if (res.status === 404) {
      return showswal('کد وارد شده معتبر نمی باشد', 'error', 'تلاش مجدد')
    } else if (res.status === 422) {
      return showswal('کد وارد شده منقضی می باشد', 'error', 'تلاش مجدد')

    } else if (res.status === 200) {

      const discountCode = await res.json()
      //  const newPrice= total - (total * discountCode.percent)/100
      //  setTotal(newPrice)
      setDiscount(discountCode);

      return showswal('کد تخفیف با موفقیت اعمال شد', 'success', 'ok ')

    }



  }


  const removeProduct = (id) => {
 
    swal({
      title: 'ایا از حذف اطمینان دارید؟',
      icon: 'success',
      buttons: ["خیر", "بله"]
    }).then(async (result) => {
      if (result) {

        const localCart = JSON.parse(localStorage.getItem('cart')) || []
        const updatedCart = localCart.filter(item => item.id !== id) // اصلاح این خط

        localStorage.setItem('cart', JSON.stringify(updatedCart))
        setCard(updatedCart) // این باعث رندر مجدد میشه، پس reload لازم نیست

        const res = await fetch(`/api/cart/${id}`, {
          method: 'Delete',
        })
        if (res.status === 200) {
          swal({
            title: 'حذف با موفقیت انجام شد',
            icon: 'success',
            buttons: 'ok'
          }).then(() => {
            router.refresh()
          })
        }

      }
    })

  }


  const increaseHandler = (id) => {
    const updatedCart = card.map(item => {
      if (item.id === id) {
        return { ...item, counter: item.counter + 1 }
      }
      return item
    })

    setCard(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const decreaseHandler = (id) => {
    const updatedCart = card.map(item => {
      if (item.id === id && item.counter > 1) {
        return { ...item, counter: item.counter - 1 }
      }
      return item
    })

    setCard(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }



  return (
    <>
    {
      card.length !==0 ? (
        <>
         <div className="xl:w-[80%] w-[90%]   m-auto">

        <div
          className="p-4  flex  text-xl mb-4  mt-20 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium ">
            <HiMiniBellAlert />
          </span>{' '}
          لطفا یک کد تخفیف وارد کنید.
        </div>
      </div>





      <div className="flex xl:w-[80%] w-[90%]  flex-col lg:flex-row m-auto ">

        <div className="lg:basis-2/3 basis-full ml-5 mt-10  ">
          {
            totalPrice() >= 500000 && (<>
              <div className="flex mb-12 text-xl text-[#1b962e]">
                <p className="ml-2">
                  تبریک می گویم! شما <strong>ارسال رایگان</strong> دریافت کردید
                </p>
                <ImTruck />
              </div>

              <div className="w-full flex ltr items-center justify-end bg-[#1b962e]  rounded-full h-2.5 mb-10 dark:bg-[#02693a]">
                <div className="bg-green-600 flex h-2.5 rounded-full dark:bg-[#1b962e]"></div>
                <FaRegCircleCheck className="text-white border border-[#1b962e] bg-[#1b962e] rounded-[50%] w-[20px] h-[20px]" />
              </div>
            </>)
          }




          <div className="relative flex-col sm:flex-row  overflow-x-auto shadow-md sm:rounded-lg ">
            <table
              className="w-full xl:text-xl lg:text-lg md:text-base text-sm   text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead className="xl:text-xl lg:text-lg md:text-base text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="h-[52px]">
                  <th scope="col" className="px-16 py-3 hidden md:block">
                    تصویر
                  </th>
                  <th scope="col" className="px-6 py-3">
                    محصول
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعداد
                  </th>
                    <th scope="col" className="px-6 py-3 hidden md:block">
                    جمع جزء
                  </th>
                  <th scope="col" className="px-6 py-3">
                    قیمت
                  </th>
                
                  <th scope="col" className="px-6 py-3">
                    عملکرد
                  </th>
                </tr>
              </thead>
              <tbody>
                {card.length > 0 && card.map((cart) => {
                  return (
                    <tr className="bg-white h-[120px] rounded-[20px] overflow-hidden border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 hidden md:block ">
                        <Image
                          width={100}
                          height={100}
                          src={cart.img}
                          className="w-[100px] h-[100px]  md:w-32 max-w-full max-h-full border rounded-[5px]"
                          alt="Apple Watch"
                          
                        />
                      </td>
                      <td
                        className="px-6 py-4 font-semibold 
                      
                      text-gray-900 dark:text-white"
                      >
                        {cart.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseHandler(cart.id)}

                            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>

                          </button>
                          <div>
                            <input
                              value={cart.counter}
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required
                            />
                          </div>
                          <button
                            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                            onClick={() => increaseHandler(cart.id)}
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                       <td className="px-6 py-4 hidden md:table-cell ">
                        {cart.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {(cart.counter  * cart.price).toLocaleString()}
                      </td>
                     

                      <td className="px-6 py-4">
                        <Link href="" className="font-medium  hover:underline">
                          <FaRegTrashCan className="w-[15px] h-[15px]" onClick={() => removeProduct(cart.id)} />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>



          <div className="discount flex flex-col md:flex-row justify-between mt-10">
            <div className="w-1/2">
              <input value={discount} onChange={(e) => setDiscount(e.target.value)} className=" h-[60px] mb-3 rounded-[10px] border-2  border-dotted outline-none md:pr-5" />
              <button onClick={checkDiscount} className="p-5 mr-2 rounded-[10px] h-auto md:h-[60px] bg-[#02693a] text-white">
                اعمال تخفیف
              </button>
            </div>
            <div className="w-1/2 flex justify-end">
              <button className="p-5 md:pr-20 md:pl-20  mt-5 md:mt-0 rounded-[10px] h-auto md:h-[60px] bg-gray-100  ">
                به روز رسانی سبد خرید
              </button>
            </div>
          </div>

        </div>

        <div className="  lg:basis-1/3 basis-full mt-10  ">
          <div className="lg:w-[95%] w-full  mb-10 h-auto border-[3px] lg:m-auto m-0  pb-5  rounded-[10px] ">
            <h1 className="font-bold text-xl p-5">مجموع سبد خرید</h1>
            <div className=" bg-gray-200 rounded-t-[10px] items-center p-3 lg:w-[90%] w-[98%]  lg:m-auto m-0 border-b-2">
              <span className='flex lg:justify-between pb-8 lg:pb-0  lg:w-full mt-10 mb-10 border-solid border-b-2 border-gray-500 '>
                <span className="font-bold text-lg  basis-1/2  lg:basis-full ">جمع جزء</span>
                <span className="text-gray-600  text-2xl lg:text-lg  basis-1/2  lg:basis-full  ">195000</span>
              </span>
            </div>


            <div className="flex justify-between   lg:justify-start items-center flex-col lg:flex-row bg-gray-200   p-3 lg:w-[90%] w-[98%] lg:m-auto m-0 border-b-2">
              <span className="font-bold text-xl md:text-2xl lg:text-base">حمل نقل</span>
              <span className="flex flex-col  w-[90%]  ">
                <p className="mt-2  text-gray-500 text-lg lg:text-xl" >
                  {' '}
                  هزینه حمل و نقل در هنگام پرداخت به روز می شوند
                </p>

                <p className="mt-3 mb-3 font-bold text-xl lg:text-lg">محاسبه حمل و نقل</p>

                <div className=''>
                  <select className="outline-none h-[48px] lg:w-[95%] lg:m-auto lg:mb-2 w-full  ">
                    <option value="-1">select a country/region</option>
                    <option value="-1">تهران</option>
                    <option value="-1">کرج</option>
                    <option value="-1">تبریز</option>
                  </select>
                  <input
                    className="border lg:w-[95%] lg:mb-2 lg:m-auto outline-none h-[48px]  w-full    mt-2 pr-2"
                    placeholder="استان"
                  />
                  <input
                    className="border outline-none lg:mb-2  lg:w-[95%] lg:m-auto h-[48px]  w-full   mt-2 pr-2"
                    placeholder="شهر"
                  />
                  <input
                    className="border outline-none  lg:mb-2 lg:w-[95%] lg:m-auto h-[48px]  w-full   mt-2 pr-2"
                    placeholder="کدپستی"
                  />
                  <button className="p-2 m-auto lg:mb-2   mt-10  lg:mt-3 w-[90px] h-[48px] rounded-[10px] flex justify-center items-center  pt-3 bg-gray-100 ">
                    بروز رسانی
                  </button>
                </div>
              </span>
            </div>



            <div className="flex bg-gray-200 rounded-b-[10px] justify-between items-center  p-3 lg:w-[90%] w-[98%] lg:m-auto m-0 ">
              <span className="font-bold text-2xl lg:text-lg">کل</span>
              <span className="flex flex-col">
                <p className="mt-2 font-bold text-xl lg:text-lg text-[#02693a]">
                  {totalPrice().toLocaleString()} تومان

                </p>
                <p className="mt-3 text-gray-500"></p>
              </span>
            </div>

            <button onClick={() => {
              // ذخیره داده‌های کارت در localStorage
              localStorage.setItem('cart', JSON.stringify(card));
              localStorage.setItem('totalPrice', totalPrice())

            }}

            
             className="w-[90%]  rounded-[10px] h-[54px] mt-5 mb-3 m-auto p-3 flex justify-center items-center  bg-[#02693a] text-white">
              <Link href="/checkout" className="text-white">
                اقدام به پرداخت
              </Link>
            </button>
          </div>
        </div>
      </div>
        </>
      ) :(
      
      <div className=' flex flex-col justify-center items-center mt-40 mb-20'>
        <h1 className='text-4xl font-bold mb-5'> سبد خرید در حال حاضر خالی می باشد</h1>
        <p> قبل از تسویه حساب ، باید چند محصول را به سبد خرید خود اضافه نمایید</p>
        <p>در صفحه فروشگاه، محصولات جالب زیادی خواهید دید.</p>

      <button className='px-5 py-2 bg-green-800 text-white mt-5'>بازگشت به فروشگاه</button>
        
        
        </div>
        
      
      )
    }
     
    </>
  )
}

export default CartTable
