'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaShoppingBasket } from 'react-icons/fa'
import Image from 'next/image'
import { FaTrashAlt } from 'react-icons/fa'
import { useRef } from 'react'
import { MdClose } from 'react-icons/md'

import { useCart } from '@/context/Cartcontex'

const ShoppingMenue = () => {

  const [discount, setDiscount] = useState(null)
  const { isCartOpen, closeCart, cart, setCart } = useCart()




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

  const totalPrice = () => {
    let totalPrice = 0
    if (cart.length) {
      totalPrice = cart.reduce(
        (prev, current) => prev + current.price * current.counter,
        0,
      )
    }
    // if (discount) {
    //   return totalPrice - (totalPrice * discount.percent) / 100;
    // }

    if (discount && discount.percent) {
      return totalPrice - (totalPrice * discount.percent) / 100;
    }

    return totalPrice
  }

  return (
    <>
      <div className={` ${isCartOpen ? "w-[370px]" : "w-0"} h-screen z-50  fixed left-0 bottom-0  bg-white`}>


        <div className='flex  mb-10  justify-between  '>
          <div className='flex items-center mb-20'>
            <Link href='/cart' className="flex relative justify-center items-center w-[50px] h-[50px] hover:bg-[#7CC503] rounded-full border-2 border-gray-800">
              <FaShoppingBasket className="w-[20px] h-[20px] text-black sm:text-black" />
            </Link>
            <span className="w-[20px] top-[6px] right-[33px] absolute h-[20px] bg-[#027b4c] text-white rounded-full flex justify-center items-center">
              {cart.length}
            </span>
            <p className='mr-5 text-xl '>سبد خرید</p>
          </div>

          <div className='mt-5 ml-5'>
            <MdClose className='w-[20px] h-[20px]' onClick={closeCart}
            />
          </div>
        </div>



        <div className='overflow-y-auto h-[500px] flex-1 px-2'>
          {
            cart.map((cart) => {
              return (
                <div className='w-[90%] m-auto border-solid border-[1px] border-gray-300 rounded-md h-[100px] mt-5 flex justify-between items-center '>
                  <div className=" h-[280px] p-[0.5rem] flex justify-center items-center">
                    <Link href={`/`}>
                      <Image width={290} height={200} alt="pic" src={cart.img} className="h-[80px] w-[80px]" />
                    </Link>
                  </div>

                  <div className='flex flex-col'>
                    <p className='text-md font-bold'> {cart.name}</p>
                    <p className='text-md font-bold'>{cart.price} * {cart.counter}</p>
                  </div>
                  <div onClick={() => removeProduct(cart.id)} className="w-[35px] h-[35px]  ml-10  hover:bg-[#01512c] hover:text-white rounded-[50%] flex justify-center items-center bg-[#ececec] ">
                    <FaTrashAlt />
                  </div>
                </div>
              )
            })
          }
        </div>


        <div style={{ width: '-webkit-fill-available' }} className='bg-gray-200  h-[200px]  bottom-0 fixed'>
          <div className='flex justify-between pt-10 pb-10 pr-5 pl-5   '>
            <span className='text-md font-bold'>جمع کل:</span>
            <span className='text-2xl '>{totalPrice()} تومان</span>
          </div>


          <div className='flex flex-col w-[90%] m-auto'>
            <Link href='/cart' type="" className='flex justify-center items-center  py-5 px-8 bg-white hover:bg-green-700 rounded-md border-gray-300 border-[1px] border-solid hover:text-white mb-5' >مشاهده سبد خرید</Link>
            <Link href='/checkout' type="" className='flex justify-center items-center  p-5 bg-green-700 text-white mb-10 rounded-md hover:bg-[#98ce34]'  >  تسویه حساب</Link>

          </div>

        </div>






      </div>



    </>
  )
}

export default ShoppingMenue





