
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaStar, FaShoppingBasket, FaImages } from 'react-icons/fa'
import Swal from 'sweetalert2'
import AddToWishlist from '@/components/templates/index/addtowishlist/AddToWishlist'
import { showswal } from '@/utils/helper'
import Link from 'next/link'
import styles from '../../../styles/styles.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useCart } from '@/context/Cartcontex'



const ProductCard = ({ img, name, price, _id, count, score, user }) => {
  const [counter, setCounter] = useState(1)


  const { setIsCartOpen, openCart, cart, setCart } = useCart()



  const showDetail = () => {
    Swal.fire({
      html: `
      <div style="display: flex;">
        <div style='display:flex'>
          <img src="${img}" alt="Product Image" style="margin-right: 15px; margin-top:20px; width: 380px; height:379px; object-fit: cover;">
        </div>
        <div style='display: flex;align-items: self-start;flex-direction: column;padding-right: 66px;' >
          <h4 style='font-size: 24px; margin-top: 60px; color: #3b3b3b;'>${name}</h4>  
          <h4 style='font-size: 24px; margin-top: 20px; color: darkgreen;'>${price} تومان</h4>  
          <h4 style='font-size: 15px; margin-top: 15px; font-weight:900 '>کد کالا : ${price}</h4> 
          <h4 style='font-size: 15px; margin-top: 10px;font-weight:900'>دسته بندی ها : ${price}</h4> 
          <h4 style='font-size: 15px; margin-top: 10px; font-weight:900'>برچسب ها : ${price}</h4> 
          <p style='font-size: 17px;margin-top: 10px;color: darkgreen;'>
            <span style='display:flex ;align-items: center;'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" viewBox="0 0 24 24">
                <path d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm3.472 5.53a.75.75 0 0 1 .073.976l-.073.085-4.243 4.242a.75.75 0 0 1-.976.073l-.085-.073-2.121-2.121a.75.75 0 0 1 .976-1.133l.085.073 1.59 1.59 3.712-3.712a.75.75 0 0 1 1.082 0Z"/>
              </svg> 
              ${count} عدد در انبار
            </span>
          </p>
          <div style="display:flex; margin-top: 34px;">
            <button style='justify-content: space-between;background: lightgray; border-radius: 20px; display: flex; padding: 15px;width: 137px;'>+<span>0</span><span>-</span><span></span></button>
            <button id="add-to-cart-btn" style='display: flex; padding: 15px;border:1px solid green;width: 215px;margin-right: 20px; justify-content: center; border-radius: 20px;'>افزودن به سبد خرید</button>
          </div>
          <a href='/checkout'>
            <button style='width:373px; padding: 15px;background: darkgreen;border-radius: 20px;margin-top: 20px;color: white;'>خرید کنید</button>
          </a>
        </div>
      </div>
    `,
      showCloseButton: true,
      showConfirmButton: true,
      customClass: {
        popup: styles.customPopup,
      },
      width: '970px',

      // ✅ این بخش اضافه شده برای فعال کردن دکمه
      didOpen: () => {
        const btn = document.getElementById('add-to-cart-btn');
        if (btn) {
          btn.addEventListener('click', () => {
            HandleClick();
            Swal.close(); // بستن مودال بعد از اضافه شدن به سبد خرید (اختیاری)
          });
        }
      }
    });
  }


const HandleClick = () => {
  if (count === 0) {
    showswal('این محصول موجود نیست', 'error', 'باشه');
    return;
  }

  addToCart();
  openCart();
  setIsCartOpen(true);
};



  const addToCart = () => {
    if (count === 0) {
      showswal('این محصول در حال حاضر موجود نیست', 'error', 'متوجه شدم');
      return;
    }

    const existingCart = [...cart];
    const itemIndex = existingCart.findIndex(item => item.id === _id);

    if (itemIndex !== -1) {
      existingCart[itemIndex].counter += counter;
    } else {
      existingCart.push({ id: _id, name, price, counter, img });
    }

    setCart(existingCart);
    showswal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'باشه');
  };


  const notify = () => toast.success(
    <span>
      <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'black' }}>{name}</span>
      <p>به لیست علاقه مندی ها اضافه شد</p>
    </span>,
    {
      position: 'top-right',
      icon: <img src={img} alt="icon" style={{ width: 40, height: 40, borderRadius: '50%' }} />,
      style: {
        fontSize: '13px',
        fontWeight: 'bold',
        backgroundColor: '#f8f8f8',
        padding: '10px',
        borderRadius: '8px',
      }
    }
  );



  const validScore = score && !isNaN(score) ? Math.min(Math.max(Number(score), 0), 5) : 0;
 

  return (
    <div className=' '>
      <div className="relative  shadow-[0_3px_8px_rgba(0,0,0,0.24)] group w-[95%] h-[465px] border mb-10 p-3 ml-5 bg-white border-gray-200 rounded-[30px] transition-all duration-300">

        <div
          className="absolute inset-0 bg-[#7dc502] rounded-[30px] opacity-0 transition-all duration-500 ease-in-out transform rotate-0 group-hover:opacity-100 group-hover:-rotate-3 -z-10"
        ></div>

        {/* ✅ تصویر محصول */}
        <div className="w-full h-[280px] p-10 flex justify-center items-center">
          <Link href={`/products/${_id}`}>
            <Image width={290} height={200} alt="pic" src={img} className="h-[200px] w-[180px]" />
          </Link>
        </div>

        {/* ❤️ افزودن به علاقه‌مندی‌ها */}
        <div className=''>
          <AddToWishlist notify={notify} productId={_id} userId={user?._id} />


          {
            count === 0 && (
              <span
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#d5ff6f]  text-sm sm:text-base  px-4 py-1 rounded-[10px] shadow-md select-none"
              >
                ناموجود
              </span>
            )
          }


        </div>


        {/* ⭐ امتیاز و نمایش جزئیات */}
        <div className="flex justify-between items-center xl:p-10  p-3  pt-5 text-[#c4c4c4]">
          <span className="flex ">


            {
              Array(validScore).fill(0).map((item, index) => {
                return (
                  <AiFillStar key={index} className='text-orange-400' />
                )
              })
            }
            {
              Array(5 - validScore).fill(0).map((item, index) => {
                return (
                  < AiOutlineStar key={index} className='text-orange-400' />
                )
              })
            }


            <p className="text-green-800 mr-2">({score === 0 ? 'بدون امتیاز' : score})</p>
          </span>

          <span>
            <div className="w-[40px] h-[40px] cursor-pointer rounded-full hover:bg-[#02693a] hover:text-white bg-[#ececec] flex justify-center items-center">
              <FaImages className="w-[40px] h-[20px]" onClick={showDetail} />
            </div>
          </span>
        </div>

        {/* ✅ نام و قیمت محصول */}
        <Link href={`/products/${_id}`} className="xl:pr-10 pr-3 font-bold text-xl">{name} </Link>
        <div className="flex justify-between items-center xl:pr-10 xl:pl-10 pr-3 pl-3">
          <p className="text-lg xl:text-xl text-[#3fa180]">{(price.toLocaleString())} تومان</p>
          <div className="w-[40px] h-[40px] rounded-full hover:bg-[#02693a] hover:text-white bg-[#ececec] flex justify-center items-center">
            <FaShoppingBasket className="w-[40px] h-[20px] cursor-pointer" onClick={HandleClick} />
          </div>
        </div>



      </div>

    </div>


  )
}

export default ProductCard  