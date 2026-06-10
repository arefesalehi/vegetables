'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import swal from 'sweetalert'
import { useCart } from '@/context/Cartcontex'
import { showswal } from '@/utils/helper'

const Wishlistuserpanel = ({ wishes }) => {
  const { setIsCartOpen, openCart, cart, setCart } = useCart()

  const removeProduct = async (id) => {
    swal({
      title: 'ایا از حذف اطمینان دارید؟',
      icon: 'warning',
      buttons: ["خیر", "بله"]
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/wishlists/${id}`, {
          method: 'Delete'
        })
        console.log('res==>', res);

        if (res.status === 200) {
          swal({
            title: 'حذف با موفقیت انجام شد',
            icon: 'success',
            buttons: 'ok'
          }).then(() => {
            location.reload()
          })
        }

      }

    })

  }

  const HandleClick = (product) => {
    addToCart(product)
    openCart()
    setIsCartOpen(true) // ✅ این خط باعث باز شدن سبد خرید در صفحه اصلی میشه

  }

  const addToCart = (product) => {
    const existingCart = [...cart];
    const itemIndex = existingCart.findIndex(item => item.id === product._id);

    if (itemIndex !== -1) {
      existingCart[itemIndex].counter += 1; // یا مقدار دلخواه
    } else {
      existingCart.push({
        id: product._id,
        name: product.name,
        price: product.price,
        counter: 1, // مقدار اولیه
        img: product.img,
      });
    }

    setCart(existingCart);
    showswal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'باشه');
    openCart();
    setIsCartOpen(true);
  };




  return (
    <div className="mt-40 mb-40     ">
      {

        wishes.map((wish) => {
          return (
            <div key={wish._id} className=" h-auto md:h-auto w-full flex-col lg:flex-row  border-solid border-[1px] mb-5 flex justify-between items-center border-gray-300 hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]  rounded-[10px]">
              <div className="w-full flex flex-col md:flex-row justify-center md:justify-start   p-5 items-center  ">
                <div onClick={() => removeProduct(wish.product._id)} className="w-[35px] h-[35px]  sm:mb-5 p-[12px] md:mb-0 md:ml-20 hover:bg-[#01512c] hover:text-white rounded-[50%] flex justify-center items-center bg-[#ececec] ">
                  <FaTrashAlt />
                </div>

                <Image src={wish.product.img} alt='pic' width={120} height={100} className='w-[80px] h-[80px]' />

                <div className='mr-20 '>
                  <p className="font-semibold mb-4">{wish.product.name}</p>
                  <p className="text-[#01512c] mb-4">{(wish.product.price)?.toLocaleString()} تومان</p>
                  <p className="flex ml-3 w-[100px] text-[#b1adad]">
                    {' '}
                    <FaCalendarAlt className="ml-3 " /> 3 شهریور 1403
                  </p>
                   <span className='flex  '>
                    <FaCheckCircle className="bg-[00512C] ml-5 w-[20px] h-[20px] text-[#9bb991]" />
                  <p className=" w-[60px] md:w-[70px] md:ml-10 text-sm lg:text-base  text-[#9bb991] flex justify-center items-center">
                    {wish.product.count === 0 ? "ناموجود" : wish.product.count}
                    <span className='text-sm lg:text-base  '>{wish.product.count !== 0 && 'عدد در انبار'}</span>
                  </p>
                </span>
                </div>
              </div>

              <div className=" w-1/2  justify-start py-5 px-2 items-center">
                <div className="flex flex-col md:flex-row justify-end p-5 items-center">
               

                  <button
                    type=""
                    className=" mt-3 text-sm lg:text-lg text-white bg-[#01512c] p-5 pr-10 pl-10 rounded-[30px]"
                    onClick={() => HandleClick(wish.product)}
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>

            
            
          )
        }
        )


      }





    </div>
  )
}

export default Wishlistuserpanel
