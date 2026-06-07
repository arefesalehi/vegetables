
'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearchOutline, IoHeartOutline } from 'react-icons/io5'
import { FaShoppingBasket } from 'react-icons/fa'
import styles from './../../../styles/Navbar.module.css'
import { MdMenu } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/Cartcontex'

const Navbar = ({ isLogin, wishes }) => {
  const [fixTop, setFixTop] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart, setCart } = useCart()
  const router = useRouter()


  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(localCart);
  }, []);


  useEffect(() => {

    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > 105) {
        setFixTop(true)
      } else {
        setFixTop(false)
      }
    }

    window.addEventListener('scroll', fixNavbarToTop)
    return () => window.removeEventListener('scroll', fixNavbarToTop)
  }, [])


  const logOut = () => {
    swal({
      title: 'ایا از خروج اطمینان دارید ؟',
      icon: 'warning',
      buttons: ['خیر', 'بله'],
    }).then(async (result) => {
      if (result) {
        const res = await fetch('/api/auth/signout', {
          method: 'POST',
        })
        if (res.status === 200) {
          swal({
            title: 'شما با موفقیت از اکانت خارج شدید',
            icon: 'success',
            buttons: 'ok',
          }).then(() => {
            // !isLogin
            location.replace('/')
          })
        }
      }
    })
  }


  return (
    <div className={`w-[95%] flex justify-center m-auto  ${fixTop ? "fixed top-0  w-full   z-50 shadow " : " "}`}>
      <div className={`lg:w-[95%] xl:w-[80%] w-full sm:w-[80%] m-auto sm:rounded-b-[40px] z-10 absolute ${fixTop ? "h-[70px] sm:h-[80px]" : "h-[70px] sm:h-[100px]"} flex justify-between items-center bg-white sm:bg-black transition-all duration-300`}>

        {/* همبرگر منو */}
        {/* <button onClick={() => setIsMenuOpen(true)}>
          <MdMenu className="sm:text-white text-black w-[35px] h-[35px] lg:hidden flex" />
        </button> */}
        <button onClick={() => setIsMenuOpen(true)}>
          <MdMenu
            className={`sm:text-white text-black w-[35px] h-[35px] lg:hidden flex transition-all duration-300 
    ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          />
        </button>

        {/* لوگو */}
        <Link href='/' className="mr-8 flex justify-center items-center w-full sm:w-[12%]">
          <Image width={154} height={11} src="/images/light.png" alt="logo" className="sm:hidden md:flex" />
        </Link>

        {/* منو */}
        <nav className="nav font-semibold text-lg">
          <ul className={`items-center flex flex-col bg-[#85b130] lg:bg-black md:justify-between fixed top-0 bottom-0 ${isMenuOpen ? 'right-0' : 'right-[-300px]'} transition-all duration-300 pt-[5%] w-[300px] lg:pt-0 lg:static lg:flex lg:flex-row lg:w-full lg:mt-0 lg:mr-0`}>

            {/* دکمه بستن */}
            {/* <button onClick={() => setIsMenuOpen(false)}>
              <IoMdClose className={` ${isMenuOpen ? '' : 'hidden'} transition-all duration-500 fixed right-[260px] top-[12px] w-[35px] h-[23px] lg:hidden cursor-pointer`} />
            </button> */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`fixed right-[260px] top-[12px] lg:hidden cursor-pointer transition-all duration-300 
  ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
              <IoMdClose className="text-white w-[35px] h-[23px]" />
            </button>

            {/* آیتم‌ها */}
            <li className="p-4 flex justify-center cursor-pointer">
              <Link href="/" className={styles.myNav}>
                <span className="flex justify-center items-center">
                  <p>صفحه اصلی</p>
                  {/* <IoIosArrowDown className="mr-1 w-[11px]" /> */}
                </span>
              </Link>
            </li>

            <li className="p-4 flex justify-center cursor-pointer">
              <span href="/" className={styles.myNav}>
                <Link href='/shop' className="flex justify-center items-center">
                  <p>فروشگاه</p>
                  {/* <IoIosArrowDown className="mr-1 w-[11px]" /> */}
                </Link>
              </span>
            </li>

            <li className="p-4 flex justify-center cursor-pointer">
              <Link href="/contact-us" className={styles.myNav}>
                <span className="flex justify-center items-center">
                  <p>تماس با ما</p>
                  {/* <IoIosArrowDown className="mr-1 w-[11px]" /> */}
                </span>
              </Link>
            </li>

            <li className="p-4 flex justify-center cursor-pointer">
              <Link href="/about-us" className={styles.myNav}>
                <span className="flex justify-center items-center">
                  <p>درباره ما</p>
                  {/* <IoIosArrowDown className="mr-1 w-[11px]" /> */}
                </span>
              </Link>
            </li>

            <li className="p-4 flex justify-center cursor-pointer">
              <Link href="/wishlists" className={styles.myNav}>
                <span className="flex justify-center items-center">
                  <p>علاقه مندی ها</p>
                  {/* <IoIosArrowDown className="mr-1 w-[11px]" /> */}
                </span>
              </Link>
            </li>


            {!isLogin ? (
              <li className="p-4 flex justify-center cursor-pointer">
                <Link href="/login-register" className={styles.myNav}>
                  <span className="flex justify-center items-center">
                    <p>ورود/عضویت</p>
                  </span>
                </Link>
              </li>
            ) : (
              <li className="p-4 flex flex-col items-center cursor-pointer relative group">
                <Link href="/p-user" className={styles.myNav}>
                  <span className="flex justify-center items-center">
                    <p>حساب کاربری</p>
                    <IoIosArrowDown className="mr-1 w-[11px]" />
                  </span>
                </Link>

                {/* ناحیه واسط برای حفظ hover */}
                <div className="absolute top-[56px] h-[20px] w-full"></div>

                {/* زیرمنو */}
                <div
                  className={`absolute top-[73px] w-[240px] h-auto justify-end flex flex-col text-right mt-2 p-3 bg-white
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg rounded-lg`}
                >
                  <Link
                    className="mb-2 p-2 hover:text-green-700 rounded-[10px] hover:bg-gray-100"
                    href="/p-user/orders"
                  >
                    سفارشات
                  </Link>
                  <Link
                    className="mb-2 p-2 hover:text-green-700 rounded-[10px] hover:bg-gray-100"
                    href="/p-user/tickets"
                  >
                    تیکت‌های پشتیبانی
                  </Link>
                  <Link
                    className="mb-2 p-2 hover:text-green-700 rounded-[10px] hover:bg-gray-100"
                    href="/p-user/comments"
                  >
                    کامنت‌ها
                  </Link>
                  <Link
                    className="mb-2 p-2 hover:text-green-700 rounded-[10px] hover:bg-gray-100"
                    href="/p-user/wishlists"
                  >
                    علاقه‌مندی‌ها
                  </Link>
                  <Link
                    className="mb-2 p-2 hover:text-green-700 rounded-[10px] hover:bg-gray-100"
                    href="/p-user/accountDetail"
                  >
                    جزئیات اکانت
                  </Link>
                  <p

                    className="mb-2 p-2 hover:text-green-700 rounded-[10px] hover:bg-gray-100"
                    onClick={logOut}
                  >
                    خروج
                  </p>
                </div>
              </li>

            )}
          </ul>
        </nav>

        {/* آیکون‌ها */}
        <span className="text-white flex justify-center items-center ml-8">
          <IoSearchOutline className="justify-center text-[#7CC503] items-center w-[20px] h-[20px] ml-3 hidden sm:flex" />
          <p className="border-l-2 hidden sm:flex border-gray-700 text-white pl-2">جستجو</p>

          <Link href='/wishlists' className="justify-center hidden sm:flex items-center relative w-[50px] h-[50px] hover:bg-[#7CC503] rounded-full border-2 border-gray-800 ml-2 mr-10">
            <IoHeartOutline className="w-[20px] h-[20px]" />
          </Link>
          <span className="w-[20px] h-[20px] hidden sm:flex bg-[#027b4c] absolute top-[16px] text-white rounded-full justify-center items-center">
            {wishes.length === 0 ? 0 : wishes.length}
          </span>

          <Link href='/cart' className="flex relative justify-center items-center w-[50px] h-[50px] hover:bg-[#7CC503] rounded-full border-2 border-gray-800">
            <FaShoppingBasket className="w-[20px] h-[20px] text-black sm:text-white" />
          </Link>
          <span className="w-[20px] top-[16px] left-[53px] absolute h-[20px] bg-[#027b4c] text-white rounded-full flex justify-center items-center">
            {cart.length === 0 ? 0 : cart.length}
          </span>
        </span>
      </div>
    </div>
  )
}

export default Navbar
