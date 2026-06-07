'use client'

import Image from 'next/image'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useCart } from '@/context/Cartcontex'

const OrderTable = () => {
  // const [card, setCard] = useState([])
const {cart, setCart} = useCart()
console.log('useCart()', useCart())


  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(localCart)
  }, [])

  
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
        setCart(updatedCart) // این باعث رندر مجدد میشه، پس reload لازم نیست

        const res = await fetch(`/api/cart/${id}`, {
          method: 'Delete',
        })
        if (res.status === 200) {
          swal({
            title: 'حذف با موفقیت انجام شد',
            icon: 'success',
            buttons: 'ok'
          })
        }

      }
    })

  }


  return (

    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 ">
        <table
          className="w-full text-sm lg:text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="h-[50px]">
              <th scope="col" className="px-16 py-3">
                تصویر
              </th>
              <th scope="col" className="px-6 py-3">
                محصول
              </th>
              <th scope="col" className="px-6 py-3">
                تعداد
              </th>
              <th scope="col" className="px-6 py-3">
                   قیمت 
              </th>
                <th scope="col" className="px-6 py-3">
                عملکرد
              </th>
            </tr>
          </thead>
          <tbody >

            {
              cart.length > 0 && cart.map((cart) => {
                return (
                  <>
                    <tr className="bg-white   rounded-[20px] overflow-hidden border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                      <td className="p-4 h-[120px] ">
                        <Image
                          width={100}
                          height={100}
                          src={cart.img}
                          className="w-16 md:w-32 max-w-full max-h-full border rounded-[5px]"
                          alt="Apple Watch"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {cart.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              value={cart.counter}
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {(cart.price*cart.counter).toLocaleString()} تومان
                      </td>
                       <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        <FaRegTrashCan onClick={() => removeProduct(cart.id)}/>
                      </td>
                    </tr>
                  </>
                )
              })
            }


          </tbody>
        </table>
      </div>
    </>
  )
}

export default OrderTable